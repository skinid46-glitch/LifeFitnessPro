import React from "react";
import { scoll } from "../data/data";

const Slider = () => {
    return (
        <div className="
            relative w-full overflow-hidden
            bg-[#E4E4E4]
            mt-5
            border-y border-black/10
            py-4 md:py-6
        ">

            {/* Gradient Overlay */}
            <div className="
                absolute inset-0
                bg-gradient-to-r
                from-[#174dad]/10
                via-transparent
                to-[#174dad]/10
                pointer-events-none
                z-10
            " />

            {/* Scrolling Track */}
            <ul className="
                relative flex w-max items-center
                gap-8 sm:gap-12 md:gap-16
                whitespace-nowrap
                animate-infinite-scroll
            ">

                {[...scoll, ...scoll].map((list, index) => (
                    <li
                        key={index}
                        className="
                            flex items-center
                            gap-8 sm:gap-12 md:gap-16
                        "
                    >

                        {/* Slider Text */}
                        <p className="
                            text-[11px] sm:text-sm md:text-lg
                            font-montserrat font-extrabold
                            tracking-[0.12em] md:tracking-[0.18em]
                            uppercase
                            text-[#202020]
                            transition-colors duration-300
                            hover:text-[#174dad]
                        ">
                            {list.text}
                        </p>

                        {/* Barbell Separator */}
                        <img
                            src="/src/assets/Barbell.svg"
                            alt=""
                            aria-hidden="true"
                            className="
                                w-5 h-5
                                md:w-7 md:h-7
                                object-contain
                                opacity-80
                                shrink-0
                            "
                        />

                    </li>
                ))}

            </ul>
        </div>
    );
};

export default Slider;