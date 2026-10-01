import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroImg from '@/assets/home/hero1.webp'
import Bg from '@/assets/BG GRID.png'
import Affi from '@/assets/home/aff.png'
import AffiliatedSlider from './Affiliatedslider'

const stats = [
    { h1: '25+', p: 'Industry', p2: ' Mentors' },
    { h1: '100%', p: 'Placement', p2: ' Support' }
]

const courses = [
    "Direction",
    "Cinematography",
    "Editing",
    "Visual Effects",
    "Virtual Production",
    "Acting",
    "DI",
    "Photography"
]

const SLOTS = [
    { offset: -60, opacity: 0.35, scale: 0.15 },
    { offset: -30, opacity: 0.6, scale: 0.20 },
    { offset: 0, opacity: 1, scale: 1 },
    { offset: 30, opacity: 0.6, scale: 0.20 },
    { offset: 60, opacity: 0.35, scale: 0.15 },
]

// ── Motion variants ──
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay }
    })
}

const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay }
    })
}

const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay }
    })
}

const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay }
    })
}

// Letter-by-letter reveal for headline words
const letterContainer = {
    hidden: {},
    visible: (delay = 0) => ({
        transition: { staggerChildren: 0.035, delayChildren: delay }
    })
}
const letter = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
}

function AnimatedWord({ text, className, delay }) {
    return (
        <motion.h1
            className={`${className} inline-flex overflow-hidden`}
            variants={letterContainer}
            custom={delay}
            initial="hidden"
            animate="visible"
        >
            {text.split('').map((ch, i) => (
                <motion.span key={i} variants={letter} className="inline-block">
                    {ch === ' ' ? '\u00A0' : ch}
                </motion.span>
            ))}
        </motion.h1>
    )
}

export default function Hero() {
    const [active, setActive] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            setActive(p => (p + 1) % courses.length)
        }, 1400)
        return () => clearInterval(id)
    }, [])

    const visible = SLOTS.map((s, i) => {
        const idx = (active + i - 2 + courses.length) % courses.length
        return { ...s, text: courses[idx], isActive: i === 2 }
    });

    const handleScroll = () => {
        window.scrollBy({
            top: 600,          // Scrolls down 200 pixels from the current position
            behavior: 'smooth' // Creates a smooth scrolling animation
        });
    };

    return (
        <section className='relative flex min-h-scree max-w-7xl mx-auto flex-col overflow-hidden pt-28 pb-10 md:justify-end md:pb-0'>
            {/* Ambient glow blob — pulsing */}
            <motion.div
                className="pointer-events-none absolute -bottom-20 right-10 md:right-70"
                animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
                <div className="h-64 w-64 rounded-full bg-[#FFAC26] blur-[100px] md:h-100 md:w-100" />
            </motion.div>

            {/* Background */}
            <motion.div
                className='absolute inset-0'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            >
                <img src={Bg} alt="Background" className='h-full w-full object-cover' />
            </motion.div>

            <motion.div
                className="relative z-10 order-2 flex justify-center px-6 md:order-none md:ps-30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.img
                    src={HeroImg}
                    alt="Student"
                    className="h-auto w-[70%] sm:w-[55%] md:w-[45%]"
                    animate={{
                        scale: [1, 1.04, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>

            {/* Left Text Block */}
            <div className="relative z-10 order-1 px-6 md:absolute md:top-30 md:left-20 md:px-0">
                <div className="font-akira">
                    <AnimatedWord text="LEARN" className="text-lg" delay={0.3} /> <br />
                    <AnimatedWord text="CINEMA" className="text-3xl text-gray md:text-4xl" delay={0.42} /> <br />
                    <AnimatedWord text="THAT" className="text-lg" delay={0.58} /> <br />
                    <AnimatedWord text="STANDS OUT" className="text-3xl text-gray md:text-4xl" delay={0.7} />
                </div>

                <motion.p
                    className="font-onest text-sec my-4 text-sm md:text-base"
                    custom={0.95}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                >
                    Train at Cinema Factory Academy, where learning <br className="hidden md:block" />
                    happens inside the film industry — not outside it.
                </motion.p>

                <motion.div
                    className="flex flex-col w-full gap-4 sm:flex-row sm:w-auto sm:items-center"
                    custom={1.1}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.a
                        href='https://api.whatsapp.com/send?phone=919884683888&text=Hi'
                        target='_blank'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.25 }}
                        className="group relative overflow-hidden w-full sm:w-auto rounded-3xl cursor-pointer bg-[#FFAC26]/50 px-6 py-3 text-center text-white shadow-lg"
                    >
                        {/* Shine Effect */}
                        <span className="absolute inset-0 -translate-x-[150%] skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-[250%]" />

                        {/* Button Text */}
                        <span className="relative z-10 font-medium">
                            Get Course Guidance
                        </span>
                    </motion.a>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handleScroll}
                        className="group relative cursor-pointer overflow-hidden w-full sm:w-auto rounded-3xl border-t border-b border-white/20 px-6 py-3 text-grayy transition-all duration-300 hover:border-[#FFAC26] hover:text-[#FFAC26]"
                    >
                        <span className="relative z-10">Explore Courses</span>

                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                    </motion.button>
                </motion.div>
            </div>

            {/* Course ticker — vertical cycle on desktop, marquee on mobile */}
            <motion.div
                className="relative z-10 order-3 mt-8 md:absolute md:top-50 md:right-20 md:mt-0"
                custom={0.6}
                variants={slideRight}
                initial="hidden"
                animate="visible"
            >
                {/* Desktop: vertical cycling stack */}
                <div className="hidden h-24 w-40 md:relative md:flex md:items-center md:justify-end">
                    {visible.map(({ text, offset, opacity, isActive }) => (
                        <span
                            key={text}
                            style={{
                                position: "absolute",
                                right: 0,
                                transform: `translateY(${offset}px)`,
                                opacity,
                                transition: "transform 0.72s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.72s ease, font-size 0.72s ease",
                            }}
                            className={
                                isActive
                                    ? "font-akira text-[20px] text-white whitespace-nowrap"
                                    : "font-onest text-[12px] uppercase font-light text-[#cdcdcd] whitespace-nowrap"
                            }
                        >
                            {text}
                        </span>
                    ))}
                </div>

                {/* Mobile: horizontal marquee */}
                <div className="marquee-mask relative overflow-hidden md:hidden">
                    <div className="marquee-track flex w-max items-center gap-6">
                        {[...courses, ...courses].map((c, i) => (
                            <span
                                key={i}
                                className="font-onest whitespace-nowrap text-xs tracking-wide text-[#cdcdcd] uppercase"
                            >
                                {c}
                                <span className="ml-6 text-[#FFAC26]">•</span>
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Affiliations + Stats — stacked row on mobile, corners on desktop */}
            <div className="relative z-10 order-4 mt-8 flex flex-col items-center gap-6 px-6 md:mt-0 md:block md:px-0">
                {/* <h2 className=" mb-3 text-center font-onest text-xs font-medium tracking-wide text-white/90 sm:text-sm ">
                    Affiliated By
                </h2> */}

                <AffiliatedSlider />

                {/* Stats */}
                <motion.div
                    className="md:absolute md:right-20 md:bottom-0"
                    custom={1.3}
                    variants={slideUp}
                    initial="hidden"
                    animate="visible"
                >
                    <div
                        className="inner-shadow text-grayy flex items-center gap-4 rounded-xl p-3 backdrop-blur-md md:gap-8 md:p-4"
                    >
                        {stats.map((s, idx) => (
                            <motion.div
                                className="rounded-xl bg-black/20 px-3 py-2.5 text-center font-akira uppercase md:px-4 md:py-3"
                                key={idx}
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 1.4 + idx * 0.15,
                                    ease: 'easeOut'
                                }}
                            >
                                <h1 className='text-xl md:text-2xl'>{s.h1}</h1>
                                <p className='text-[10px] md:text-xs'>{s.p}</p>
                                <p className='text-[10px] md:text-xs'>{s.p2}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <style>{`
                .marquee-mask {
                    mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
                    -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
                }
                .marquee-track {
                    animation: marquee-scroll 16s linear infinite;
                }
                @media (prefers-reduced-motion: reduce) {
                    .marquee-track { animation: none; }
                }
                @keyframes marquee-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    )
}