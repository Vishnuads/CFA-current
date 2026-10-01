import React from 'react';
import { motion } from 'framer-motion';
// import P1 from '@/assets/placement/dn.png';
// import P2 from '@/assets/placement/miw.png';
// import P3 from '@/assets/placement/pb.png';

// const placement = [
//     { com: P2, name: "Jawakar Shakthi", role: "Unreal Engine Environment Artist",              cname: "Magic In White" },
//     { com: P2, name: "Jeeva",           role: "Unreal Engine Animator",                        cname: "Magic In White" },
//     { com: P2, name: "Shwedha",         role: "Unreal Engine Generalist & Motion Graphics Artist", cname: "Magic In White" },
//     { com: P2, name: "Balaji",          role: "Unreal Engine Previz Artist",                   cname: "Magic In White" },
//     { com: P1, name: "Sarumathi",       role: "Unreal Engine TD",                              cname: "DNEG Mumbai"     },
//     { com: P3, name: "Joyal",           role: "On-Set VFX Supervisor",                         cname: "Paul Bros VFX"  },
// ]

// ── Variants ────────────────────────────────────────────────────────────────

const headingContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
}

const headingLine = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
}

const gridContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.3 } }
}

const cardReveal = {
    hidden: { opacity: 0, y: 36, scale: 0.96 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

const glowPulse = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
        opacity: 1, scale: 1,
        transition: { duration: 1.2, ease: 'easeOut', delay: 0.2 }
    }
}

// ── Component ────────────────────────────────────────────────────────────────

const Career = () => {
    return (
        <section>
            <div className='max-w-6xl mx-auto px-5 py-10'>

                {/* Heading */}
                <motion.div
                    className="text-center"
                    variants={headingContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                >
                    <motion.h1
                        className='uppercase text-gray font-onest font-bold text-xs sm:text-sm md:text-base tracking-wider mb-2'
                        variants={headingLine}
                    >
                        CAREERS IN MOTION
                    </motion.h1>
                    <motion.h1
                        className='font-bebas text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-2 sm:my-3'
                        variants={headingLine}
                    >
                        Where Our Students Work
                    </motion.h1>
                    <motion.p
                        className='font-onest text-sec text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-2'
                        variants={headingLine}
                    >
                        From film sets to cutting-edge studios, our students step directly into the industry and contribute to real-world productions.
                    </motion.p>
                </motion.div>

                {/* Cards grid */}
                <div className="relative max-w-5xl mx-auto my-10">

                    {/* Glow blob */}
                    <motion.div
                        className="bg-[#e7e7e7] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-72 sm:h-72 blur-3xl rounded-full -z-10"
                        variants={glowPulse}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    />

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6"
                        variants={gridContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                    >
                        {placement.map((p, idx) => (
                            <motion.div
                                key={idx}
                                className='bg-white/10 card-border font-onest p-4 sm:p-5 text-center space-y-2 rounded-2xl w-full'
                                variants={cardReveal}
                                whileHover={{
                                    y: -6,
                                    scale: 1.02,
                                    transition: { duration: 0.25, ease: 'easeOut' }
                                }}
                            >
                                <img
                                    src={p.com}
                                    alt={p.cname}
                                    className='rounded-md w-auto h-16 sm:h-20 md:h-24 mx-auto object-contain'
                                />
                                <h1 className='font-medium text-sm sm:text-base md:text-lg leading-snug'>
                                    {p.name}
                                </h1>
                                <p className='text-[#919191] text-xs sm:text-sm font-semibold leading-snug'>
                                    {p.role}
                                </p>
                                <p className='text-[#dadada] text-xs sm:text-sm'>
                                    {p.cname}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default Career