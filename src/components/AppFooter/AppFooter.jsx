import React from 'react';
import { Mail, Send, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'; // Using Lucide for the icons, similar to the image
import logo from "../../assets/LOGO/logo.png";


// Data structure for the main link columns
const footerLinks = [
  {
    title: 'Company',
    links: ['About us', 'Our Team', 'Review', 'Blog', 'Case Studies', 'Contact'],
  },
  {
    title: 'Solutions',
    links: [
      'Managed IT Services',
      'IT Consulting',
      'Cloud Computing',
      'Cybersecurity Solutions',
      'Data Analytics',
      'Software Development',
    ],
  },
];

// Helper component for the social media icons
const SocialIcon = ({ Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="border border-gray-300 rounded-full p-2 text-gray-700 hover:border-blue-500 hover:text-blue-500 transition duration-300"
  >
    <Icon size={18} />
  </a>
);

const AppFooter = () => {
  return (
    <footer className="bg-white text-gray-700 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Logo, Info, Links, and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 border-b border-gray-200 pb-12">
          
          {/* Column 1: Logo and Company Info */}
          <div className="md:col-span-1 lg:col-span-2 space-y-4 pr-0 lg:pr-12">
            <div className="flex items-center space-x-2 text-xl font-bold text-gray-900">
              {/* Placeholder for the Logo/Icon */}
              
              <span>
                <img src={logo} alt="" />
              </span>
            </div>
            
            <p className="text-sm leading-relaxed max-w-xs">
              Welcome to ByteWave! We provide diverse **IT solutions** with a team of experts. From IT management to cloud solutions, we have you covered.
            </p>
            
            <div className="text-sm space-y-1 pt-2">
              <p>Mon-Fri: **9:00 - 19:00**</p>
              <p>Closed on Weekends</p>
            </div>
          </div>
          
          {/* Columns 2 & 3: Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(/\s/g, '-')}`} className="text-sm hover:text-blue-600 transition duration-150">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Column 4: Newsletter */}
          <div className="space-y-4 md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h3>
            
            {/* Newsletter Input */}
            <form className="relative border-b border-gray-400 focus-within:border-blue-600 transition duration-300">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white text-sm py-2 pr-10 focus:outline-none placeholder-gray-500"
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600">
                <Send size={20} />
              </button>
            </form>
            
            {/* Social Icons */}
            <div className="flex space-x-3 pt-4">
              <SocialIcon Icon={Facebook} href="#" />
              <SocialIcon Icon={Twitter} href="#" />
              <SocialIcon Icon={Linkedin} href="#" />
              <SocialIcon Icon={Youtube} href="#" /> 
              <SocialIcon Icon={Instagram} href="#" />
            </div>
          </div>
        </div>
        
        {/* Bottom Section: Copyright and Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm">
          <p className="mb-3 md:mb-0">
            ©2024 ByteWave. All Rights Reserved.
          </p>
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-600">Terms Of Services</a>
            <span className="mx-1">|</span>
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <span className="mx-1">|</span>
            <a href="#" className="hover:text-blue-600">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;