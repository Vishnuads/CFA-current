import React, { useState } from 'react'
import R0 from '../../assets/network/nfdc.webp'
import R1 from '@/assets/network/nsdc.png'
import R2 from '@/assets/network/skill.png'
import R3 from '@/assets/network/mesc.png'
import K1 from '@/assets/network/canon.png'
import A1 from '@/assets/network/su.png'
import A2 from '@/assets/network/ur.png'

const Network = () => {
    const placement = [R0, R1, R2, R3,  A1, A2];
    
    const recognizedCertified = placement.slice(0, 4);
    const knowledgePartner = placement[3];
    const academicPartners = placement.slice(4, 7);

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-4 sm:mb-8 md:mb-12">
                    <h1 className="uppercase text-gray font-onest font-bold text-xs sm:text-sm md:text-base tracking-wider mb-2">
                        OUR NETWORK
                    </h1>
                    <h2 className="font-bebas text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-2 sm:my-3 leading-tight">
                        Backed by Industry & Institutions
                    </h2>
                    <p className="font-onest text-sec text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto px-2">
                        We collaborate with leading organizations, technology partners, and academic bodies to deliver industry-relevant education.
                    </p>
                </div>

                {/* Cards Container */}
                <div className="relative space-y-4 sm:space-y-4 md:space-y-6">
                    {/* Recognized & Certified Card */}
                    <div className="bg-whit card-borde rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 w-full">
                        <h3 className="font-onest text-gray font-medium text-center text-sm sm:text-base mb-4 sm:mb-6">
                            Recognized & Certified By
                        </h3>
                        <div className="grid grid-cols-4 gap-4 sm:gap-5 md:gap-8 items-center justify-items-center">
                            {recognizedCertified.map((img, idx) => (
                                <div key={idx} className="w-full flex items-center justify-center  hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                                    <img 
                                        src={img} 
                                        alt={`Partner ${idx + 1}`}
                                        className="h-12 sm:h-16 md:h-24 lg:h-32 w-auto object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Knowledge Partner & Academic Partners Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                        {/* Knowledge Partner Card */}
                        <div className="bg-whit card-borde rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 ">
                            <h3 className="font-onest text-gray font-medium text-center text-sm sm:text-base mb-4 sm:mb-6">
                                Knowledge Partner
                            </h3>
                            <div className="flex items-center justify-center hover:scale-105 hover:-translate-y-2 transition-all duration-300 ">
                                <img 
                                    src={K1} 
                                    alt="Knowledge Partner"
                                    className="h-14 sm:h-18 md:h-22 lg:h-28 w-auto object-contain"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Academic & Technology Partners Card */}
                        <div className="bg-whit col-span-2 card-borde rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
                            <h3 className="font-onest text-gray font-medium text-center text-sm sm:text-base mb-4 sm:mb-6">
                                Academic & Technology Partners
                            </h3>
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 items-center justify-items-center">
                                {academicPartners.map((img, idx) => (
                                    <div key={idx} className="w-full flex items-center justify-center hover:scale-105 hover:-translate-y-2 transition-all duration-300
                                    ">
                                        <img 
                                            src={img} 
                                            alt={`Academic Partner ${idx + 1}`}
                                            className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain "
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Decorative Blur Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 lg:w-md h-64 sm:h-80 md:h-96 lg:h-[28rem] bg-[#ece9e9] rounded-full blur-3xl -z-10 opacity-50"></div>
                </div>
            </div>
        </section>
    )
}

export default Network