import React from 'react';
import { ScheduleForm } from './ScheduleForm'; // Assuming you create ScheduleForm below
import { CheckIcon, MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/solid'; // Using Heroicons for the checkmark

const benefits = [
  "Comprehensive assessment of your IT needs",
  "Based on evaluation by the best IT services company",
  "Consultation to discover technology solutions",
  "Needs assessment and rationalizing solutions",
  "Presentation of recommendations",
  "Documentation and ongoing support",
  "Follow up to ensure customer value and satisfaction",
];

const ContactInfo = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-3 text-gray-200">
    <Icon className="h-5 w-5 text-indigo-400 flex-shrink-0" />
    <span className="text-sm font-light">{text}</span>
  </div>
);

const ConsultationSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900/70 to-red-950/70 flex items-center justify-center p-4 sm:p-8">
      {/* Main Container with Gradient Overlay */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row rounded-lg overflow-hidden">
        
        {/* Left Content Area */}
        {/* Note: The background gradient on the left is a bit complex in the image,
             but this darker solid color with a slight overlay approximates the feel. */}
        <div className="bg-transparent p-8 sm:p-12 lg:w-3/5 text-white flex flex-col justify-between">
          <div>
            <span className="uppercase text-xs font-semibold tracking-widest text-white bg-indigo-500 px-3 py-1 rounded-sm mb-6 inline-block">
              Contact Us
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">
              Free Consultation - Discover IT Solutions For Your Business
            </h1>
            <p className="text-gray-300 mb-8 max-w-lg text-sm font-light">
              Unlock the full potential of your business with a free consultation. Our expert team will assess your IT needs, recommend scalable solutions, and offer proactive guidance. Book now to discover how our IT expertise can power your growth and ensure a seamless, secure, and efficient operation.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="ml-3 text-gray-300 text-sm font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="mt-12 space-y-3">
            <ContactInfo icon={MailIcon} text="info@companyemail.com" />
            <ContactInfo icon={PhoneIcon} text="1-833-245-8500" />
            <ContactInfo icon={LocationMarkerIcon} text="123 Main St, Suite 400, Chicago, IL 60601, US" />
            
            {/* Download Link */}
            <a href="#" className="inline-block pt-3 text-indigo-400 hover:text-indigo-300 text-sm font-medium">
              Download Map
            </a>
          </div>
        </div>

        {/* Right Form Area (The gradient in the background of the image is tricky, 
             but we'll keep the form clean and white as it appears) */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 lg:w-2/5">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Schedule A Free Consultation
          </h2>
          <ScheduleForm />
        </div>

      </div>
    </div>
  );
};

export default ConsultationSection;