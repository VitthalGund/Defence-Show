import axios from '../api/axios';
import { useContext } from 'react';
import AuthenticationContext from '../context/Auth/useContext';

const useRefreshToken = () => {
    const { setAuthToken } = useContext(AuthenticationContext);

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        setAuthToken(prev => {
            return {
                ...prev,
                roles: response.data.roles,
                token: response.data.accessToken,
                username: response.data.username,
                password: response.data.password,
                email: response.data.email
            }
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;