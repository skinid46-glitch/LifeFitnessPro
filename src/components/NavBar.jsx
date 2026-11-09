
import React, { useState } from "react";
import { navLinks } from "../data/data";
import { Menu, X, Dumbbell } from "lucide-react";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const closeMenu = () => setMobileOpen(false);

    return (
        <>
            <nav className="
                fixed top-0 left-0 z-40 w-full
                h-[72px] md:h-[80px]
                bg-[#102f68]/90 backdrop-blur-md
                border-b border-white/10
                transition-all duration-300
            ">
                <div className="
                    h-full max-w-7xl mx-auto
                    flex items-center justify-between
                    px-5 md:px-8
                ">

                    {/* CUSTOM GYM LOUNGE DIAMOND LOGO */}
                    <a
                        href="#home"
                        onClick={closeMenu}
                        aria-label="Life Fitness Pro Home"
                        className="flex items-center gap-2.5 shrink-0"
                    >
                        <div className="
                            w-11 h-11 md:w-12 md:h-12
                            flex items-center justify-center
                            rounded-xl bg-lime-300
                            text-[#102f68]
                            shadow-lg shadow-lime-300/20
                        ">
                            <Dumbbell size={27} strokeWidth={2.8} />
                        </div>

                        <div className="flex flex-col leading-none">
                            <span className="
                                text-white font-black
                                text-[17px] sm:text-[19px]
                                tracking-tight
                            ">
                                  Life Fitness 
                            </span>

                            <span className="
                                text-lime-300 font-extrabold
                                text-[10px] sm:text-[11px]
                                tracking-[0.32em]
                                mt-1.5
                            ">
                                Pro
                            </span>
                        </div>
                    </a>

                    {/* DESKTOP NAV LINKS */}
                    <div className="
                        hidden md:flex
                        items-center gap-8 lg:gap-10
                    ">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="
                                    relative text-white
                                    text-sm lg:text-[15px]
                                    font-bold tracking-wide
                                    transition-colors duration-300
                                    hover:text-lime-300
                                    after:absolute after:left-0 after:-bottom-2
                                    after:h-[2px] after:w-0
                                    after:bg-lime-300
                                    after:transition-all after:duration-300
                                    hover:after:w-full
                                "
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* DESKTOP CONTACT BUTTON */}
                    <a
                        href="#contact"
                        className="
                            hidden md:inline-flex
                            items-center justify-center
                            bg-lime-300 hover:bg-lime-200
                            text-black font-extrabold
                            text-sm tracking-wide
                            px-6 py-3 rounded-full
                            transition-all duration-300
                            hover:scale-105
                            shadow-lg shadow-lime-300/10
                        "
                    >
                        Contact Us
                        <span className="ml-2">→</span>
                    </a>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open navigation menu"
                        aria-expanded={mobileOpen}
                        className="
                            md:hidden
                            flex items-center justify-center
                            w-10 h-10 rounded-xl
                            bg-white/10 border border-white/20
                            text-white
                            hover:bg-lime-300 hover:text-black
                            transition-all duration-300
                        "
                    >
                        <Menu size={23} />
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU OVERLAY */}
            <div
                aria-hidden={!mobileOpen}
                className={`
                    fixed inset-0 z-50 md:hidden
                    bg-[#102f68]/[98%] backdrop-blur-xl
                    flex flex-col items-center justify-center
                    transition-all duration-300
                    ${mobileOpen
                        ? "translate-x-0 opacity-100 visible"
                        : "translate-x-full opacity-0 invisible"
                    }
                `}
            >
                {/* CLOSE BUTTON */}
                <button
                    onClick={closeMenu}
                    aria-label="Close navigation menu"
                    className="
                        absolute top-5 right-5
                        w-11 h-11 rounded-xl
                        flex items-center justify-center
                        bg-white/10 border border-white/20
                        text-white
                        hover:bg-lime-300 hover:text-black
                        transition-all duration-300
                    "
                >
                    <X size={25} />
                </button>

                {/* MOBILE LOGO */}
                <div className="flex items-center gap-2.5 mb-12">
                    <div className="
                        w-12 h-12 rounded-xl
                        bg-lime-300 text-[#102f68]
                        flex items-center justify-center
                    ">
                        <Dumbbell size={28} strokeWidth={2.8} />
                    </div>

                    <div className="flex flex-col leading-none">
                        <span className="text-white font-black text-xl">
                            GYM LOUNGE
                        </span>
                        <span className="
                            text-lime-300 font-extrabold
                            text-[11px] tracking-[0.32em] mt-1.5
                        ">
                            DIAMOND
                        </span>
                    </div>
                </div>

                {/* MOBILE LINKS */}
                <div className="
                    flex flex-col items-center
                    gap-8 font-bold
                ">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={closeMenu}
                            className="
                                text-2xl text-white
                                tracking-wide
                                hover:text-lime-300
                                transition-all duration-300
                            "
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* MOBILE CONTACT BUTTON */}
                    <a
                        href="#contact"
                        onClick={closeMenu}
                        className="
                            mt-5 bg-lime-300
                            text-black font-extrabold
                            px-8 py-4 rounded-full
                            hover:bg-lime-200
                            transition-all duration-300
                        "
                    >
                        Contact Us →
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
