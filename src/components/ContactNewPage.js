import { useState } from 'react'
import "../css/newContact.css";
// import axios from '../api/axios';


// https://colorlib.com/etc/cf/ContactFrom_v10/index.html
// https://colorlib.com/etc/cf/ContactFrom_v6/index.html
document.title = "Contact | Defence Shorts";
function ContactNewPage() {
    const [fullName, setFullName] = useState("");
    // const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const handleContact = () => {
        console.log("TODO:Contact");
        // const response = axios.post("/contact", {});
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
                            {/* <div className="wrap-input100 validate-input" data-validate="Please enter your email: e@a.x">
                                <input className="input100" type="email" name="email" id="email" placeholder="E-mail"
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                />
                                <span className="focus-input100"></span>
                            </div> */}
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