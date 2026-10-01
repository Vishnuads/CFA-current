import React from 'react'
import { motion } from 'framer-motion'
import WhyImg from '@/assets/home/why.webp'
import W1 from '@/assets/home/w1.png'
import W2 from '@/assets/home/w2.png'
import W3 from '@/assets/home/w3.png'
import W4 from '@/assets/home/w4.png'

const data = [
    { src: W1, title: "Industry-Led Mentorship",    desc: "Learn directly from filmmakers actively working in the industry. Gain real insights from professionals with on-set experience." },
    { src: W3, title: "Industry-Ready Curriculum",  desc: "Designed to match current filmmaking tools and workflows. Stay aligned with modern industry standards and practices." },
    { src: W2, title: "Hands-On Training",          desc: "Work with real equipment in real production environments. Learn by doing through practical projects and live setups." },
    { src: W4, title: "Career Exposure",            desc: "Step beyond classrooms into real film environments. Build connections and experience that shape your career." },
]

// ── Variants ────────────────────────────────────────────────────────────────

const headingContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
}

const headingLine = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
}

// Left column items slide in from the left
const leftCard = {
    hidden: { opacity: 0, x: -40 },
    visible: (delay) => ({
        opacity: 1, x: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay }
    })
}

// Right column items slide in from the right
const rightCard = {
    hidden: { opacity: 0, x: 40 },
    visible: (delay) => ({
        opacity: 1, x: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay }
    })
}

// Center image rises up
const centerImage = {
    hidden: { opacity: 0, y: 50, scale: 0.97 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }
    }
}

// Icon pop
const iconPop = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: (delay) => ({
        opacity: 1, scale: 1,
        transition: { duration: 0.4, ease: 'backOut', delay }
    })
}

// ── Component ────────────────────────────────────────────────────────────────

const Why = () => {
    return (
        <>
            <section className='max-w-6xl mx-auto my-20 px-5'>

                {/* Heading */}
                <motion.div
                    className="text-center"
                    variants={headingContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.7 }}
                >
                    <motion.h1 className='uppercase text-gray font-onest font-bold' variants={headingLine}>
                        Why Cinema Factory
                    </motion.h1>
                    <motion.h1 className='font-bebas text-4xl my-1' variants={headingLine}>
                        What Makes Cinema Factory Different
                    </motion.h1>
                    <motion.p className='font-onest text-sec' variants={headingLine}>
                        A learning experience built inside the film industry - Not outside it.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-4 grid-cols-1 gap-5 font-onest mt-10">

                    {/* Left column */}
                    <div className='space-y-12'>
                        {data.slice(0, 2).map((d, idx) => (
                            <motion.div
                                key={idx}
                                className='text-center space-y-1 group'
                                custom={0.3 + idx * 0.15}
                                variants={leftCard}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.4 }}
                            >
                                <motion.img
                                    src={d.src}
                                    alt={d.title}
                                    className='mx-auto h-18 mb-2 w-auto group-hover:scale-110 transition-all duration-300'
                                    custom={0.45 + idx * 0.15}
                                    variants={iconPop}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                />
                                <h1 className='text-[#ffffff] text-sm font-semibold'>{d.title}</h1>
                                <p className='text-sec text-sm'>{d.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Center image */}
                    <motion.div
                        className='col-span-2 relative p-4 group'
                        variants={centerImage}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <img src={WhyImg} alt="Camera" className='z-0 w-[80%] h-auto mx-auto group-hover:-translate-y-5 group-hover:scale-110 transition-all duration-300' />
                        <div className="absolute bottom-0 left-0 w-full md:h-52 h-32 bg-gradient-to-t from-black via-black to-transparent " />
                    </motion.div>

                    {/* Right column */}
                    <div className='space-y-12'>
                        {data.slice(2, 4).map((d, idx) => (
                            <motion.div
                                key={idx}
                                className='text-center space-y-1 group'
                                custom={0.3 + idx * 0.15}
                                variants={rightCard}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.4 }}
                            >
                                <motion.img
                                    src={d.src}
                                    alt={d.title}
                                    className='mx-auto h-18 mb-2 w-auto group-hover:scale-110 transition-all duration-300'
                                    custom={0.45 + idx * 0.15}
                                    variants={iconPop}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                />
                                <h1 className='text-[#ffffff] text-sm font-semibold'>{d.title}</h1>
                                <p className='text-sec text-sm'>{d.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Why