import { useState } from "react";
import AuthenticationContext from "./useContext";
// import { useNavigate } from "react-router-dom";

const AuthState = (props) => {
    const [authToken, setAuthToken] = useState(null);
    const verifyLogin = () => {
        if (authToken) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <>
            <AuthenticationContext.Provider value={{ authToken, setAuthToken, verifyLogin }}>
                {props.children}
            </AuthenticationContext.Provider>
        </>
    )
}

export default AuthState;