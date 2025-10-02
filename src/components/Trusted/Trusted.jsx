import React from 'react';
import l1 from "../../assets/All_logos/l1.png";
import l2 from "../../assets/All_logos/l2.png";
import l3 from "../../assets/All_logos/l3.png";
import l4 from "../../assets/All_logos/l4.png";
import l5 from "../../assets/All_logos/l5.png"; 

// --- START: CUSTOMIZE YOUR LOGOS HERE ---
// 1. You have successfully defined your logos using local image paths.
//    Note: Local paths like 'src/assets/...' will only work if your project
//    is configured to handle module imports for images. For broader compatibility,
//    ensure these paths are correct or use public URLs.
const SPECIALISTS = [
  { logo: <img src="src/assets/All_logos/l2.png" alt="Specialist Logo 2" className="w-full h-full object-contain" /> },
  { logo: <img src="src/assets/All_logos/l3.png" alt="Specialist Logo 3" className="w-full h-full object-contain" /> },
  { logo: <img src="src/assets/All_logos/l4.png" alt="Specialist Logo 4" className="w-full h-full object-contain" /> },
  { logo: <img src="src/assets/All_logos/l5.png" alt="Specialist Logo 5" className="w-full h-full object-contain" /> }
];
// --- END: CUSTOMIZE YOUR LOGOS HERE ---

// Duplicate the list to ensure a seamless, continuous scroll effect
// Note: Since you have 4 logos, the animation steps should ideally be steps(4) 
// for a jump per logo, but steps(5) will still work for 5 total jumps 
// across the duplicated content. I've left it at steps(5) to match your request.
const MARQUEE_ITEMS = [...SPECIALISTS, ...SPECIALISTS, ...SPECIALISTS];

// Define the custom CSS for the continuous scrolling animation
const marqueeStyles = `
  /* Define the custom keyframes for horizontal scrolling */
  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      /* Scroll by the width of one full set of the original logos (33.3333% of the 300% width container) */
      transform: translateX(-33.3333%);
    }
  }

  /*
    Apply the animation using the steps() timing function for the desired "jerky" effect.
    - 15s duration
    - steps(5) makes it jump 5 times over 15s
    - infinite to loop forever
  */
  .animate-stepped-marquee {
    animation: scroll-left 15s steps(5) infinite; 
  }
`;

const MarqueeItem = ({ specialist }) => (
  // Updated Item structure for a clean logo-only display
  // Using flex-col and justify-center to center the image nicely.
  <div className="flex flex-col items-center justify-center bg-transparent p-4 sm:p-6 min-w-[150px] sm:min-w-[200px] h-28 transition duration-300 hover:shadow-lg">

    {/* Renders the image JSX provided in the SPECIALISTS array */}
    <div className="w-full h-10 flex items-center justify-center">
        {specialist.logo}
    </div>
    
  </div>
);

export default function Trusted() {
  return (
    // Main container for the white theme
    <div className="min-h-[500] bg-gray-50 flex items-center justify-center p-4 sm:p-10 font-inter">
      {/* Inject custom CSS for the stepped marquee effect */}
      <style dangerouslySetInnerHTML={{ __html: marqueeStyles }} />

      <div className="w-full max-w-7xl">
        {/* Header Section */}
        <header className="text-center mb-8">
          {/* Main title remains gradient for emphasis */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Trusted by specialists all around the world
          </h2>
          
        </header>

        {/* Marquee/Logo Section */}
        <div className="relative overflow-hidden py-5">
          {/* Fading overlay on the sides changed to match light background */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Wrapper */}
          <div className="flex animate-stepped-marquee w-[300%]">
            {MARQUEE_ITEMS.map((specialist, index) => (
              <div key={index} className="flex-shrink-0 mx-4">
                <MarqueeItem specialist={specialist} />
              </div>
            ))}
          </div>
        </div>
        
        
        
      </div>
    </div>
  );
}
