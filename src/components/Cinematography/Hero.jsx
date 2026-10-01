import React, { useEffect, useState } from 'react'
import Img from '@/assets/Direction/hero_bg.jpg'
import { DownloadIcon } from 'lucide-react'

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    // Trigger animations on mount
    useEffect(() => {
        // Small delay to ensure smooth animation trigger
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <style>
                {`
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeInScale {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes zoomIn {
                    from {
                        opacity: 0;
                        transform: scale(1.05);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .hero-title {
                    animation: ${isVisible ? 'fadeInDown 0.8s ease-out 0.2s forwards' : 'none'};
                    opacity: 0;
                }

                .hero-subtitle {
                    animation: ${isVisible ? 'fadeInUp 0.8s ease-out 0.4s forwards' : 'none'};
                    opacity: 0;
                }

                .hero-buttons {
                    animation: ${isVisible ? 'fadeInScale 0.8s ease-out 0.6s forwards' : 'none'};
                    opacity: 0;
                }

                .hero-image {
                    animation: ${isVisible ? 'zoomIn 1.2s ease-out 0s forwards' : 'none'};
                    opacity: 0;
                }

                .button-hover {
                    transition: all 0.3s ease;
                }

                .button-hover:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
                }

                @media (max-width: 640px) {
                    .hero-title {
                        animation: ${isVisible ? 'fadeInDown 0.6s ease-out 0.15s forwards' : 'none'};
                    }
                    .hero-subtitle {
                        animation: ${isVisible ? 'fadeInUp 0.6s ease-out 0.3s forwards' : 'none'};
                    }
                    .hero-buttons {
                        animation: ${isVisible ? 'fadeInScale 0.6s ease-out 0.45s forwards' : 'none'};
                    }
                }
            `}
            </style>

            <section className='w-full'>
                <div className="relative w-full h-screen min-h-screen flex items-center justify-center overflow-hidden bg-black">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 overflow-hidden">
                        <img
                            src={Img}
                            alt='Hero-section'
                            className='hero-image w-full h-full object-cover'
                        />
                        {/* Dark Overlay for text readability */}
                        {/* <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div> */}
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
                        {/* Main Title */}
                        <h1 className=' hero-title font-akira text-xl sm:text-4xl md:text-5xl lg:text-7xl text-white mb-4 sm:mb-6 md:mb-8 leading-tight uppercase tracking-wider'>
                            Cinematography
                        </h1>

                        {/* Subtitle/Description */}
                        <p className=' hero-subtitle font-onest text-xs sm:text-sm md:text-base lg:text-lg text-gray-100 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-2xl font-light '>
                            Learn visual storytelling, screenplay structure, scene design, and filmmaking techniques from industry professionals working in real cinema.
                        </p>

                        {/* CTA Buttons */}
                        <div className=" hero-buttons flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 w-full sm:w-auto ">
                            {/* Primary Button - Explore Curriculum */}
                            <button className=' button-hover w-full sm:w-auto border border-white/80 hover:border-white text-white  px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5
                                backdrop-blur-md bg-white/5 hover:bg-white/10 rounded-full font-onest text-xs sm:text-sm md:text-base font-medium transition-all duration-300 hover:shadow-lg whitespace-nowrap
                            '>
                                Explore Curriculum
                            </button>

                            {/* Secondary Button - Download Brochure */}
                            <button className=' button-hover w-full sm:w-auto flex items-center justify-center
                                gap-2 border border-white text-black px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5
                                bg-white hover:bg-gray-100  rounded-full font-onest text-xs sm:text-sm md:text-base  font-medium  transition-all duration-300 hover:shadow-xl
                            '>
                                <span>Download Brochure</span>
                                <DownloadIcon size={16} className='shrink-0' />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero