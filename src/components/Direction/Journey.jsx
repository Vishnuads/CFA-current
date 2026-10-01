import React from 'react'
import Line from '@/assets/Direction/line.svg'
import J1 from '@/assets/Direction/j1.svg'
import J2 from '@/assets/Direction/j2.svg'
import J3 from '@/assets/Direction/j3.svg'

const Journey = () => {

    const data = [
        { name: "Choose Your Creative Path", imgs: J1, desc: "Explore the filmmaking program that matches your passion and career goals, from direction and cinematography to editing and VFX." },
        { name: "Connect With Our Counselors", imgs: J2, desc: "Speak with our academic team to understand the course structure, industry opportunities, and the right learning path for you." },
        { name: "Begin Your Filmmaking Journey", imgs: J3, desc: "Complete your application process and step into hands-on cinematic learning with real industry exposure and practical filmmaking experience." },
    ]

    return (
        <>
            <section>
                <div className=" px-5 min-h-screen py-20">
                    <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20">
                        <h2 className="uppercase text-gray font-onest font-bold text-xs sm:text-sm md:text-base tracking-wider ">
                            HOW TO APPLY
                        </h2>
                        <h1 className="font-bebas text-2xl my-3 sm:text-3xl md:text-4xl">
                            Your Journey Into Cinema Starts Here
                        </h1>
                        <p className="font-onest text-sec text-sm sm:text-base  leading-relaxe max-w-3xl mx-auto px-2">
                            From choosing your creative path to stepping into real filmmaking environments, our admission process is designed to guide aspiring filmmakers smoothly into the world of cinema.
                        </p>
                    </div>

                    <div className="relative hidden md:block">
                        <div className="max-w-7xl mx-auto">
                            <img src={Line} alt="Lines" className='opacity-80' />
                        </div>

                        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 px-5 max-w-6xl mx-auto gap-18">
                            <div className=''>
                                <h1 className='font-bebas text-xl md:text-3xl '>Choose Your Creative Path <span className='text-gray text-[100px] font-onest font-extrabold'> 1</span></h1>
                                <p className='font-onest text-xs md:text-sm text-sec'>Explore the filmmaking program that matches your passion and career goals, from direction and cinematography to editing and VFX.</p>
                                <img src={J1} alt="Flag-icon" className='w-18 h-auto' />
                            </div>
                            <div className='flex items-center justify-center flex-col relative'>
                                <img src={J2} alt="Flag-icon" className='w-18 h-auto' />
                                <span className='text-gray  text-[100px] font-onest font-extrabold'> 2</span>
                                <h1 className='font-bebas text-xl md:text-3xl '>Connect With Our Counselors</h1>
                                <p className='font-onest text-center text-xs md:text-sm text-sec'>Speak with our academic team to understand the course structure, industry opportunities, and the right learning path for you.</p>

                            </div>
                            <div className='text-end relative'>
                                <img src={J3} alt="Flag-icon" className='w-18 h-auto absolute right-25 -top-5' />
                                <span className='text-gray  text-[100px] font-onest font-extrabold'> 3</span>
                                <h1 className='font-bebas text-xl md:text-3xl '>Begin Your Filmmaking Journey</h1>
                                <p className='font-onest text-center text-xs md:text-sm text-sec'>Complete your application process and step into hands-on cinematic learning with real industry exposure and practical filmmaking experience.</p>
                            </div>
                        </div>

                    </div>

                    <div className='md:hidden block'>
                        {data.map((d, idx) => (
                            <div key={idx} className='p-5 relative shadow-lg rounded-lg mb-4'>
                                
                                <img src={d.imgs} alt="Flag-icon" className='w-18 h-auto' />
                                <span className='absolute right-6 -top-5 text-grayy text-[100px] font-onest font-extrabold'> {idx + 1}</span>
                                <h1 className='font-bebas text-xl md:text-3xl mb-3'>{d.name}</h1>
                                <p className='font-onest text-xs md:text-sm text-sec'>{d.desc}</p>
                            </div>
                        ))}
                
                    </div>

                </div>
            </section>

        </>
    )
}

export default Journey
