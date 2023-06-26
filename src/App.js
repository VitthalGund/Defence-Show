import React from "react";
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from "./components/About"
import Footer from './components/Footer';
import AlertState from "./context/Alert/AlertState";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ContactNewPage from "./components/ContactNewPage";
import BackVideo from "./components/BackVideo";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import User from "./components/User";
import RequireAuth from "./components/RequireAuth";


const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <BackVideo />
        <Alert />
        <Routes>
          <Route exact path='/' element={
            <Home />
          } />
          <Route exact path='/about' element={
            <About />
          } />
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route exact path='/contact' element={
              <ContactNewPage />
            } />
          </Route>
          <Route exact path='/blogs' element={
            <Home />
          } />
          <Route exact path='/login' element={
            <Login />
          } />
          <Route exact path='/sign' element={
            <SignUp />
          } />
          <Route exact path="/user" element={
            <User />} />
        </Routes>
        <AlertState>
          <Footer />
        </AlertState>
      </Router >
    </>
  );
}

export default App;
