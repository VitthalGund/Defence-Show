import { useState } from "react";
import AuthenticationContext from "./useContext";
// import { useNavigate } from "react-router-dom";

const AuthState = (props) => {
    const [authToken, setAuthToken] = useState(null);
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist")) || false);
    const verifyLogin = () => {
        if (authToken) {
            // console.log(authToken)
            return true;
        } else {
            return false;
        }
    }
    return (
        <>
            <AuthenticationContext.Provider value={{ authToken, setAuthToken, verifyLogin, persist, setPersist }}>
                {props.children}
            </AuthenticationContext.Provider>
        </>
    )
}

export default AuthState;