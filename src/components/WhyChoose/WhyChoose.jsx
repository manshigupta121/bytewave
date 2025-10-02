import React from 'react';
import w1 from "../../assets/Whychoose_img/w1.png";
import w2 from "../../assets/Whychoose_img/w2.png";
import w3 from "../../assets/Whychoose_img/w3.png";
import w4 from "../../assets/Whychoose_img/w4.png";
import w5 from "../../assets/Whychoose_img/w5.png";
import w6 from "../../assets/Whychoose_img/w6.png";

// NOTE: The color 'merino-400' is not a default Tailwind color.
// If you are using this specific color, you would need to add it to your 
// tailwind.config.js, or replace it with a standard color like 'gray-400' 
// if you don't need the exact custom shade. For this conversion, 
// the custom class 'border-merino-400' is kept as is.

const WhyChoose = () => {
    return (
        <div className="text-center p-8 w-[80%] mx-auto my-20">
            <h2 className="font-semibold text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
                Our journey Through Time
            </h2>
            <p className='text-gray-500 text-xl mt-5'>Tracing the Path of Our Legacy and Growth</p>

            {/* Feature 1: Simple Integration */}
            <div className="flex flex-wrap items-center mt-20 text-left text-center">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img
                        src="src/assets/Whychoose_img/w1.png"
                        alt="gem"
                        className="inline-block rounded-4xl shadow-lg w-[400px] "
                    />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                    <h3 className='text-lg text-gray-500 mt-8'>02/2016</h3>
                    <h3 className="font-semibold mt-1 text-xl md:mt-0 sm:text-2xl">
                        The Early Days
                    </h3>
                    <p className="sm:text-lg mt-6 text-gray-500">
                        In the early years, we were a small team with a big vision. We started with a handful of passionate individuals determined to make a difference.
                    </p>
                </div>
            </div>

            {/* Feature 2: Easy Collaboration (Image on left on desktop) */}
            <div className="flex flex-wrap items-center mt-20 text-left text-center">
                {/* Note: The order for MD/LG screens is controlled by 'md:order-first' on the text block */}
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img
                        src="src/assets/Whychoose_img/w2.png"
                        alt="project members"
                        className="inline-block rounded-4xl shadow-lg w-[400px] "
                    />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                    <h3 className='text-lg text-gray-500 mt-8'>08/2019</h3>
                    <h3 className="font-semibold mt-1 text-xl md:mt-0 sm:text-2xl">
                        Growth and Expansion
                    </h3>
                    <p className="sm:text-lg mt-6 text-gray-500">
                        We expanded our operations, both in terms of scope and geography, to better serve the evolving needs of our clients.
                    </p>
                </div>
            </div>

            {/* Feature 3: No More Syntax Errors */}
            <div className="flex flex-wrap items-center mt-20 text-left text-center">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img
                        src="src/assets/Whychoose_img/w3.png"
                        alt="editor"
                        className="inline-block rounded-4xl shadow-lg w-[400px] "
                    />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                <h3 className='text-lg text-gray-500 mt-8'>04/2022</h3>
                    <h3 className="font-semibold mt-1 text-xl md:mt-0 sm:text-2xl">
                        Adapting to Change
                    </h3>
                    <p className="sm:text-lg mt-6 text-gray-500">
                       We embraced emerging technologies, implemented sustainable practices, and fostered a culture of innovation that has allowed us to stay ahead cuve.
                    </p>
                </div>
            </div>

            {/* Feature 4: Bulk Editing (Image on left on desktop) */}
            <div className="flex flex-wrap items-center mt-20 text-left text-center">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img
                        src="src/assets/Whychoose_img/w4.png"
                        alt="bulk editing"
                        className="inline-block rounded-4xl shadow-lg  w-[400px]"
                    />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                <h3 className='text-lg text-gray-500 mt-8'>06/2022</h3>
                    <h3 className="font-semibold mt-1 text-xl md:mt-0 sm:text-2xl">
                        Our Team
                    </h3>
                    <p className="sm:text-lg mt-6 text-gray-500">
                        They are the heart of our organization, and their unwavering commitment to excellence has been the driving force behind our growth.
                    </p>
                </div>
            </div>

            {/* Feature 5: No More Syntax Errors */}
            <div className="flex flex-wrap items-center mt-20 text-left text-center">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img
                        src="src/assets/Whychoose_img/w5.png"
                        alt="editor"
                        className="inline-block rounded-4xl shadow-lg w-[400px]"
                    />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                <h3 className='text-lg text-gray-500 mt-8'>12/2022</h3>
                    <h3 className="font-semibold mt-1 text-xl md:mt-0 sm:text-2xl">
                        Client-Centric Approach
                    </h3>
                    <p className="sm:text-lg mt-6 text-gray-500">
                        We have always placed their needs and satisfaction at the center of everything we do. Their trust and loyalty have been instrumental in our journey.
                    </p>
                </div>
            </div>

           {/* Feature 6: Bulk Editing (Image on left on desktop) */}
            <div className="flex flex-wrap items-center mt-20 text-left text-center">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img
                        src="src/assets/Whychoose_img/w6.png"
                        alt="bulk editing"
                        className="inline-block rounded-4xl shadow-lg w-[400px]"
                    />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                <h3 className='text-lg text-gray-500 mt-8'>04/2024</h3>
                    <h3 className="font-semibold mt-1 text-xl md:mt-0 sm:text-2xl">
                        Looking Ahead
                    </h3>
                    <p className="sm:text-lg mt-6 text-gray-500">
                        We remain dedicated to pushing boundaries, delivering unmatched IT Solution, and continuing to be a partner in the success of our clients
                    </p>
                </div>
            </div>

            <div className='mt-20 w-[80%]' >
                <p className='text-2xl font-semibold mt-15 '>Thank you for being a part of our history, and we look forward to a future filled with shared successes and continued excellence.</p>
            </div>

            

        </div>
    );
};

export default WhyChoose;