import React from 'react';
import logo from "../../assets/LOGO/logo.png";
import hero_img from "../../assets/hero_img.png";


// Assuming you have an image file named 'team-meeting.jpg' or similar in your public/assets folder, 
// or you can use a direct link/import. For this example, I'll use a placeholder URL.
const heroImageUrl = hero_img;
// **NOTE:** You will need to replace this with your actual image import or URL.

const Hero = () => {
return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-violet-100 to-white">
        {/* Header and Subtitle Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl sm:text-6xl font-semibold text-gray-900 mb-4">
                About Us
            </h1>
            <p className="text-xl text-gray-600">
                Discover our story, our mission, and our passion for creativity and innovation.
            </p>
        </div>

        {/* Featured Content / Case Study Card */}
        <div className="max-w-7xl min-h-[450px] mx-auto bg-white rounded-4xl shadow-lg overflow-hidden sm:flex flex-row">
            {/* Text Content Area */}
            <div className="p-6 sm:p-8 sm:pt-15 sm:pl-15 sm:flex-1 ">
                {/* Tag */}
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 rounded-xl mb-4">
                    Revenue Growth
                </span>

                {/* Title */}
                <h2 className="text-2xl sm:text-5xl font-semibold text-gray-900 leading-snug mb-3">
                    Transforming A Small Retailer With E-Commerce Integration
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-base">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
            </div>

            {/* Image Container */}
            <div className="relative">
                {/* Replace 'heroImageUrl' with your actual image import or URL */}
                <img 
                    className="w-[650px] h-[450px] object-cover" 
                    src={heroImageUrl} 
                    alt="Business team discussing ideas at a table" 
                />
                {/* You might want to use the actual image from your file system. 
                        Example: src={require('./path-to-image.jpg')} if using Webpack/CRA,
                        or import the image at the top: import teamImage from './path-to-image.jpg';
                */}
            </div>
        </div>
    </section>
);
};

export default Hero;