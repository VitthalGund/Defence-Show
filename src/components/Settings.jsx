import "../css/settings.css";
import { useContext, useEffect, useState } from "react";
// import { Context } from "../../context/Context";
import axios from "../api/axios";
import AuthenticationContext from "../context/Auth/useContext";
import AlertContext from "../context/Alert/useContext";
import { Buffer } from "buffer";
/**
 * A React component that allows users to update their account settings.
 */
export default function Settings() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [success, setSuccess] = useState(false);
  const { authToken } = useContext(AuthenticationContext);
  const { displayAlert } = useContext(AlertContext);

  /**
   * Handles the form submission.
   * Makes an HTTP PUT request to update the user's information.
   * @param {Event} e - The form submit event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("requested");
    try {
      console.log("waiting for response...");
      const res = await axios.put("/userinfo/update", user, {
        headers: {
          "Content-Type": "application/json",
          "withCredentails": true,
          "Authorization": authToken.accessToken
        }
      });
      console.log(res.data);
      setSuccess(res.data.status);
      // dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      // dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  /**
   * Handles the change event of the form inputs.
   * Updates the user state with the new input values.
   * @param {Event} e - The change event.
   */
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchInfo = async () => {
      const response = await axios.get(`/userinfo/image/${authToken.username}`, {
        headers: {
          "Authorization": authToken.token
        }
      });
      const imageData = response.data.resp.userProfileImage.data;
      const base64Image = new Buffer.from(imageData).toString('base64');
      setFile(base64Image);
    };
    fetchInfo();
  }, [authToken.token, authToken.username]);

  const uploadImage = async () => {
    const data = new FormData();
    const filename = Date.now() + file?.name;
    data.append("name", filename);
    data.append("profilePic", file);
    data.append("email", authToken.email);
    data.append("username", authToken.username);
    console.log(authToken);
    try {
      axios.put("/userinfo/profileimage", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          "withCredentails": true,
          "Authorization": authToken.token
        }
      }).then((response) => {
        if (response.status === 200) {
          const imageData = response.data.userProfileImage.data;
          const base64Image = Buffer.from(imageData).toString('base64');
          setFile(base64Image);
          displayAlert("Profile Picture is Updated", "success");
        }
      }).catch((err) => {
        console.log(err);
      });
    } catch (error) {
      if (!error.response?.status === 400) {
        displayAlert("Missing Username or Password", "danger");
      } else if (error.response?.status === 401) {
        displayAlert("Unauthorized", "danger");
      } else if (!error.response) {
        displayAlert("Server is unavailable!", "danger");
      } else {
        displayAlert("Login Failed", "danger");
      }
    }
  }
  const fileToBuffer = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const buffer = Buffer.from(event.target.result);
        resolve(buffer);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsArrayBuffer(file);
    });
  };
  return (
    <div className="container">
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
          </div>
          <form className="settingsForm" onSubmit={handleSubmit}>
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img
                src={file ? `data:image/png;base64,${file}` : `https://api.multiavatar.com/${authToken.username.toLowerCase()}.svg`}
                alt=""
              />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
              </label>
              <input
                type="file"
                id="fileInput"
                name="profilePic"
                style={{ display: "none" }}
                onChange={async (e) => {
                  const selectedFile = e.target.files[0];
                  if (selectedFile) {
                    try {
                      const buffer = await fileToBuffer(selectedFile);
                      setFile(buffer.toString('base64'));
                    } catch (error) {
                      console.error("Error converting file to buffer:", error);
                    }
                  }
                }}
                accept="image/*"
              />
              <i className="bi bi-upload" style={{
                margin: "8px", fontSize: "1.8rem"
              }} onClick={() => { uploadImage() }}>
              </i>
            </div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              id="username"
              defaultValue={authToken.username}
              placeholder={user.username}
              onChange={(e) => onChange(e)}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={user.email}
              defaultValue={authToken.email}
              onChange={(e) => onChange(e)}
            />
            <label>Password</label>
            <input
              type="password"
              name="newPassword"
              id="password"
              onChange={(e) => onChange(e)}
              placeholder="password..."
            />
            <button className="settingsSubmit" type="submit">
              Update
            </button>
            {success && (
              <span
                style={{ color: "green", textAlign: "center", marginTop: "20px" }}
              >Profile has been updated...</span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
