import React from 'react'
import { toast } from "react-toastify";
import { Navigate, useNavigate } from 'react-router-dom';
const Help = () => {

const navigate = useNavigate()

    const handlepost = ()=>{
        toast.success('Query posted')
        navigate('/')
    }
  return (
    <div>
        <div className=' h-[100vh] p-[25px] pl-[50px]  h:pl-[5px]'>
      <div className='text-[#1fab03] text-[30px] font-bold'>
        Customer Support
      </div>
      <div className='mt-[20px] ml-[42px]'>
        <div>
            Email:
        </div>
        <div>
            <input type="email" className='w-[500px] h:w-[400px] h1:w-[300px] rounded-[15px] pl-[10px] border-[1px] border-black' />
        </div>
      </div>
      <div className='mt-[20px] ml-[42px]'>
        <div>
        </div>
        <div>
            <textarea type="email" className='h1:w-[300px] w-[500px] h:w-[400px] resize-none h-[200px] rounded-[15px] p-[10px] border-[1px] border-black' placeholder='Enter query'/>
        </div>
        <div className='flex gap-[40px]'>
<div className='bg-[#1fab03] w-[230px] h1:w-[130px] h:w-[180px] rounded-[15px] flex justify-center items-center text-white hover:opacity-80 cursor-pointer mt-[10px]' onClick={handlepost}>
            Confirm
        </div>
        <div className='bg-[#1fab03] w-[230px] h1:w-[130px] h:w-[180px] rounded-[15px] flex justify-center items-center text-white hover:opacity-80 cursor-pointer mt-[10px]' onClick={()=>{navigate('/')}}>
            &lt;Go Back
        </div>
        </div>
        
      </div>

        </div>
    </div>
  )
}

export default Help
