import React, { useState, useEffect } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import Navbar from "./Navbar";

const Itempage = ({isLoggedIn}) => {
  const [proid, setproid] = useState(null);
  const [load, setload] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate()

  const handleback = ()=>{
    navigate("/")
  }
  const handlebuy = ()=>{
    if(isLoggedIn)
      navigate(`/checkout/${id}`)
    else
      {toast.info('Pls Login')
        navigate('/login')}
  }

  const fetchId = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/products/${id}`);
      setproid(res.data);
      console.log(res.data.name);
      setload(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchId(); // ✅ call the function
  }, []);

  return (
    <div>
      
      {load ? (
        <div className="pl-[100px] pr-[100px] pt-[50px] flex i:flex-col i:pl-[15px] i:pr-[15px] h-[100vh] i:h-[200vh]">
          <div className=" w-1/3 i:w-full flex items-center i:mb-[100px]">
            <img src={proid.image} alt={proid.name} className="w-[500px]" />
          </div>
          <div className="pl-[100px] w-2/3 h-[80vh] i:w-full  i:pl-[5px]">
            <div className="font-bold text-[30px] ">{proid.name}</div>
             <div className="text-[25px]">
            &#8377;{proid.price}
          </div>
          <div>
            Qty: 1
          </div>
          <div className="text-[14px] mt-[8px]">
            ⭐{proid.rating} / 10
          </div>
          <div className=" text-[15px] mt-[20px] font-bold" >
            Description
            <div className="text-[13px] font-normal text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, accusantium autem ut in optio labore debitis at voluptatum ipsa! Delectus, mollitia deserunt eaque eius sequi quaerat voluptas eum enim numquam excepturi commodi, aliquam facere necessitatibus quisquam aperiam natus repellendus sint aliquid ad reprehenderit. Dolorum, voluptatibus.
            </div>
            <div onClick={handlebuy} className="hover:opacity-70 cursor-pointer mt-[50px] bg-[#1fab03] text-white rounded-[15px] h-[30px] flex items-center justify-center"> 
              Buy Now
            </div>
            <div className="hover:opacity-70 cursor-pointer mt-[10px] bg-[#1fab03] text-white rounded-[15px] h-[30px] flex items-center justify-center" onClick={handleback}>
              Go Back
            </div>
          </div>
          </div>
         
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Itempage;
