import "../CSS/contact.css"
import BackVideo from './BackVideo'

export default function Contact() {
    return (
        <>
            <BackVideo />
            <div className="mainform">
                <div className="container">
                    <div className="title">Contact Us</div>
                    <div className="contents">
                        <form action="" method="POST">
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Full Name</span>
                                    <input type="text" placeholder="Enter your name" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input type="email" placeholder="Enter your email" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Phone Number</span>
                                    <input type="number" placeholder="Enter your number" required />
                                </div>
                            </div>
                            <div className="gender-details">
                                <input type="radio" name="gender" id="dot-1" />
                                <input type="radio" name="gender" id="dot-2" />
                                <input type="radio" name="gender" id="dot-3" />
                                <span className="gender-title">Gender</span>
                                <div className="category">
                                    <label htmlFor="dot-1">
                                        <span className="dot one"></span>
                                        <span className="gender">Male</span>
                                    </label>
                                    <label htmlFor="dot-2">
                                        <span className="dot two"></span>
                                        <span className="gender">Female</span>
                                    </label>
                                    <label htmlFor="dot-3">
                                        <span className="dot three"></span>
                                        <span className="gender">other</span>
                                    </label>
                                </div>
                            </div>
                            <div className="input-box">
                                <span className="details" id="des">Description</span>
                                <textarea name="" id="" cols="30" rows="15" placeholder="Enter Reason" required></textarea>
                            </div>
                            <div className="button">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
