import React from 'react'
import Navbar from './Navbar'
import { useState ,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Homepage = () => {
 const navigate = useNavigate();
const [pdts, setpdts] = useState([])
const [load, setload] = useState(false)
const handleeve = async () =>{
  try{
  const res = await axios.get("https://chrono-vault.onrender.com/api/products")

  setpdts(res.data)
  }
  catch{
    console.log('error');
    
  }
  finally{
    setload(true)
  }
}
useEffect(() => {
  handleeve()

 
}, [pdts])


  const handleClick = (id) => {
    navigate(`/product/${id}`); // 👈 navigate to product/:id
  };



  return (
    <div>
     {
      load?(<div>
      
      <div className='bg-[#ddf1db] min-h-[800px] flex justify-center '>
       <div className='grid grid-cols-4 as:grid-cols-3 as1:grid-cols-2 as2:grid-cols-1 place-items-center gap-y-[20px] gap-x-[20px] w-[87vw]'>
         {pdts.map((items)=>(
          <div className='bg-white w-[250px] h-[320px] rounded-[15px] p-[15px] cursor-pointer hover:border border-[#20e906] mt-[20px] mb-[20px]' onClick={()=>{handleClick(items._id)}}>

          <div className=' flex justify-center'><img src={items.image} alt="" className='w-[180px]'/></div>
          <div className='font-bold text-[208x] mt-[10px]'>{items.name}</div>
          <div className='text-[17px]'>&#8377;{items.price}</div>
          <div className='text-[14px]'>⭐{items.rating}</div>
          <div className='text-[14px]'>Category: {items.category}</div>
          </div>
        ))}
       </div>
      </div>
     </div>):(<div className="flex justify-center items-center h-[100vh]">
          <div className="loader"></div>
        </div>)
     }
    </div>
  )
}

export default Homepage
