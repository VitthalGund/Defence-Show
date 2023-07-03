import { useContext } from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Alert from "./Alert";
import AlertContext from "../context/Alert/useContext";

function Footer() {
  const [email, setEmail] = useState("");
  const { displayAlert } = useContext(AlertContext);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const SubcribeService = () => {
    if (validateEmail(email)) {
      displayAlert("Thanks for Subscribing to our Services", "success");
    } else {
      displayAlert("Invalid Email!", "danger");
    }
  };

  return (
    <>
      <footer>
        <div>
          <div className="column about">
            <h2>Defence Shorts</h2>
            <p>
              नमस्ते, मे Defence Show पर आपका स्वागत करता हुँ मे इस Youtube
              Channel पर Defence से जुडी 2-3 Videos Upload करता हूँ पहेली वीडियो
              का समय सुबह 9:10 बाजे दूसरी वीडियो का समय दोपहर 2:10 बजे तीसरी
              वीडियो का समय शाम 7:10 बजे होता है तीनो ही वीडियो बहुत Simple भाषा
              मे होती है अगर आपको Defence Short Channel का यह प्रयास पसंद आये तो
              आप Channel को Subscribe करके Bell Icon को दबाए और Defence Short को
              Support करके Defence Short Family का Part बने धन्यवाद आपका दिन सुभ
              हो|
            </p>
            <div className="social">
              <i className="fa-brands fa-facebook-square"></i>
              <i className="fa-brands fa-instagram-square"></i>
              <i className="fa-brands fa-twitter-square"></i>
              <i className="fa-brands fa-youtube-square"></i>
              <i className="fa-brands fa-whatsapp-square"></i>
            </div>
          </div>
          <div className="column links">
            <h2>Some Links</h2>
            <ul>
              <li>
                <Link href="#faq">F.A.Q</Link>
              </li>
              <li>
                <Link href="#cookies-policy">Cookies Policy</Link>
              </li>
              <li>
                <Link href="#terms-of-services">Terms Of Service</Link>
              </li>
              <li>
                <Link href="#support">Support</Link>
              </li>
            </ul>
          </div>

          <div className="column subscribe">
            <h2>Subscribe</h2>
            <div>
              <Alert />
              <input
                type="email"
                required
                name="email"
                placeholder="Your email id here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="element"
              />
              <button type="button" id="btnsubmit" onClick={SubcribeService}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="row copyright">
          <span className="footer-menu">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="https://www.youtube.com/@defenceshort1/" target="_blank">
              Social
            </Link>
          </span>
          <p id="copy" className="copyright">
            Copyright &copy; 2022 Defence Shorts
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
