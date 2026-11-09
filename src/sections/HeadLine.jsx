
import React from "react";

import teamImage from "../assets/Team.png";

const HeadLine = () => {
    return (
        <section
            id="about"
            className="
                w-full min-h-[100px]
                bg-white text-black
                flex flex-col items-center justify-center
                px-5 sm:px-8 md:px-10
                py-[clamp(60px,8vw,110px)]
                overflow-hidden
                text-center
            "
        >

            {/* Heading */}
            <h1 className="
                font-nudge
                text-[clamp(30px,5vh,58px)]
                md:text-[clamp(38px,5vh,64px)]
                leading-[1.15]
                tracking-[0.1rem]
                text-center
                max-w-[900px]
            ">
                Science-Backed, Results
                <br />
                Driven Coaching
            </h1>

            {/* Description */}
            <p className="
                mt-[clamp(12px,2vh,20px)]
                text-[clamp(12px,1.1vw,16px)]
                font-Work font-medium
                leading-[1.7]
                text-center
                max-w-[650px]
            ">
                Every client receives a personalized approach backed by the latest
                <br className="hidden sm:block" />
                research in functional health, nutrition science, and exercise
                <br className="hidden sm:block" />
                physiology. Your transformation is our mission.
            </p>

            {/* CTA Button */}
            <a
                href="#contact"
                className="
                    py-[clamp(12px,1.1vw,16px)]
                    px-[clamp(20px,2vw,26px)]
                    bg-[#E8FE61]
                    rounded-4xl
                    mt-[clamp(24px,4vh,40px)]
                    font-montserrat font-extrabold
                    text-[clamp(12px,1vw,15px)]
                    tracking-[-0.02rem]
                    hover:scale-105
                    transition duration-200
                    hover:bg-[#efff85]
                    cursor-pointer
                "
            >
                Contact Us ⟶
            </a>

            {/* Team Image */}
            <img
                src={teamImage}
                alt="Our coaching team"
                className="
                    mt-[clamp(24px,4vh,36px)]
                    w-full
                    max-w-[900px]
                    h-auto
                    object-contain
                "
            />

        </section>
    );
};

export default HeadLine;
