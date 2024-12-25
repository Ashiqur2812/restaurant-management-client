import React from "react";
import about from '../assets/about.png';
import bgPic from '../assets/background.svg';

const About = () => {
    return (
        <>
            <div>
                <img className="ml-[79px] w-full md:w-fit mb-[40rem] md:mb-0  object-cover" src={bgPic} alt="" />
                <div className="flex flex-col md:flex-row md:pt-24 pl-4 md:pl-24 my-10 md:my-20 gap-x-6 md:gap-x-20 items-center justify-center absolute top-[45rem] md:top-[40rem]">
                    <div className="text-center md:text-left">
                        <div className="top">
                            <h1 className="text-2xl md:text-4xl font-semibold">ABOUT US</h1>
                            <p className="text-lg md:text-xl pt-2">The only thing we're serious about is food.</p>
                        </div>
                        <p className="mt-6 md:mt-8 w-full md:w-[40rem] text-base md:text-xl">
                            At Food Kingdom, we believe that every meal tells a story. A story of passion, tradition, and innovation coming together to create a royal dining experience. Whether you’re craving authentic cuisines, contemporary fusion dishes, or delightful desserts, our menu is crafted to satisfy every palate. At Food Kingdom, every dish is prepared with love and served with pride. We’re not just a restaurant; we’re a destination where memories are made, laughter is shared, and flavors are celebrated.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <img className="w-full max-w-[25rem] md:max-w-[35rem]" src={about} alt="about" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
