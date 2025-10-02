import React, { useState } from 'react';

// --- Testimonial Data ---
// In a real app, this might come from an API or a separate data file.
const testimonialsData = [
  {
    id: 1,
    rating: 5,
    quote: "Nathan is our data guru. His analytical mindset and ability to extract valuable insights from friendly data.",
    author: "Malika Kenny",
    title: "UI Dev TechOne",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg" // Placeholder image
  },
  {
    id: 2,
    rating: 5,
    quote: "Their team's expertise and commitment to excellence are unmatched. They delivered our project ahead.",
    author: "Malika Kenny",
    title: "UI Dev TechOne",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg" // Placeholder image
  },
  {
    id: 3,
    rating: 5,
    quote: "From the initial consultation to the final delivery, they demonstrated an impressive attention to detail. Highly recommend!",
    author: "Malika Kenny",
    title: "UI Dev TechOne",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg" // Placeholder image
  },
  {
    id: 4,
    rating: 5,
    quote: "The support goes above and beyond. They excel at simplifying complex concepts and delivering clear solutions.",
    author: "John Doe",
    title: "Project Lead",
    avatar: "https://randomuser.me/api/portraits/men/70.jpg" // Placeholder image
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const displayTestimonials = () => {
    // This logic ensures we display 3 testimonials at a time, looping if necessary.
    // For a true carousel, you'd handle animations and dynamic sizing.
    const start = activeIndex;
    const end = start + 3;
    let sliced = testimonialsData.slice(start, end);

    // If there aren't enough testimonials to fill 3 slots,
    // take from the beginning of the array to loop.
    if (sliced.length < 3) {
      sliced = [...sliced, ...testimonialsData.slice(0, 3 - sliced.length)];
    }
    return sliced;
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-100/50 to-yellow-100/20">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
          Testimonials
        </h2>
        <p className="text-lg text-gray-600">
          Discover exceptional experiences through testimonials from our satisfied customers.
        </p>
      </div>

      {/* Testimonials Carousel Container */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          // In a real carousel, you'd apply transform: translateX here based on activeIndex
          // For this example, we're just rendering the "active" slice.
          // transform: `translateX(-${activeIndex * (100 / displayTestimonials().length)}%)` // Example for smooth slide
        >
          {displayTestimonials().map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4"
              // For actual sliding, you'd adjust widths and transforms
            >
              <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col justify-between">
                <div>
                     <img 
                      className="w-12 h-12 rounded-full mr-4 object-cover" 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                    />

                </div>
                
                <div>
                  {/* Star Rating */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.927 8.73c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                {/* Author Info and Quote Icon */}
                <div className="flex items-end justify-between">
                  <div className="flex items-center">
                   
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                  {/* Quote Icon */}
                  <div className="text-blue-500 text-5xl font-extrabold opacity-20 transform -rotate-12 select-none">
                    &rdquo;
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-12 space-x-3">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === activeIndex ? 'bg-gray-900' : 'bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Go to testimonial slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;