import React from "react";

const Services = () => {
    const services = [
        {
            title: "Aerobics",
            description:
                "Enjoy energetic group workouts that improve cardiovascular fitness, stamina, coordination, and overall health."
        },
        {
            title: "CrossFit",
            description:
                "Build strength, endurance, and functional fitness through challenging workouts combining different training techniques."
        },
        {
            title: "Zumba",
            description:
                "Burn calories while having fun with energetic dance-inspired workouts set to upbeat music."
        },
        {
            title: "Dance Fitness Classes",
            description:
                "Stay active and improve your fitness through enjoyable dance routines designed to get your body moving."
        },
        {
            title: "Personal Training",
            description:
                "Get one-on-one guidance and personalized workouts designed around your fitness goals and individual needs."
        },
        {
            title: "Yoga Classes",
            description:
                "Improve flexibility, balance, strength, and mental relaxation through guided yoga sessions."
        },
        {
            title: "Weight Training",
            description:
                "Build muscle, increase strength, and improve your overall physique with structured resistance training."
        }
    ];

    return (
        <section id="services" className="
            w-full
            bg-[#EFF5FF]
            min-h-[40svh]
            px-5 sm:px-8 md:px-16 lg:px-20 xl:px-28
            py-12 sm:py-14 md:py-20
            flex flex-col items-center justify-center
            gap-5 sm:gap-6 md:gap-7
        ">

            {/* Heading */}
            <h1 className="
                text-black
                font-nudge font-bold
                tracking-wider
                text-[clamp(28px,4vw,50px)]
                leading-[1.15]
            ">
                Our Fitness Services
            </h1>

            {/* Description */}
            <p className="
                text-black
                font-Work font-medium
                text-[clamp(14px,1.3vw,18px)]
                leading-[1.7]
                tracking-normal
                max-w-[680px]
            ">
                Explore a variety of fitness programs designed to help you
                build strength, improve endurance, stay active, and achieve
                your fitness goals.
            </p>

            {/* Accordion Services */}
            <div className="
                w-full
                max-w-[1100px]
                flex flex-col
                gap-3 sm:gap-4
                mt-2
            ">
                {services.map((service, index) => (
                    <div
                        key={index}
                        tabIndex={0}
                        className="
                            collapse collapse-arrow
                            bg-white
                            text-black
                            border border-black/5
                            rounded-xl
                            shadow-sm
                            focus:bg-[#174DAD]
                            focus:text-white
                            transition-colors duration-300
                        "
                    >
                        <div className="
                            collapse-title
                            font-nudge
                            tracking-wider
                            text-[clamp(14px,1.4vw,18px)]
                            min-h-[64px]
                            flex items-center
                            pr-12
                        ">
                            {service.title}
                        </div>

                        <div className="
                            collapse-content
                            font-Work font-medium
                            text-[clamp(12px,1.1vw,15px)]
                            leading-[1.7]
                        ">
                            {service.description}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Services;