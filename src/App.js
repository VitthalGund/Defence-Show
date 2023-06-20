import React from "react";
import './App.css';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import Contact from "./components/Contact"
import About from "./components/About"
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={
            <MainPage />
          }
          >
          </Route>
          <Route exact path='/about' element={
            <><About /></>
          }
          >
          </Route>
          <Route exact path='/contact' element={
            <><Contact /></>
          }
          >
          </Route>
          <Route exact path='/blogs' element={
            <><MainPage /></>
          }
          >
          </Route>
        </Routes>
        <Footer />
      </Router >
    </>
  );
}

export default App;
