import React, { useContext } from 'react';
import AlertContext from '../context/Alert/useContext';

function Alert() {
    const { alert } = useContext(AlertContext);
    const captalized = (mgs) => {
        const lower = mgs.toLowerCase();
        if (lower === "danger") {
            return "Error"
        }
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        // style={{position:'fixed',top:50,width:'100%'}} -> This code is used to show alert below navbar with scorlling
        <>
            {alert && <div style={{ height: "3rem", top: -10, width: '100%' }} className={`alert alert-${alert.type} alert-dismissible fade show my-2`} role="alert">
                <strong>{captalized(alert.type) + ": "}</strong>{alert.mgs}
            </div >}
        </>
    )
}

export default Alert;