import React from 'react'
import Img1 from '@/assets/Direction/h1.png'
import Img2 from '@/assets/Direction/h2.png'
import Img3 from '@/assets/Direction/h3.png'
import Img4 from '@/assets/Direction/h4.png'

const Highlights = () => {
    const highlights = [
        {
            id: 1,
            image: Img1,
            title: 'Master Cinematic Storytelling',
            description: 'Learn the language of cinema through screenplay structure, visual storytelling, and narrative techniques used in real filmmaking.'
        },
        {
            id: 2,
            image: Img2,
            title: 'Direct Powerful Performances',
            description: 'Understand actor staging, emotional direction, dialogue execution, and scene composition for impactful storytelling.'
        },
        {
            id: 3,
            image: Img3,
            title: 'Create Dynamic Visual Experiences',
            description: 'Explore action filmmaking, music video direction, and cinematic visual design with modern production techniques.'
        },
        {
            id: 4,
            image: Img4,
            title: 'Direct with Modern Filmmaking Tools',
            description: 'Integrate AI workflows and VFX-driven filmmaking techniques into professional cinematic production environments.'
        }
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 ">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20">
                    <h2 className="uppercase text-gray font-onest font-bold text-xs sm:text-sm md:text-base tracking-wider ">
                        COURSE HIGHLIGHTS
                    </h2>
                    <h1 className="font-bebas text-2xl my-3 sm:text-3xl md:text-4xl">
                        What You'll Learn Inside Direction & Screenplay
                    </h1>
                    <p className="font-onest text-sec text-sm sm:text-base  leading-relaxe max-w-3xl mx-auto px-2">
                        Master cinematic storytelling through screenplay writing, visual composition, scene staging, and real filmmaking workflows.
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="relative">

                    {/* Grid Container */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-3 md:gap-4 lg:gap-5 max-w-5xl mx-auto px-5">
                        {highlights.map((item) => (
                            <div
                                key={item.id}
                                className="group relative h-full"
                            >
                                {/* Card Background with Border */}
                                <div className="absolute inset-0 h-24 w-full bg-gray-200 blur-3xl"></div>
                                <div className="relative h-full bg-white rounded-xl overflow-hidde">
                                    {/* Image Container */}
                                    <div className="relative h-32 sm:h-36 md:h-40 flex items-center justify-center">
                                        <div className="relative w-32 md:w-44 h-auto flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 p-2 md:mb-5 mb-0">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-contain drop-shadow-md"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-2 sm:p-3 text-center md:p-5 flex flex-col h-auto">
                                        {/* Title */}
                                        <h3 className="font-onest font-semibold text-gray-900 text-sm sm:text-base md:text-base leading-snug mb-2">
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="font-onest text-[#999999] text-xs sm:text-sm  flex-grow">
                                            {item.description}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Decorative Element */}
                    <div className="md:hidden absolute inset-0 h-96 bg-gradient-to-b from-blue-50 to-purple-50 blur-2xl opacity-20 rounded-full -z-10 -top-20"></div>
                </div>

             
            </div>
        </section>
    )
}

export default Highlights