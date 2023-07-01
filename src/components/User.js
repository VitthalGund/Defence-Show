import { useContext } from 'react'
import AlertContext from '../context/Alert/useContext'
import AuthenticationContext from '../context/Auth/useContext'
import "../css/user.css"
// import Card from './Card'
// import gsap from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"


//External user icons
/* <img src="https://i.imgur.com/wvxPV9S.png" height="300" width="300" alt='User-Profile-Icon' /> */
// https://www.learningrobo.com/p/live-editor.html
const User = () => {
    const { authToken } = useContext(AuthenticationContext);
    const { displayAlert } = useContext(AlertContext);
    const copyEmail = () => {
        navigator.clipboard.writeText(authToken.email);
        displayAlert("Copied to Clipboard Successfully!", "success");
    }

    return (
        <>
            {/* <div style={{ marginTop: "5rem" }} className='User'>
                {authToken ? <div className="container mt-5 mb-5 p-5 d-flex justify-content-center my-5">
                    <div className="card p-4">
                        <div className=" image d-flex flex-column justify-content-center align-items-center">
                            <button className="btn btn-secondary">
                                <img src={`https://api.multiavatar.com/${authToken.username.toLowerCase()}.svg`} height="300" width="300" alt='User-Profile-Icon' />
                            </button>
                            <span className="name mt-3">Username: {authToken.username}</span>
                            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                                <span className="idd1">Eamil: {authToken.email}</span>
                                <span>
                                    <i className="bi bi-clipboard" id='copy' onClick={(e) => {
                                        e.preventDefault();
                                        copyEmail();
                                    }}></i></span>
                            </div>
                            <div className=" px-2 rounded mt-4 date ">
                                <span className="join">Joined {Date(authToken.date)}</span>
                            </div>
                        </div>
                    </div>
                </div> : <About />}
            </div > */}
            <div className="userpage">

                <div className="card">
                    <div className="card-header">
                        <div className="avatar">
                            <div className="user-online-indicator"></div>
                            <img
                                src={`https://api.multiavatar.com/${authToken.username.toLowerCase()}.svg`}
                                alt="user"
                            />
                        </div>
                        <div className="profile-name">
                            <h1>
                                Username:
                                {authToken.username}</h1>
                        </div>
                        <div className="profile-role">
                            <p>Email:</p>
                            {authToken.email}
                            <i className="bi bi-clipboard" id='copy' onClick={(e) => {
                                e.preventDefault();
                                copyEmail();
                            }}></i>
                        </div>
                    </div>
                    <div className="card-footer">
                        {/* <Card title={"He"} date={Date.now()} /> */}
                        {/* <Card title={"He"} date={Date.now()} />
                        <Card title={"He"} date={Date.now()} />
                        <Card title={"He"} date={Date.now()} />
                        <Card title={"He"} date={Date.now()} /> */}
                    </div>
                </div>
            </div >

        </>
    )
}

export default User
