import "../css/settings.css";
import { useContext, useEffect, useState } from "react";
// import { Context } from "../../context/Context";
import axios from "../api/axios";
import AuthenticationContext from "../context/Auth/useContext";
import AlertContext from "../context/Alert/useContext";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { authToken } = useContext(AuthenticationContext);
  const { displayAlert } = useContext(AlertContext);
  // const PF = "http://localhost:5000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("requested")
    try {
      console.log("waiting for response...")
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
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    const fetchInfo = async () => {
      const response = await axios.get(`/userinfo/image/${authToken.username}`, {
        headers: {
          "Authorization": authToken.token
        }
      });
      setFile(btoa(String.fromCharCode(...new Uint8Array(response.data.resp[0].userProfileImage.data))))
    }
    fetchInfo();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (!isLoading) {
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
        }).then((data) => {
          console.log(data.data);
        }).catch((err) => {
          console.log(err);
        })
      } catch (error) {
        if (!error?.response) {
          displayAlert("No Server Response", "danger");
        } else if (error.response?.status === 400) {
          displayAlert("Missing Username or Password", "danger");
        } else if (error.response?.status === 401) {
          displayAlert("Unauthorized", "danger");
        } else {
          displayAlert("Login Failed", "danger");
        }
      }
    }
    setIsLoading(false);
    // eslint-disable-next-line
  }, [file])
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
                type="file" id="fileInput" name="profilePic" style={{ display: "none" }}
                onChange={(e) => {
                  setFile(e.target.files[0])
                  console.log(file)
                }} accept="image/*"
              />
            </div>
            <label>Username</label>
            <input
              type="text" name="username"
              id="username" defaultValue={authToken.username}
              placeholder={user.username}
              onChange={(e) => onChange(e)}
            />
            <label>Email</label>
            <input
              type="email" name="email" id="email"
              placeholder={user.email} defaultValue={authToken.email}
              onChange={(e) => onChange(e)}
            />
            <label>Password</label>
            <input
              type="password" name="newPassword" id="password"
              onChange={(e) => onChange(e)} placeholder="new Password"
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
