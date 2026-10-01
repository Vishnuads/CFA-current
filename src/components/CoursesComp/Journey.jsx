import React from 'react'
import Line from '@/assets/Direction/line.svg'

const Journey = ({ course }) => {
    if (!course?.journey?.length) return null;
    const data = course.journey;

    return (
        <>
            <section>
                <div className="px-5 min-h-screen py-20">
                    <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20">
                        <h2 className="uppercase text-gray font-onest font-bold text-xs sm:text-sm md:text-base tracking-wider">
                            HOW TO APPLY
                        </h2>
                        <h1 className="font-bebas text-2xl my-3 sm:text-3xl md:text-4xl">
                            Your Journey Into Cinema Starts Here
                        </h1>
                        <p className="font-onest text-sec text-sm sm:text-base leading-relaxe max-w-3xl mx-auto px-2">
                            Choose your creative path, connect with our academic team, and begin
                            developing the skills, knowledge, and practical experience needed to build
                            your career in the creative and entertainment industry.
                        </p>
                    </div>

                    {/* Desktop view */}
                    <div className="relative hidden md:block">
                        <div className="max-w-7xl mx-auto">
                            <img src={Line} alt="Lines" className="opacity-80" />
                        </div>

                        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 px-5 max-w-6xl mx-auto gap-18">
                            {data.map((d, idx) => {
                                if (idx === 0) {
                                    return (
                                        <div key={idx}>
                                            <h1 className="font-bebas text-xl md:text-3xl">
                                                {d.name}{' '}
                                                <span className="text-gray text-[100px] font-onest font-extrabold">
                                                    {idx + 1}
                                                </span>
                                            </h1>
                                            <p className="font-onest text-xs md:text-sm text-sec">
                                                {d.description}
                                            </p>
                                            <img src={d.image} alt="Flag-icon" className="w-18 h-auto" />
                                        </div>
                                    );
                                }

                                if (idx === 1) {
                                    return (
                                        <div key={idx} className="flex items-center justify-center flex-col relative">
                                            <img src={d.image} alt="Flag-icon" className="w-18 h-auto" />
                                            <span className="text-gray text-[100px] font-onest font-extrabold">
                                                {idx + 1}
                                            </span>
                                            <h1 className="font-bebas text-xl md:text-3xl">{d.name}</h1>
                                            <p className="font-onest text-center text-xs md:text-sm text-sec">
                                                {d.description}
                                            </p>
                                        </div>
                                    );
                                }

                                // idx === 2 (and any further items reuse this layout)
                                return (
                                    <div key={idx} className="text-end relative">
                                        <img
                                            src={d.image}
                                            alt="Flag-icon"
                                            className="w-18 h-auto absolute right-25 -top-5"
                                        />
                                        <span className="text-gray text-[100px] font-onest font-extrabold">
                                            {idx + 1}
                                        </span>
                                        <h1 className="font-bebas text-xl md:text-3xl">{d.name}</h1>
                                        <p className="font-onest text-center text-xs md:text-sm text-sec">
                                            {d.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile view */}
                    <div className="md:hidden block">
                        {data.map((d, idx) => (
                            <div key={idx} className="p-5 relative shadow-lg rounded-lg mb-4">
                                <img src={d.image} alt="Flag-icon" className="w-18 h-auto" />
                                <span className="absolute right-6 -top-5  text-[100px] font-onest font-extrabold">
                                    {idx + 1}
                                </span>
                                <h1 className="font-bebas text-xl md:text-3xl mb-3">{d.name}</h1>
                                <p className="font-onest text-xs md:text-sm text-sec">{d.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Journey