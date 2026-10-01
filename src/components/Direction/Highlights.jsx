import React from 'react'
import { motion } from 'framer-motion'
import Img1 from '@/assets/Direction/h1.png'
import Img2 from '@/assets/Direction/h2.png'
import Img3 from '@/assets/Direction/h3.png'
import Img4 from '@/assets/Direction/h4.png'

const ACCENT = '#ffac26'

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut', delay },
    }),
}

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
        <section className="relative bg-[#050505] text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
            {/* ambient glow */}
            <div
                className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-3xl opacity-10"
                style={{ backgroundColor: ACCENT }}
            />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20"
                >
                    <motion.h2
                        variants={fadeUp}
                        custom={0}
                        className="uppercase font-onest font-bold text-xs sm:text-sm md:text-base tracking-[0.2em]"
                        style={{ color: ACCENT }}
                    >
                        Course Highlights
                    </motion.h2>
                    <motion.h1
                        variants={fadeUp}
                        custom={0.1}
                        className="font-bebas text-2xl my-3 sm:text-3xl md:text-4xl tracking-wide"
                    >
                        What You'll Learn Inside Direction & Screenplay
                    </motion.h1>
                    <motion.p
                        variants={fadeUp}
                        custom={0.2}
                        className="font-onest text-[#8b8b8b] text-sm sm:text-base leading-relaxed max-w-3xl mx-auto px-2"
                    >
                        Master cinematic storytelling through screenplay writing, visual composition, scene staging, and real filmmaking workflows.
                    </motion.p>
                </motion.div>

                {/* Highlights Grid */}
                <div className="relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-5 max-w-5xl mx-auto px-0 sm:px-5">
                        {highlights.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.1 }}
                                whileHover={{ y: -6 }}
                                className="group relative h-full"
                            >
                                {/* accent glow behind card on hover */}
                                <div
                                    className="absolute inset-0 h-24 w-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"
                                    style={{ backgroundColor: ACCENT }}
                                />

                                <div className="relative h-full bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden transition-colors duration-300 group-hover:border-[#ffac26]/40">
                                    {/* Image Container */}
                                    <div className="relative h-32 sm:h-36 md:h-40 flex items-center justify-center">
                                        <div className="relative overflow-hidden w-32 md:w-44 h-auto flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 p-2 md:mb-5 mb-0">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-contain drop-shadow-md"
                                                loading="lazy"
                                            />
                                            {/* shine sweep */}
                                            {/* <span className="absolute inset-0  -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-700" /> */}
                                        </div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-3 sm:p-3 text-center md:p-5 flex flex-col h-auto">
                                        <h3 className="font-onest font-semibold text-white text-sm sm:text-base md:text-base leading-snug mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="font-onest text-[#8b8b8b] text-xs sm:text-sm flex-grow">
                                            {item.description}
                                        </p>

                                        {/* accent underline that grows on hover */}
                                        <span
                                            className="block w-8 h-0.5 mt-3 mx-auto rounded-full transition-all duration-300 group-hover:w-14"
                                            style={{ backgroundColor: ACCENT }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights