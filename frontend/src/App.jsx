import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import Loginpage from './pages/Loginpage.jsx';
import Signuppage from './pages/Signuppage.jsx';
import Itempage from './pages/Itempage.jsx';
import Checkout from './pages/Checkout.jsx';
import Thank from './pages/Thank.jsx';
import Navbar from './pages/Navbar.jsx';
import Footer from './pages/Footer.jsx';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Help from './pages/Help.jsx';
import { useState } from 'react';

function App() {
  // ✅ React state to track login
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("userid"));

  return (
    <>
      <ToastContainer position="top-right" autoClose={4000} />

      {/* Navbar with login state */}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/product/:id" element={<Itempage isLoggedIn={isLoggedIn}/>} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/success" element={<Thank />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
