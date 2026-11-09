
import React from "react";

import transformationImage from "../assets/Transformation.png";

const Transformation = () => {
    return (
        <section id="transformations" className="
            w-full min-h-screen bg-[#FFFFFF]
            flex flex-col items-center justify-center
            px-5 sm:px-8 md:px-12
            py-12 sm:py-16 md:py-20
        ">

            <h1 className="
                font-nudge text-black text-center
                text-[clamp(28px,5vw,56px)]
                leading-tight tracking-wider
            ">
                Real Transformations,
            </h1>

            <h1 className="
                font-nudge text-[#174DAD] text-center
                text-[clamp(28px,5vw,56px)]
                leading-tight tracking-wider mt-2
            ">
                Lasting Results
            </h1>

            <div className="
                w-full max-w-[900px]
                min-h-[auto] md:min-h-[650px]
                mt-10 sm:mt-12
                rounded-2xl sm:rounded-3xl
                bg-[#F6F6F6]
                p-3 sm:p-5 overflow-hidden
            ">

                <div className="
                    w-full flex justify-center items-center
                ">
                    <img
                        src={transformationImage}
                        alt="Transformation results"
                        className="
                            w-full h-auto max-h-[650px]
                            object-contain rounded-xl
                        "
                    />
                </div>

                <div className="
                    relative w-[94%] sm:w-[88%] md:w-[85%]
                    min-h-[auto] mx-auto
                    -mt-12 sm:-mt-20 md:-mt-28
                    p-4 sm:p-6 md:p-8
                    rounded-2xl sm:rounded-3xl
                    bg-white shadow-lg
                ">

                    <h1 className="
                        text-[clamp(20px,3vw,36px)]
                        font-nudge text-black leading-tight
                    ">
                        Divya Choubisisa
                    </h1>

                    <p className="
                        mt-3 sm:mt-4
                        text-[clamp(12px,1.3vw,16px)]
                        font-montserrat text-black
                        font-medium tracking-wide leading-relaxed
                    ">
                        "Lost 30 pounds while gaining muscle and energy. The hormone optimization changed everything about how I feel daily."
                    </p>

                </div>
            </div>

            <div className="
                mt-10 sm:mt-12 md:mt-16
                w-full max-w-[1100px]
                min-h-[320px] sm:min-h-[350px] md:min-h-[400px]
                rounded-3xl sm:rounded-[43px]
                bg-[#174DAD]
                flex flex-col justify-center items-center text-center
                px-5 sm:px-10 md:px-16
                py-10 sm:py-12 md:py-16
            ">

                <h1 className="
                    text-white font-nudge
                    text-[clamp(24px,4vw,42px)]
                    tracking-wide leading-tight
                ">
                    Your Transformation Starts Now
                </h1>

                <p className="
                    mt-5 sm:mt-6 text-white
                    text-[clamp(12px,1.3vw,16px)]
                    font-montserrat leading-relaxed
                    max-w-[800px]
                ">
                    Spots for personalized coaching are limited. Don’t wait another day to take control of your
                    <br />
                    Health and Physique. Join Thousands who have achieved lasting change with Life
                    <br />
                    Fitness Pro.
                </p>

                <a href="#contact" className="
                    mt-7 sm:mt-9
                    bg-[#E8FE61] text-black
                    font-montserrat font-extrabold
                    text-[clamp(12px,1.2vw,15px)]
                    px-6 sm:px-8 py-3 sm:py-4
                    rounded-2xl whitespace-nowrap cursor-pointer
                    transition-all duration-200
                    hover:scale-105 hover:bg-[#efff85]
                    active:scale-95
                ">
                    Contact Us →
                </a>

            </div>
        </section>
    );
};

export default Transformation;
