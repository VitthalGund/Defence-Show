import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import AlertState from './context/Alert/AlertState';
// import AuthState from './context/Auth/AuthState';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AlertState>
      <AuthState> */}
    <App />
    {/* </AuthState>
    </AlertState> */}
  </React.StrictMode>
);
