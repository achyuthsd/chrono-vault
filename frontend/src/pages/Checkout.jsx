import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Navbar from "./Navbar";

const Checkout = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [proid, setproid] = useState();
  const [load, setload] = useState(false);
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [phno, setphno] = useState("")
  const [address, setaddress] = useState("")


const placeorder = async() =>{

if(name == "" || email == "" || phno == "" || address == "")
    toast.info('Pls enter all details')
else if(isNaN(phno)){toast.info('Pls enter a valid Phone number')}
else{

  try {
     const res = await axios.post(`http://localhost:5000/api/order`,{
      userid:localStorage.getItem("userid"),
      name,
      email,
      phno,
      address,
      item:proid.name,
      price:proid.price,
     });
    console.log(res.data)
    console.log(localStorage.getItem("userid"))
    toast.success('Order placed succesffully!')
navigate('/success')

  } catch (error) {
    console.log(error)
    toast.error('Please fill all details!')
  }
}

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
    fetchId();
  }, []);

  const goo =() =>{
    navigate('/')
  }


  return (
    <div>
      
      {
        load ? (
 <div className="flex o:flex-col o:pr-[5px]">
        <div className=" h-[100vh] w-1/2 p-[40px] border-r-[2px] o:w-full o:border-none o:h-[50vh] o:p-[15px]">
          <div className="text-[30px] mb-[40px]">Order Details &gt;</div>
          <div className="text-[14px]">
          <div>Name</div>
          <div>
            <input type="text" className="w-[400px] o:w-[90vw] rounded-[15px] mb-[20px] border-[1px] border-black p-[4px]" onChange={(e)=>{setname(e.target.value)}}/>
          </div>
          <div>Email</div>
          <div>
            <input type="text" className="w-[400px] o:w-[90vw] rounded-[15px] mb-[20px] border-[1px] border-black p-[4px]" onChange={(e)=>{setemail(e.target.value)}}/>
          </div>
          <div>Phone no</div>
          <div>
            <input type="text" className="w-[400px] o:w-[90vw] rounded-[15px] mb-[20px] border-[1px] border-black p-[4px]" onChange={(e)=>{setphno(e.target.value)}}/>
          </div>
          <div>Address</div>
          <div>
            <textarea type="text" className="w-[400px] o:w-[90vw] resize-none rounded-[15px] mb-[20px] border-[1px] border-black p-[4px]" onChange={(e)=>{setaddress(e.target.value)}}/>
          </div>
          </div>
        </div>
        <div className=" h-[90vh] w-1/2 p-[20px] text-gray-600 o:w-full o:mt-[100px] ">
        <div className=" h-[130px] flex mt-[30px]  text-[14px] rounded-[15px] border">
<div className=" w-[200px] flex justify-center">
    <img src={proid.image} alt="f" className="w-[130px]"/>
</div>
<div className=" w-[200px] flex items-center justify-center">
    {proid.name}
</div>
<div className=" w-[200px] flex items-center justify-center">
    qty: 1
</div>
<div className=" w-[200px] flex items-center justify-center">
    &#8377;{proid.price}
</div>
        </div>
        <div className="bg-[#1fab03] hover:opacity-70 cursor-pointer text-white mt-[150px] o:mt-[80px] rounded-[15px] flex justify-center items-center h-[30px]" onClick={placeorder}>
            Confirm
        </div>
        <div className="bg-[#1fab03] hover:opacity-70 cursor-pointer text-white mt-[20px] rounded-[15px] flex justify-center items-center h-[30px]" onClick={goo}>
            Go Back
        </div>
        </div>
      </div>
        ):(<div>load</div>)
      }
     
    </div>
  );
};

export default Checkout;
