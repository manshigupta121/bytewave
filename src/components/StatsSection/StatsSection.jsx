import React from 'react';

// Define the data for your statistics
const statistics = [
  {
    value: '20',
    label: 'Years experiences',
  },
  {
    value: '1.8K',
    label: 'Happy customers',
  },
  {
    value: '460',
    label: 'Project completed',
  },
  {
    value: '15',
    label: 'Awards achievement',
  },
];

// Reusable Stat Item Component
const StatItem = ({ value, label, isFirst = false }) => (
  <div className="flex items-center space-x-4">
    {/* The thin blue vertical line */}
    {!isFirst && <div className="h-25 w-0.5 bg-blue-600"></div>}
    
    <div className="text-left">
      <p className="text-6xl font-semibold text-gray-900 leading-tight">{value}</p>
      <p className="text-gray-600 text-lg mt-1">{label}</p>
    </div>
  </div>
);

const StatsSection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-15xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 lg:space-x-12 xl:space-x-50 space-y-8 md:space-y-0">
          {statistics.map((stat, index) => (
            <StatItem 
              key={stat.label} 
              value={stat.value} 
              label={stat.label} 
              isFirst={index === 0} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;