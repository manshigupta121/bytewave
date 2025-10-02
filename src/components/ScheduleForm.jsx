import React from 'react';

// Reusable Input Field Component
const FormInput = ({ label, id, type = 'text', placeholder = '', isTextArea = false }) => (
  <div className="mb-4">
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    {isTextArea ? (
      <textarea
        id={id}
        rows="4"
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500 text-sm resize-none"
        placeholder={placeholder || label}
      ></textarea>
    ) : (
      <input
        type={type}
        id={id}
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500 text-sm"
        placeholder={placeholder || label}
      />
    )}
  </div>
);

export const ScheduleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (In a real app, you would send this data to a server)');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name */}
      <FormInput label="Name" id="name" placeholder="Name" />

      {/* Phone */}
      <FormInput label="Phone" id="phone" placeholder="Phone" />

      {/* Company Email */}
      <FormInput label="Company Email" id="email" type="email" placeholder="Company Email" />

      {/* Company/Organization */}
      <FormInput label="Company/Organization" id="organization" placeholder="Company/Organization" />

      {/* How can we help you? (Dropdown - using a select element) */}
      <div className="mb-4">
        <label htmlFor="help-option" className="sr-only">
          How can we help you?
        </label>
        <div className="relative">
          <select
            id="help-option"
            className="appearance-none w-full p-3 border border-gray-300 rounded-md text-sm text-gray-500 bg-white focus:ring-indigo-500 focus:border-indigo-500"
            defaultValue=""
          >
            <option value="" disabled>How can we help you?</option>
            <option value="planning">IT Strategy & Planning</option>
            <option value="support">Managed IT Support</option>
            <option value="security">Cybersecurity Consultation</option>
            <option value="cloud">Cloud Services</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            {/* Simple Down Arrow Icon */}
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>

      {/* Message (Textarea) */}
      <FormInput label="Message" id="message" isTextArea={true} placeholder="Message" />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );
};