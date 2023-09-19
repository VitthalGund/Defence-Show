import { useState, useContext } from 'react'
import "../css/newContact.css";
import axios from '../api/axios';
import AuthenticationContext from '../context/Auth/useContext';
import AlertContext from '../context/Alert/useContext';

// https://colorlib.com/etc/cf/ContactFrom_v10/index.html
// https://colorlib.com/etc/cf/ContactFrom_v6/index.html
document.title = "Contact | Defence Shorts";
function ContactNewPage() {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const { authToken } = useContext(AuthenticationContext);
    const { displayAlert } = useContext(AlertContext);
    const handleContact = async () => {
        try {
            const response = await axios.post("/contact", {
                fullName: fullName,
                username: authToken.username,
                email: authToken.email,
                phoneNo: phone,
                message: message
            }, {
                headers: {
                    'Content-Type': "application/json",
                    withCredentails: true,
                    authorization: authToken.token
                }
            });
            if (response.status === 202) {
                displayAlert("Resposne is recorded...", "success");
                setTimeout(() => {
                    displayAlert("We will contact you soon with your query!", "success");
                }, 2000);
            }
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
    return (
        <>
            <div className='contactUsPage container'>
                <div className="container-contact100">
                    <div className="wrap-contact100">
                        <form className="contact100-form validate-form" onSubmit={(e) => {
                            e.preventDefault();
                            handleContact();
                        }}>
                            <span className="contact100-form-title">
                                Send Us A Message
                            </span>
                            <div className="wrap-input100 validate-input" data-validate="Please enter your name">
                                <input className="input100" type="text" name="fullName" id="fullName" placeholder="Full Name" required
                                    value={fullName} onChange={(e) => setFullName(e.target.value)}
                                />
                                <span className="focus-input100"></span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Please enter your phone">
                                <input className="input100" type="number" name="phone" id="phone" placeholder="Phone"
                                    value={phone} onChange={(e) => { setPhone(e.target.valueAsNumber); }} minLength={8}
                                />
                                <span className="focus-input100"></span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Please enter your message">
                                <textarea className="input100" name="message" id="message" placeholder="Your Message"
                                    value={message} onChange={(e) => setMessage(e.target.value)} spellCheck
                                ></textarea>
                                <span className="focus-input100"></span>
                            </div>
                            <div className="container-contact100-form-btn">
                                <button className="contact100-form-btn">
                                    <span>
                                        <i className="fa fa-paper-plane-o m-r-6" aria-hidden="true"></i>
                                        Send
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ContactNewPage;