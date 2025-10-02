import React from 'react'
import { RiLinkedinFill } from "react-icons/ri";
import l1 from "../../assets/leaders_img/l1.png";
import l2 from "../../assets/leaders_img/l2.png";
import l3 from "../../assets/leaders_img/l3.png";
import l4 from "../../assets/leaders_img/l4.png";
import l5 from "../../assets/leaders_img/l5.png";
import l6 from "../../assets/leaders_img/l6.png";

const MeetLeaders = () => {
  return (
    <div>
        <div>
        <h1 className='text-4xl font-semibold text-center mt-20'>Meet Our Leaders</h1>
        <p className='text-center text-lg text-gray-600 mt-4 mb-10'>Discover exceptional experiences through testimonials from our satisfied customers.</p>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-40 '>
        <div className=' md:w-auto'>
        <img className='mx-auto mt-10 rounded-2xl w-[350px] h-[350px]' src={l1} alt="journey timeline" />

         <div className='flex justify-between items-center gap-4  mb-10 px-10'>
            <div>
        <h1 className='text-3xl font-semibold text-center mt-4'> John Doe</h1>
        <p className='text-center text-sm text-gray-900 mt-2 mb-10'>Chief Executive Officer</p>
        </div>
          <div>
             <span className=' cursor-pointer'>
          <RiLinkedinFill className='text-2xl grid place-items-center justify-center bg-gray-200 w-7 h-7 rounded-full' />
        </span>
          </div>
        </div>

        </div>

        <div>
        <img className='mx-auto mt-10 rounded-2xl w-[350px] h-[350px]' src={l2} alt="journey timeline" />

         <div className='flex justify-between items-center gap-4  mb-10 px-10'>
            <div>
        <h1 className='text-3xl font-semibold text-center mt-4'> John Doe</h1>
        <p className='text-center text-sm text-gray-900 mt-2 mb-10'>Chief Executive Officer</p>
        </div>
          <div>
             <span className=' cursor-pointer'>
          <RiLinkedinFill className='text-2xl grid place-items-center justify-center bg-gray-200 w-7 h-7 rounded-full' />
        </span>
          </div>
        </div>

        </div>

        <div>
        <img className='mx-auto mt-10 rounded-2xl w-[350px] h-[350px]' src={l3} alt="journey timeline" />

         <div className='flex justify-between items-center gap-4 mb-10 px-10 md:px-5'>
            <div>
        <h1 className='text-3xl font-semibold text-center mt-4'> John Doe</h1>
        <p className='text-center text-sm text-gray-900 mt-2 mb-10'>Chief Executive Officer</p>
        </div>
          <div>
             <span className=' cursor-pointer'>
          <RiLinkedinFill className='text-2xl grid place-items-center justify-center bg-gray-200 w-7 h-7 rounded-full' />
        </span>
          </div>
        </div>

        </div>

        <div>
        <img className='mx-auto mt-10 rounded-2xl w-[350px] h-[350px]' src={l4} alt="journey timeline" />

         <div className='flex justify-between items-center gap-4  mb-10 px-10'>
            <div>
        <h1 className='text-3xl font-semibold text-center mt-4'> John Doe</h1>
        <p className='text-center text-sm text-gray-900 mt-2 mb-10'>Chief Executive Officer</p>
        </div>
          <div>
             <span className=' cursor-pointer'>
          <RiLinkedinFill className='text-2xl grid place-items-center justify-center bg-gray-200 w-7 h-7 rounded-full' />
        </span>
          </div>
        </div>

        </div>

        <div>
        <img className='mx-auto mt-10 rounded-2xl w-[350px] h-[350px]' src={l5} alt="journey timeline" />

         <div className='flex justify-between items-center gap-4  mb-10 px-10'>
            <div>
        <h1 className='text-3xl font-semibold text-center mt-4'> John Doe</h1>
        <p className='text-center text-sm text-gray-900 mt-2 mb-10'>Chief Executive Officer</p>
        </div>
          <div>
             <span className=' cursor-pointer'>
          <RiLinkedinFill className='text-2xl grid place-items-center justify-center bg-gray-200 w-7 h-7 rounded-full' />
        </span>
          </div>
        </div>

        </div>

        <div>
        <img className='mx-auto mt-10 rounded-2xl w-[350px] h-[350px]' src={l6} alt="journey timeline" />

         <div className='flex justify-between items-center gap-4  mb-10 px-10'>
            <div>
        <h1 className='text-3xl font-semibold text-center mt-4'> John Doe</h1>
        <p className='text-center text-sm text-gray-900 mt-2 mb-10'>Chief Executive Officer</p>
        </div>
          <div>
             <span className=' cursor-pointer'>
          <RiLinkedinFill className='text-2xl grid place-items-center justify-center bg-gray-200 w-7 h-7 rounded-full' />
        </span>
          </div>
        </div>

        </div>

        
    </div>

    </div>
    
  )
}
export default MeetLeaders;
