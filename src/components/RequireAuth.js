import { useLocation, Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthenticationContext from '../context/Auth/useContext'
// import AlertContext from '../context/Alert/useContext';

const RequireAuth = ({ allowedRoles }) => {
    // const { displayAlert } = useContext(AlertContext);
    const { authToken } = useContext(AuthenticationContext);
    const location = useLocation();
    return (
        <>
            {authToken?.roles?.find(role => allowedRoles?.includes(role))
                ? <Outlet />
                : authToken?.user
                    ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                    : <Navigate to="/login" state={{ from: location }} replace />
            }
        </>
    )
}

export default RequireAuth
