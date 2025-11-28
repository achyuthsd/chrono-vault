import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userid");
    setIsLoggedIn(false);
    toast.success('Logged Out successfully')
    navigate("/login");
  };

  return (
    <div className="bg-[#1fab03] h-[45px] flex justify-between items-center px-[15px]">
      <div className="text-white text-[20px] font-extrabold">ChronoVault</div>

      <div className="flex gap-8 text-white text-[14px]">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/help" className="hover:underline">Help</Link>

        {!isLoggedIn ? (
          <>
            <Link to="/signup" className="hover:underline">Register</Link>
            <Link to="/login" className="hover:underline">Login</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="hover:underline">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
