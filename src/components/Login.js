import React, { useState, useContext } from 'react'
import "../css/login.css"
import axios from '../api/axios';
import AuthState from '../context/Auth/AuthState';
import AlertContext from '../context/Alert/useContext';

const Login = () => {
    const [credentails, setCredentails] = useState({ username: "", email: "", password: "" });
    const { setAuthToken } = useContext(AuthState);
    const { displayAlert } = useContext(AlertContext);
    const handleOnChange = (e) => {
        setCredentails(...credentails, { [e.target.name]: e.target.value })
    }

    const validateUserCredentails = async () => {
        try {
            const response = await axios.post("/login",
                JSON.stringify({
                    username: credentails.username,
                    email: credentails.email,
                    password: credentails.password
                }), {
                headers: {
                    'Content-Type': "application/json",
                    withCredentails: true
                }
            })
            console.log(response);
            setAuthToken({
                username: credentails.username,
                password: credentails.password,
                roles: response?.data?.roles,
                authToken: response?.data?.authToken
            });
            displayAlert("Login Successfully!", "success");
        } catch (error) {
            if (!error?.response) {
                displayAlert('No Server Response', "danger");
            } else if (error.response?.status === 400) {
                displayAlert('Missing Username or Password', "danger");
            } else if (error.response?.status === 401) {
                displayAlert('Unauthorized', "danger");
            } else {
                displayAlert('Login Failed', "danger");
            }
        }
    }
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                validateUserCredentails();
            }}>
                <div className="form-group">
                    <label htmlFor="username" className="form-label">
                        <span aria-hidden="true" className="label__letter" style={{ "--index": "0" }}>E</span>
                        <span aria-hidden="true" className="label__letter" style={{ "--index": "1" }}>m</span>
                        <span aria-hidden="true" className="label__letter" style={{ "--index": "2" }}>a</span>
                        <span aria-hidden="true" className="label__letter" style={{ "--index": "3" }}>i</span>
                        <span aria-hidden="true" className="label__letter" style={{ "--index": "4" }}>l</span>
                        <span className="sr-only">Username</span>
                    </label>
                    <div className="form-group__input">
                        <input required type="text" id="username" className="form-input" minLength={2}
                            title="Enter valid email address" placeholder="@username"
                            name='username' value={credentails.username} onChange={(e) => handleOnChange(e)}
                        />
                        <div className="form-group__error">Enter a valid username address</div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        <span aria-hidden="true" className="label__letter" style={{ "--index": "0" }}>E</span>
                        <span aria-hidden="true" className="label__letter" style={{ "--index": "1" }}>m</span>
                        <span aria-hidden="true" className="label__letter" style={{ "--index": "2" }}>a</span>
                        <span aria-hidden="true" className="label__letter" style={{ "--index": "3" }}>i</span>
                        <span aria-hidden="true" className="label__letter" style={{ "--index": "4" }}>l</span>
                        <span className="sr-only">Email</span>
                    </label>
                    <div className="form-group__input">
                        <input required type="email" id="email" className="form-input"
                            pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                            title="Enter valid email address" placeholder="E-mail"
                            name='email' value={credentails.email} onChange={(e) => handleOnChange(e)}
                        />
                        <div className="form-group__error">Enter a valid email address</div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">
                        <span aria-hidden="true" className="label__letter" style={{ "--index": "0" }}>P</span>
                        <span aria-hidden="true" className="label__letter" style={{ "--index": "1" }}>a</span>
                        <span aria-hidden="true" className="label__letter" style={{ "--index": "2" }}>s</span>
                        <span aria-hidden="true" className="label__letter" style={{ "--index": "3" }}>s</span>
                        <span aria-hidden="true" className="label__letter" style={{ "--index": "4" }}>w</span>
                        <span aria-hidden="true" className="label__letter" style={{ "--index": "4" }}>o</span>
                        <span aria-hidden="true" className="label__letter" style={{ "--index": "4" }}>r</span>
                        <span aria-hidden="true" className="label__letter" style={{ "--index": "4" }}>d</span>
                        <span className="sr-only">Password</span>
                    </label>
                    <div className="form-group__input">
                        <input required type="password" id="password" className="form-input" title="Password"
                            placeholder="Enter valid password address" name='password' value={credentails.password}
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
                            onChange={(e) => handleOnChange(e)}
                        />
                        <div className="form-group__error">Enter a valid email address</div>

                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login
