import React, { useState } from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoSearch } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import logo from "../../assets/LOGO/logo.png";
// Note: In a real project, you would import icons here, e.g.,
// import { Menu, X } from 'lucide-react'; 

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Solution', href: '/solution' },
  { name: 'Company', href: '/company' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Pages', href: '/pages' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo/Brand Section */}
          <div className="flex-shrink-0">
            <a href="/" className="">
              <img src={logo} alt="" />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:space-x-4 items-center">
            {navLinks.map((link) => (
              // This is JSX, rendering HTML-like elements within JavaScript
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 
                           px-3 py-2 rounded-md text-sm font-medium transition duration-150"
              >
                {link.name}
              </a>
            ))}

            {/* number */}

            <div>
              <a href="tel:+1234567890" className="flex flex-row bg-blue-200 text-blue-800 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 
                           px-3 py-2 rounded-4xl text-sm font-medium transition duration-150">
                            <span className='flex justify-center items-center gap-2'> <span className='bg-amber-50 w-7 h-7 flex justify-center rounded-full pt-1'><FiPhoneCall className='text-xl' /></span>1-333-345-6868</span>
              </a>
            </div>
            
            {/* Desktop CTA Button */}
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center ml-4  px-4 py-3 bg-indigo-600 text-white rounded-sm hover:bg-indigo-700"
            >
               <pre>Contact Us</pre>
            </a>
          </div>

          {/* Mobile Search Button  */}
          <div className="hidden sm:flex sm:pl-0 lg:pl-0">
            <a href="/search" className="relative inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-800 hover:bg-gray-100 ">
              <span className="h-6 w-6 text-2xl"><GoSearch /></span>
            </a>
          </div>

          {/* Mobile Bag Button  */}
          <div className=" flex sm:pl-0">
            <a href="/cart" className="relative inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-800 hover:bg-gray-100 ">
              <span className="h-6 w-6 text-2xl"><HiOutlineShoppingBag /></span>
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md 
                         text-gray-900 hover:text-gray-800 hover:bg-gray-100 
                         focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500
                         dark:hover:bg-gray-700 dark:text-gray-300"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Conditional rendering using the ternary operator, which is JSX */}
              {isOpen ? (
                // Close Icon (X)
                <span className="h-6 w-6 text-xl">✕</span> 
              ) : (
                // Menu Icon (Hamburger)
                <span className="h-6 w-6 text-xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel (conditionally rendered) */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="block text-gray-700 dark:text-gray-200 hover:bg-indigo-50 hover:text-indigo-700 
                           dark:hover:bg-gray-700 dark:hover:text-indigo-400 
                           px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu} // Close menu on click
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/contact" 
              className="mt-2 block w-full text-center px-3 py-2 rounded-md 
                         text-white bg-indigo-600 hover:bg-indigo-700 
                         font-medium transition duration-150"
              onClick={toggleMenu} // Close menu on click
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;