import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Signuppage = () => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const register = () => {
    navigate("/login");
  };

  const clickbtn = async () => {
if(email == "" || pass == "")
  toast.info('Pls enter the credentials!')
else
{
      localStorage.clear()
    try {
      // Make sure your signup API endpoint is correct here
      const res = await axios.post("/api/register", {
        email,
        password: pass,
      });
      console.log(res.data);
      localStorage.setItem("userid", res.data.id);
      console.log(localStorage.getItem("userid"))
    } catch (error) {
      console.log(error);
    }
    finally{
toast.success("User Registered!")
navigate('/')



    }
}
  };

  return (
    <div>
     
      <div className="h-[92vh] flex justify-center items-center">
        <div className="w-[30vw] h-[350px] rounded-[15px] border-2 border-[#1fab03] p-[25px] l:w-[500px] l1:w-[350px]">
          <div className="text-[#1fab03] text-[25px] font-bold mb-[20px]">
            Sign Up
          </div>

          {/* Email Field */}
          <div className="text-[13px]">Enter e-mail:</div>
          <div>
            <input
              type="text"
              className="border-[1px] border-black rounded-[15px] w-full pl-[10px] text-[14px]"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          {/* Password Field */}
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

          {/* Signup Button */}
          <div
            onClick={clickbtn}
            className="bg-[#1fab03] w-full text-white rounded-[15px] flex justify-center mt-[25px] items-center text-[13px] h-[23px] cursor-pointer"
          >
            Sign up
          </div>

          {/* Redirect to Login */}
          <div className="text-[12px] flex justify-center mt-[40px]">
            Already have an account?&nbsp;
            <span
              onClick={register}
              className="cursor-pointer hover:underline text-[#1fab03]"
            >
              Login Here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signuppage;
