import { useContext, useState, useEffect } from "react";
// import axios from "../api/axios";
import AlertContext from "../context/Alert/useContext";
import AuthenticationContext from "../context/Auth/useContext";
import "../css/user.css";
import { useNavigate } from "react-router-dom";
import { Buffer } from "buffer"
import axios from "../api/axios";

/**
 * React component that displays user information and allows the user to edit their profile.
 */
const User = () => {
  const [file, setFile] = useState(null);
  const { authToken } = useContext(AuthenticationContext);
  const { displayAlert } = useContext(AlertContext);
  const navigation = useNavigate();

  /**
   * Copies the user's email to the clipboard and displays a success alert.
   */
  const copyEmail = () => {
    navigator.clipboard.writeText(authToken.email);
    displayAlert("Copied to Clipboard Successfully!", "success");
  };

  useEffect(() => {
    /**
     * Fetches the user's profile image from the server.
     */
    const fetchInfo = async () => {
      try {
        const response = await axios.get(`/userinfo/image/${authToken.username}`, {
          headers: {
            Authorization: authToken.token,
          },
        });
        const imageData = response.data.resp.userProfileImage.data;
        const base64Image = new Buffer.from(imageData).toString('base64');
        setFile(base64Image);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchInfo();
  }, [authToken.token, authToken.username, file]);

  return (
    <>
      <div className="userpage">
        <div className="card">
          <div className="card-header">
            <div className="avatar">
              <div className="user-online-indicator"></div>
              <img
                src={file ? `data:image/png;base64,${file}` : `https://api.multiavatar.com/${authToken.username.toLowerCase()}.svg`}
                alt="user"
              />
            </div>
            <div className="profile-name">
              <h1>
                Username:
                {authToken.username}
              </h1>
            </div>
            <div className="profile-role">
              {/* <p>
              </p> */}
              Email:
              {authToken.email}
              <i
                className="bi bi-clipboard copy-icon"
                onClick={(e) => {
                  e.preventDefault();
                  copyEmail();
                }}
              ></i>
            </div>
          </div>
          <div className="card-footer">
            <button className="logout" onClick={() => navigation("/edit")}>
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
