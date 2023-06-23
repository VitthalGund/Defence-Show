import { useState } from "react";
import AlertContext from "./useContext";


const AlertState = (props) => {
    const [alert, setAlert] = useState(null);
    const displayAlert = (message, type) => {
        setAlert({
            mgs: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }
    return (
        <AlertContext.Provider value={{ alert, displayAlert }}>
            {props.children}
        </AlertContext.Provider>
    )
}
export default AlertState;