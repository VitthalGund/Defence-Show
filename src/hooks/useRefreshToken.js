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
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return {
                ...prev,
                roles: response.data.roles,
                accessToken: response.data.accessToken
            }
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;