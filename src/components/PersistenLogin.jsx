import { Outlet } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import AuthenticationContext from "../context/Auth/useContext";

const PersistenLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { authToken, persist } = useContext(AuthenticationContext);

  useEffect(() => {
    let isMounted = true;
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    !authToken?.accessToken && persist
      ? verifyRefreshToken()
      : setIsLoading(false);

    return () => (isMounted = false);
    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   console.log(`isLoading: ${isLoading}`);
  //   console.log(`aT: ${JSON.stringify(authToken?.accessToken)}`);
  //   // eslint-disable-next-line
  // }, [isLoading]);

  return (
    <>{!persist ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />}</>
  );
};

export default PersistenLogin;
