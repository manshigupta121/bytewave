import React from 'react'
import c1 from "../../assets/Customer_img/c1.png";
import c2 from "../../assets/Customer_img/c2.png";
import c3 from "../../assets/Customer_img/c3.png";
import c4 from "../../assets/Customer_img/c4.png";
import c5 from "../../assets/Customer_img/c5.png";

import { GoPeople } from "react-icons/go";
import { TfiCup } from "react-icons/tfi";
import { TbFocus2 } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";


const Journey = () => {
  return (

    <div className='min-h-screen mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-yellow-50 to-white py-1'>
        <div>
        <h1 className='text-4xl font-semibold text-center mt-20'>Our Journey Through Time</h1>
        <p className='text-center text-sm text-gray-900 mt-4 mb-10'>Discover exceptional experiences through testimonials from our satisfied customers.</p>
        </div>

        <div className='flex flex-col md:flex-row justify-center text-left gap-10 mb-20'>
            <div className='flex flex-col text-left md:w-1/6 px-4 bg-white py-6 rounded-2xl shadow-lg'>
                <div className=' text-blue-600 text-left justify-center mb-2'><GoPeople className="w-10 h-10" /></div>
                <div className='text-left'>
                    <h3 className='text-lg font-semibold'>Customer Centricity</h3>
                    <p className='text-gray-500'>Our clients are our priority. We listen to their needs, understand their challenges, and work tirelessly to deliver IT solutions that meet and exceed their expectations. Their success is our success.</p>
                </div>
            </div>

             <div className='flex flex-col text-left md:w-1/6 px-4 bg-white py-6 rounded-2xl shadow-lg'>
                <div className=' text-blue-600 text-left justify-center mb-2'><TfiCup className="w-10 h-10" /></div>
                <div className='text-left'>
                    <h3 className='text-lg font-semibold'>Customer Centricity</h3>
                    <p className='text-gray-500'>Our clients are our priority. We listen to their needs, understand their challenges, and work tirelessly to deliver IT solutions that meet and exceed their expectations. Their success is our success.</p>
                </div>
            </div>

             <div className='flex flex-col text-left md:w-1/6 px-4 bg-white py-6 rounded-2xl shadow-lg'>
                <div className=' text-blue-600 text-left justify-center mb-2'><TbFocus2 className="w-10 h-10" /></div>
                <div className='text-left'>
                    <h3 className='text-lg font-semibold'>Customer Centricity</h3>
                    <p className='text-gray-500'>Our clients are our priority. We listen to their needs, understand their challenges, and work tirelessly to deliver IT solutions that meet and exceed their expectations. Their success is our success.</p>
                </div>
            </div>

             <div className='flex flex-col text-left md:w-1/6 px-4 bg-white py-6 rounded-2xl shadow-lg'>
                <div className=' text-blue-600 text-left justify-center mb-2'><IoShieldCheckmarkOutline className="w-10 h-10" /></div>
                <div className='text-left'>
                    <h3 className='text-lg font-semibold'>Customer Centricity</h3>
                    <p className='text-gray-500'>Our clients are our priority. We listen to their needs, understand their challenges, and work tirelessly to deliver IT solutions that meet and exceed their expectations. Their success is our success.</p>
                </div>
            </div>

        </div>

        <div className=' mx-auto flex flex-row flex-wrap justify-center gap-10'>
            <div>
                <h1 className='text-3xl font-semibold text-center mt-10'> Outstanding Customer <br />Service Recognition
</h1>
            </div>

            <div className='mb-20 flex flex-row justify-center gap-10'>
                <img className='mx-auto mt-10' src={c1} alt="journey timeline" />
                <img className='mx-auto mt-10' src={c2} alt="" />
                <img className='mx-auto mt-10' src={c3} alt="" />
                <img className='mx-auto mt-10' src={c4} alt="" />
                <img className='mx-auto mt-10' src={c5} alt="" />
            </div>


        </div>

    </div>
    
  )
}

export default Journey