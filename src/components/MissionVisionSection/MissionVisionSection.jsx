import React from 'react';

const MissionVisionSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
        {/* Our Mission */}
        <div>
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            We go deep to unlock insight and have the courage to act. We bring the
            right people together to challenge established thinking and drive
            transformation. We work with our clients to build the capabilities that
            enable organizations to achieve sustainable advantage.
          </p>
          {/* The image shows a repeated paragraph, so I'm including it.
              In a real scenario, you might want to avoid exact repetition unless intended. */}
          <p className="text-gray-700 leading-relaxed text-lg">
            We go deep to unlock insight and have the courage to act. We bring the
            right people together to challenge established thinking and drive
            transformation. We work with our clients to build the capabilities that
            enable organizations to achieve sustainable advantage.
          </p>
        </div>

        {/* Our Vision */}
        <div>
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            In our vision, innovation is not just a buzzword; it's a way of life. We aim to
            continuously push the boundaries of what’s possible in the digital world.
            Through cutting-edge technologies, creative strategies, and forward-
            thinking solutions, we’ll redefine industry standards and help our clients
            stay ahead of the curve.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            In the digital age, talent and creativity are invaluable assets. We envision
            ByteWare as a hub for nurturing and attracting the brightest minds in the
            industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;