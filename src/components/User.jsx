import { useContext, useState, useEffect } from "react";
// import axios from "../api/axios";
import AlertContext from "../context/Alert/useContext";
import AuthenticationContext from "../context/Auth/useContext";
import "../css/user.css";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
// import Card from './Card'
// import gsap from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"

//External user icons
/* <img src="https://i.imgur.com/wvxPV9S.png" height="300" width="300" alt='User-Profile-Icon' /> */
// https://www.learningrobo.com/p/live-editor.html
const User = () => {
  const [file, setFile] = useState(null);
  const { authToken } = useContext(AuthenticationContext);
  const { displayAlert } = useContext(AlertContext);
  const copyEmail = () => {
    navigator.clipboard.writeText(authToken.email);
    displayAlert("Copied to Clipboard Successfully!", "success");
  };
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
  const navigation = useNavigate()
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
              <p>Email:</p>
              {authToken.email}
              <i
                className="bi bi-clipboard"
                id="copy"
                style={{ padding: "3px" }}
                onClick={(e) => {
                  e.preventDefault();
                  copyEmail();
                }}
              ></i>
            </div>
          </div>
          <div className="card-footer">
            <button className="logout" onClick={() => {
              navigation("/edit")
            }}>Edit Profile</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
