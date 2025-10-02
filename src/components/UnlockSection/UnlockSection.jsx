import React, { useState } from 'react';

// 1. IMPORT YOUR ASSETS
// Assuming your thumbnail is in a file structure accessible by this path
import videoThumbnail from "../../assets/unlockV/Vthumb.png";

const UnlockSection = () => {
  // 2. DEFINE VIDEO URL
  // Replace this with your actual embed URL (e.g., a YouTube embed URL)
  const VIDEO_EMBED_URL = 'https://youtu.be/RaQKTgGyyyo'; 

  // State to toggle between showing the thumbnail/button and the video
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: History and Video */}
        <div className="flex flex-col space-y-8">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            100 Years Of History Serving The Poconos Region
          </h2>

          {/* Video Player/Thumbnail Container */}
          <div className="relative w-full rounded-xl overflow-hidden shadow-lg" style={{ paddingTop: '56.25%' }}>
            {/* Conditional Rendering: Show Video or Thumbnail */}
            {isPlaying ? (
              // 3. VIDEO EMBED (IFRAME)
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={VIDEO_EMBED_URL}
                title="Embedded video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              // 4. THUMBNAIL AND PLAY BUTTON
              <div className="absolute top-0 left-0 w-full h-full cursor-pointer group" onClick={() => setIsPlaying(true)}>
                <img 
                  src="{videoThumbnail}" 
                  alt="Man smiling and talking on the phone" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <button 
                    aria-label="Play video"
                    className="bg-white bg-opacity-70 text-gray-900 p-4 rounded-full transition-all duration-300 group-hover:bg-opacity-90 group-hover:scale-110"
                    // The onClick handler is on the parent div
                  >
                    {/* SVG Play Icon */}
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                
                {/* Video Caption/Credit */}
                <div className="absolute bottom-0 left-0 p-4 text-white text-sm bg-black bg-opacity-40 w-full">
                  Tony Nguyen, CEO, Bytewave
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Financial Potential Call to Action (Unchanged) */}
        <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg">
          <h3 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Unlock Your Financial Potential Today!
          </h3>

          <ul className="space-y-4 mb-8">
            {/* List items... */}
            <li className="flex items-start text-gray-700">
              <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Supported By Experienced Financial Experts.</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Optimizing Investment Portfolios And Assets.</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Building Stable Financial Plans For The Future.</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Ensuring Financial Security Through Suitable Insurance.</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Optimizing Investment Portfolios And Assets.</span>
            </li>
          </ul>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out">
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default UnlockSection;