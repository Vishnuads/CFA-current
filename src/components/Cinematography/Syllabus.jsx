import React, { useState } from 'react';
import S1 from '@/assets/Direction/s1.webp'
import S2 from '@/assets/Direction/s2.webp'

const Syllabus = () => {

    // const [isOpen, setIsopen] = useState(false);
    const [index, setIdx] = useState(0)

    const toggle = (index) => {
        setIdx((p) => (p === index) ? p : index)
        // setIsopen(true)
    }

    const content = [
        { image: S1, name: "Semester 1", modules: ["Understanding Cinema: What is cinema?", "Developing Story Ideas & Themes", "Grammar of Cinema", "Direction and Production", "Types of Films, Target Audiences, and Story Structures", "Genres, Plots, and Central Themes in Cinema"] },
        { image: S2, name: "Semester 2", modules: ["Web Series Production", "Students will write, direct, and produce a web series.", "AI integration for screenplay", "Editing", "Hands-on Shooting : Each student take roles in production.", "Crafting Beginnings : Hooking the audience from the start", "Creating Endings : Leaving a lasting impact.", "Creating Interval Blocks : Structuring your story with intervals.", "Different Climax Sequences", "Learning Cinematography", "Enhancing visuals with visual effects."] }
    ]

    return (
        <>
            <section>
                <div className="max-w-6xl mx-auto px-5">
                    <div className="text-center">
                        <h1 className='uppercase text-gray text-sm md:text-md font-onest font-bold'>SYLLABUS</h1>
                        <h1 className='font-bebas md:text-4xl sm:text-3xl text-2xl my-1'>Your Journey Into Direction & Screenplay</h1>
                        <p className='font-onest text-sec text-sm sm:text-base'>Build cinematic storytelling skills step-by-step through screenplay writing, scene staging, directing actors, and real production workflows.</p>
                    </div>

                    <div className='my-10'>

                        {/* <div className="overflow-hidden rounded-2xl">

                            {content.map((c, idx) => (
                                <div className={`relative ${isOpen ? 'h-64' : 'h-24'}`} key={idx} onClick={() => toggle(idx)}
                                >
                                    <img src={c.image} alt={c.name} className='object-top absolute inset-0 ' />
                                    <div className="absolute top-7 left-10 text-white ">
                                        <h1 className='font-akira text-2xl md:text-3xl mb-4'>{c.name}</h1>

                                        <div className="flex flex-wrap items-center gap-3">
                                            {c.modules.map((m, idx) => (
                                                <span key={idx} className='border border-white px-3 rounded-sm'>{m}</span>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div> */}
                        <div className="rounded-lg overflow-hidden">
                            {content.map((item, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => toggle(idx)}
                                    className={`relative cursor-pointer transition-all duration-500 ease-out ${index === idx ? 'h-72 sm:h-56 md:h-64 ' : 'h-20 sm:h-24 md:h-24'}  `}
                                >
                                    {/* Background Image */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        loading="lazy"
                                    />

                                    {/* Dark Overlay (improves text readability) */}
                                    <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${index === idx ? 'opacity-40' : 'opacity-20'}`}>
                                    </div>

                                    {/* Content Container */}
                                    <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-start">
                                        {/* Title */}
                                        <h1 className="font-akira text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white mb-3 sm:mb-4 leading-tight shrink-0">
                                            {item.name}
                                        </h1>

                                        {/* Modules (visible when expanded) */}
                                        <div className={`flex-grow overflow-hidden transition-all duration-500 ${index === idx ? 'opacity-100' : 'opacity-0'
                                            }`}>
                                            <div className="flex flex-wrap items-start gap-2 sm:gap-3 mt-2">
                                                {item.modules && item.modules.length > 0 ? (
                                                    item.modules.map((module, modIdx) => (
                                                        <span
                                                            key={modIdx}
                                                            className="border border-white text-white px-2 sm:px-3 py-1 rounded text-[9px] text-wrap sm:text-sm font-onest whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-300"
                                                        >
                                                            {module}
                                                        </span>
                                                    ))
                                                ) : (
                                                    <span className="text-white md:text-sm text-xs font-onest">No modules available</span>
                                                )}
                                            </div>

                                            {/* Optional Description (if available) */}
                                            {item.description && (
                                                <p className="text-white text-xs sm:text-sm mt-4 font-onest leading-relaxed line-clamp-3">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Syllabus
