import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Loginpage = ({ setIsLoggedIn }) => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
let res
  const navigate = useNavigate();

  const register = () => {
    navigate("/signup");
  };

  const clickbtn = async () => {
    if(email == "" || pass == "")
      toast.info('Pls enter the credentials!')
    else
    {
      localStorage.clear();
      try {
       res = await axios.post("https://chrono-vault.onrender.com/api/login", {
        email,
        password: pass,
      });
      console.log(res.data);
      
      if(res.data.msg === "No such user exists")
          toast.info(res.data.msg);
      else if(res.data.msg === "Check your password & Try again"){
        toast.info(res.data.msg)
          }
      else if(res.data.msg === "Logged in successfully")
          {
            toast.success(res.data.msg)
            localStorage.setItem("userid", res.data.userId);
            console.log(localStorage.getItem("userid"))
            setIsLoggedIn(true); 
            navigate('/')
          }


    } catch (error) {
      console.log(error);
    }
    }
   
  };

  return (
    <div>
      
      <div className="h-[92vh] flex justify-center items-center">
        <div className="w-[30vw] h-[350px] rounded-[15px] border-2 border-[#1fab03] p-[25px] l:w-[500px] l1:w-[350px]">
          <div className="text-[#1fab03] text-[25px] font-bold mb-[20px]">
            Login
          </div>

          {/* Email Input */}
          <div className="text-[13px]">Enter e-mail:</div>
          <div>
            <input
              type="text"
              className="border-[1px] border-black rounded-[15px] w-full pl-[10px] text-[14px]"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="text-[13px] mt-[10px]">Enter password:</div>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              className="border-[1px] border-black rounded-[15px] w-full pl-[10px] text-[14px]"
              onChange={(e) => setpass(e.target.value)}
            />
          </div>

          {/* Show Password Toggle */}
          <div className="flex gap-2 mt-[5px] items-center">
            <input
              type="checkbox"
              className="w-[12px] cursor-pointer"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <div
              className="text-[11px] cursor-pointer select-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              Show password
            </div>
          </div>

          {/* Login Button */}
          <div
            onClick={clickbtn}
            className="bg-[#1fab03] w-full text-white rounded-[15px] flex justify-center mt-[25px] items-center text-[13px] h-[23px] cursor-pointer"
          >
            Log in
          </div>

          {/* Register Redirect */}
          <div className="text-[12px] flex justify-center mt-[40px]">
            New User?&nbsp;
            <span
              onClick={register}
              className="cursor-pointer hover:underline text-[#1fab03]"
            >
              Register Here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
