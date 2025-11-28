import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
const Thank = () => {

const navigate = useNavigate()

  return (

    
    <div>
        
      <div className='p-[25px] h-[100vh]'>
        <div className='text-[#1fab03] text-[40px] font-bold'>
        Thank You!
      </div>
      <div>
        Your Order has been placed
      </div>
      <div className='text-[13px]'>
        <div className='cursor-pointer text-white bg-[#1fab03] mt-[50px] w-[120px] flex justify-center rounded-[15px] p-[2px] items-center' onClick={()=>{navigate('/')}}>&lt; Back to Home</div>
      </div>
      </div>
    </div>
  )
}

export default Thank
