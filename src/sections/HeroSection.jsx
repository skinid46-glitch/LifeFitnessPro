
import React from 'react';
import Slider from '../components/Slider';

import heroCharacter from '../assets/HeroPageChar.png';

const HeroSection = () => {
    return (
        <section id="home" className="
            relative w-full
            min-h-[100svh]
            bg-[#174dad] bg-cover bg-center bg-no-repeat
            overflow-hidden select-none
            flex flex-col
            justify-between
        ">

            {/* Background Glow Orb */}
            <div className="
                absolute top-[54%] left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[clamp(250px,30vw,420px)]
                aspect-square
                bg-white rounded-full
                blur-[120px] opacity-75
                pointer-events-none z-5 animate-pulse
            " />

            {/* Typography Content */}
            <div className="
                relative w-full
                mt-[clamp(190px,32vh,350px)]
                md:mt-[clamp(240px,35vh,420px)]
                flex flex-col items-center
                px-0 pointer-events-none
                z-20
            ">

                <div className="
                    w-full max-w-[100vw]
                    flex flex-col items-start
                    gap-[clamp(8px,1vw,14px)]
                    pl-[11.4vw]
                ">

                    {/* Subtitle */}
                    <p className="
                        text-white
                        text-[clamp(10px,1.15vw,14px)]
                        font-montserrat font-bold
                        tracking-wide uppercase
                        whitespace-nowrap
                    ">
                        Transform Your Body, Optimize Your
                    </p>

                    {/* Main Heading */}
                    <h1 className="
                        relative z-20
                        text-white
                        text-[clamp(68px,21vw,190px)]
                        md:text-[14vw]
                        font-montserrat font-black
                        tracking-[0.02em] md:tracking-[0.12em]
                        leading-[0.85]
                        text-left uppercase
                        w-fit md:w-full
                        md:-ml-[1vw]
                        whitespace-nowrap
                    ">
                        HEALTH
                    </h1>

                    {/* Description and Button */}
                    <div className="relative z-40">

                        <p className="
                            text-white
                            text-[clamp(9px,1.01vw,14px)]
                            md:text-[1.01vw]
                            font-sans font-medium
                            tracking-wide leading-relaxed
                            w-[min(70vw,360px)]
                            md:w-auto
                            max-w-[100vw]
                            opacity-90 mt-1
                        ">
                            Are hormonal imbalances, gut issues,
                            <br />
                            or weight plateaus killing your gains? If you’re putting in work but seeing
                            <br />
                            zero payoff, our science-backed coaching fixes your foundation so you can finally build the physique you're chasing.
                        </p>

                        <a href="#contact" className="
                            text-black
                            inline-flex items-center justify-center
                            bg-[#E8FE61]
                            font-montserrat font-black
                            rounded-3xl
                            px-[clamp(12px,1.25vw,20px)]
                            py-[clamp(10px,1vw,16px)]
                            text-[clamp(11px,0.9vw,15px)]
                            pointer-events-auto cursor-pointer
                            whitespace-nowrap
                            mt-5
                        ">
                            Contact Us →
                        </a>

                    </div>
                </div>
            </div>

            {/* Character */}
            <div className="
                absolute inset-0
                flex justify-center items-center
                pointer-events-none z-30
                -translate-y-[3vh] md:-translate-y-[2vh]
            ">
                <img
                    src={heroCharacter}
                    alt="Hero Character Graphic"
                    className="
                        w-[clamp(220px,55vw,405px)]
                        sm:w-[clamp(260px,33vw,405px)]
                        md:w-[25vw]
                        max-w-[405px]
                        max-h-[75svh]
                        h-auto
                        object-contain
                        drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                        -translate-y-[3vh] md:translate-y-[4vh]
                    "
                />
            </div>

            {/* Slider */}
            <div className="
                relative w-full
                mt-5
                z-30
            ">
                <Slider />
            </div>

        </section>
    );
};

export default HeroSection;
