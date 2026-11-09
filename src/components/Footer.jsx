import { Mail, Phone, Dumbbell, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <section id="contact">
            <footer className="w-full bg-gradient-to-br from-[#102f68] via-blue-800 to-blue-900 text-white">

                <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">

                        {/* LOGO - SAME AS NAVBAR */}
                        <div className="md:col-span-3 flex justify-center md:justify-start">
                            <a href="#home" className="flex items-center gap-2.5 shrink-0">

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
                        </div>

                        {/* DESCRIPTION */}
                        <div className="md:col-span-5 text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                                Fitness Starts <span className="text-lime-300">Here.</span>
                            </h2>

                            <p className="text-blue-100 text-sm md:text-base leading-relaxed max-w-xl">
                                Build strength, improve your fitness, and push
                                beyond your limits with Life Fitness Pro.
                                Your fitness journey starts with us.
                            </p>
                        </div>

                        {/* CONTACT */}
                        <div className="md:col-span-4">
                            <div className="bg-white text-gray-800 rounded-2xl p-6 md:p-7 shadow-lg">

                                <h3 className="text-3xl font-extrabold mb-6">
                                    Contact Us
                                </h3>

                                {/* EMAIL */}
                                <a
                                    href="mailto:lifefitnesspro@gmail.com"
                                    className="
                                        flex items-center gap-3
                                        bg-lime-300 hover:bg-lime-200
                                        transition-colors rounded-xl
                                        px-4 py-4 mb-3
                                        font-bold text-sm break-all
                                    "
                                >
                                    <Mail size={20} className="shrink-0" />
                                    lifefitnesspro@gmail.com
                                </a>

                                {/* PHONE */}
                                <a
                                    href="tel:+917573014375"
                                    className="
                                        flex items-center gap-3
                                        bg-lime-300 hover:bg-lime-200
                                        transition-colors rounded-xl
                                        px-4 py-4 mb-3 font-bold
                                    "
                                >
                                    <Phone size={20} className="shrink-0" />
                                    (+91) 091570 98443
                                </a>

                                {/* INSTAGRAM */}
                                <a
                                    href="https://www.instagram.com/lifefitnessproofficial/?hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        flex items-center gap-3
                                        bg-lime-300 hover:bg-lime-200
                                        transition-colors rounded-xl
                                        px-4 py-4 mb-3 font-bold
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="shrink-0"
                                    >
                                        <rect x="2" y="2" width="20" height="20" rx="5" />
                                        <circle cx="12" cy="12" r="4" />
                                        <circle cx="18" cy="6" r="1" fill="currentColor" />
                                    </svg>

                                    Follow us on Instagram
                                </a>

                                {/* ADDRESS */}
                                <div className="
                                    flex items-start gap-3
                                    bg-gray-100
                                    rounded-xl
                                    px-4 py-4
                                    text-sm font-medium leading-relaxed
                                ">
                                    <MapPin size={21} className="shrink-0 mt-0.5 text-[#174DAD]" />

                                    <span>
                                        5th Floor, Life Fitness Pro,
                                        Sidhivinayak Business Hub,
                                        Circle, Nr. Ghevar Complex,
                                        Arihant Nagar, Shahibag,
                                        Ahmedabad, Gujarat 380016
                                    </span>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* BOTTOM BAR */}
                    <div className="border-t border-blue-900/50 mt-10 pt-6">
                        <p className="text-blue-200 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Life Fitness Pro.
                            All rights reserved.
                        </p>
                    </div>

                </div>
            </footer>
        </section>
    );
}