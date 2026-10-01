// import React, { useState } from 'react'
// import { motion } from 'framer-motion'
// import Direction from '@/assets/home/dir.png';
// import Cinematography from '@/assets/home/cin.png';
// import VP from '@/assets/home/vp.png';
// import VFX from '@/assets/home/vfx.png';
// import Acting from '@/assets/home/act.png';
// import Editing from '@/assets/home/edi.png';
// import DI from '@/assets/home/di.png';
// import Photography from '@/assets/home/pho.png';
// import CourseItems from './CourseItems';
// import { Link } from 'react-router-dom';
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
// } from "@/components/ui/carousel"

// // ── Variants ────────────────────────────────────────────────────────────────

// const headingContainer = {
//     hidden: {},
//     visible: {
//         transition: { staggerChildren: 0.12, delayChildren: 0.1 }
//     }
// }

// const headingLine = {
//     hidden: { opacity: 0, y: 28 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
//     }
// }

// const desktopGrid = {
//     hidden: {},
//     visible: {
//         transition: { staggerChildren: 0.08, delayChildren: 0.35 }
//     }
// }

// const courseItemReveal = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }
//     }
// }

// const mobileCard = {
//     hidden: { opacity: 0, scale: 0.94 },
//     visible: (delay) => ({
//         opacity: 1,
//         scale: 1,
//         transition: { duration: 0.5, ease: 'easeOut', delay }
//     })
// }

// // ── Component ────────────────────────────────────────────────────────────────

// const Courses = () => {
//     const [openIndex, setOpenIndex] = useState(0)

//     const handleHover = (index) => {
//         setOpenIndex((p) => (p === index ? null : index))
//     }

//     const courseData = [
//         { id: "01", name: "Direction",         src: Direction,       desc: "Learn to craft stories, direct performances, and bring your vision to life on screen.",              link: "/" },
//         { id: "02", name: "Cinematography",    src: Cinematography,  desc: "Learn to frame visuals, master lighting, and capture stories through the lens",                    link: "/" },
//         { id: "03", name: "Virtual Production",src: VP,              desc: "Create immersive worlds using real-time technology and next-gen filmmaking tools",                  link: "/" },
//         { id: "04", name: "Visual Effects",    src: VFX,             desc: "Design stunning visuals, blend reality with imagination, and bring scenes to life",                link: "/" },
//         { id: "05", name: "Acting",            src: Acting,          desc: "Express emotions, perform with confidence, and bring characters to life on screen",                link: "/" },
//         { id: "06", name: "Editing",           src: Editing,         desc: "Shape stories through cuts, timing, and rhythm to craft seamless cinematic experiences",           link: "/" },
//         { id: "07", name: "Photography",       src: Photography,     desc: "Capture moments, master composition, and tell powerful stories through images",                    link: "/" },
//         { id: "08", name: "DI (Color Grading)",src: DI,              desc: "Enhance visuals with color, mood, and tone to achieve a cinematic finish",                         link: "/" },
//     ]

//     return (
//         <section className='max-w-6xl px-5 mx-auto pt-24' id="courses">
//             <div>

//                 {/* ── Heading ── */}
//                 <motion.div
//                     className="text-center"
//                     variants={headingContainer}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.6 }}
//                 >
//                     <motion.h1
//                         className='uppercase text-gray font-onest font-bold'
//                         variants={headingLine}
//                     >
//                         Our Programs
//                     </motion.h1>
//                     <motion.h1
//                         className='font-bebas text-4xl my-1'
//                         variants={headingLine}
//                     >
//                         Explore the World of Filmmaking
//                     </motion.h1>
//                     <motion.p
//                         className='font-onest text-sec'
//                         variants={headingLine}
//                     >
//                         Choose your path and start building your career in the film industry
//                     </motion.p>
//                 </motion.div>

//                 {/* ── Desktop grid ── */}
//                 <motion.div
//                     className="md:flex items-center h-[80vh] justify-center mt-10 hidden"
//                     variants={desktopGrid}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.25 }}
//                 >
//                     {courseData.map((c, idx) => (
//                         <motion.div key={idx} variants={courseItemReveal}>
//                             <CourseItems
//                                 number={c.id}
//                                 imgSrc={c.src}
//                                 title={c.name}
//                                 desc={c.desc}
//                                 link={c.link}
//                                 toggle={() => handleHover(idx)}
//                                 isOpen={openIndex === idx}
//                             />
//                         </motion.div>
//                     ))}
//                 </motion.div>

//                 {/* ── Mobile carousel ── */}
//                 <div className="block md:hidden overflow-hidden">
//                     <Carousel className="w-full">
//                         <CarouselContent className="-ml-4 my-5">
//                             {courseData.map((c, idx) => (
//                                 <CarouselItem
//                                     key={c.id}
//                                     className="pl-4 basis-[85%]"
//                                 >
//                                     <motion.div
//                                         className="relative h-96 overflow-hidden rounded-2xl"
//                                         custom={idx * 0.07}
//                                         variants={mobileCard}
//                                         initial="hidden"
//                                         whileInView="visible"
//                                         viewport={{ once: true, amount: 0.3 }}
//                                     >
//                                         <img
//                                             src={c.src}
//                                             alt={c.name}
//                                             className="absolute inset-0 h-full w-full object-cover"
//                                         />

//                                         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

//                                         <motion.div
//                                             className="absolute bottom-0 left-0 z-10 p-5 text-white space-y-1"
//                                             initial={{ opacity: 0, y: 16 }}
//                                             whileInView={{ opacity: 1, y: 0 }}
//                                             viewport={{ once: true }}
//                                             transition={{ duration: 0.5, delay: idx * 0.07 + 0.2, ease: 'easeOut' }}
//                                         >
//                                             <h1 className="font-akira">{c.name}</h1>
//                                             <p className="mb-3 text-sm font-onest">{c.desc}</p>
//                                             <Link
//                                                 className="cta-btn inline-block rounded-2xl px-4 py-2"
//                                                 to={c.link}
//                                             >
//                                                 View Course
//                                             </Link>
//                                         </motion.div>
//                                     </motion.div>
//                                 </CarouselItem>
//                             ))}
//                         </CarouselContent>
//                     </Carousel>
//                 </div>

//             </div>
//         </section>
//     )
// }

// export default Courses




import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, ArrowUpRight } from 'lucide-react'
import Direction from '@/assets/home/dir.webp';
import Cinematography from '@/assets/home/cin.webp';
import VP from '@/assets/home/vp.webp';
import VFX from '@/assets/home/vfx.webp';
import Acting from '@/assets/home/act.webp';
import Editing from '@/assets/home/edi.webp';
import DI from '@/assets/home/di.webp';
import Photography from '@/assets/home/pho.webp';
import CourseItems from './CourseItems';
import { Link } from 'react-router-dom';

// ── Variants ────────────────────────────────────────────────────────────────

const headingContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
}

const headingLine = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

const desktopGrid = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.35 }
    }
}

const courseItemReveal = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

const mobileStagger = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.09, delayChildren: 0.2 }
    }
}

const mobileRow = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

const courseData = [
    { id: "01", name: "Direction", src: Direction, desc: "Learn to craft stories, direct performances, and bring your vision to life on screen.", link: "/direction" },
    { id: "02", name: "Cinematography", src: Cinematography, desc: "Learn to frame visuals, master lighting, and capture stories through the lens", link: "/cinematography" },
    { id: "03", name: "Virtual Production", src: VP, desc: "Create immersive worlds using real-time technology and next-gen filmmaking tools", link: "/stage-unreal_virtual-production" },
    { id: "04", name: "Advance Virtual Production", src: VFX, desc: "Design stunning visuals, blend reality with imagination, and bring scenes to life", link: "/advanced-virtual-production" },
    { id: "05", name: "Acting", src: Acting, desc: "Express emotions, perform with confidence, and bring characters to life on screen", link: "/acting" },
    { id: "06", name: "Editing & DI", src: Editing, desc: "Shape stories through cuts, timing, and rhythm to craft seamless cinematic experiences", link: "/editing" },
    { id: "07", name: "Photography", src: Photography, desc: "Capture moments, master composition, and tell powerful stories through images", link: "/photography" },
]

// ── Mobile accordion row — same visual grammar as the desktop panel ─────────

function MobileCourseRow({ course, isOpen, onToggle }) {
    return (
        <motion.div
            variants={mobileRow}
            layout
            onClick={onToggle}
            transition={{ layout: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } }}
            className="relative overflow-hidden rounded-2xl"
            style={{ height: isOpen ? 200 : 72 }}
        >
            <motion.img
                src={course.src}
                alt={course.name}
                className="absolute inset-0 h-full w-full object-cover"
                animate={{ scale: isOpen ? 1 : 1.1, opacity: isOpen ? 1 : 0.55 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
            />
            <div
                className={`absolute inset-0 transition-all duration-500 ${isOpen
                        ? 'bg-gradient-to-t from-black/90 via-black/40 to-black/10'
                        : 'bg-black/60'
                    }`}
            />

            {/* Always-visible header row */}
            <div className="relative z-10 flex h-[72px] items-center justify-between px-5">
                <div className="flex items-center gap-3">
                    <span className="font-onest text-xs text-white/50">{course.id}</span>
                    <h1 className="font-akira text-lg text-white">{course.name}</h1>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-full border border-white/20 p-1.5 shrink-0"
                >
                    <Plus size={14} className="text-white" />
                </motion.div>
            </div>

            {/* Expanded content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.35, delay: 0.1, ease: 'easeOut' }}
                        className="relative z-10 space-y-3 px-5 pb-5"
                    >
                        <p className="font-onest text-sm text-white/80">{course.desc}</p>
                        <Link
                            to={course.link}
                            onClick={(e) => e.stopPropagation()}
                            className="text-grayy inline-flex items-center gap-1.5 rounded-2xl px-4 py-2 text-sm"
                        >
                            View Course
                            <ArrowUpRight size={15} />
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

// ── Component ────────────────────────────────────────────────────────────────

const Courses = () => {
    const [openIndex, setOpenIndex] = useState(0)
    const [mobileOpenIndex, setMobileOpenIndex] = useState(0)

    const handleHover = (index) => {
        setOpenIndex((p) => (p === index ? null : index))
    }

    const handleMobileToggle = (index) => {
        setMobileOpenIndex((p) => (p === index ? null : index))
    }

    //  pt-16 sm:pt-20

    return (
        <section className='max-w-6xl px-5 py-20 mx-auto pt-25'>
            <div>

                {/* ── Heading ── */}
                <motion.div
                    className="text-center"
                    variants={headingContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                >
                    <motion.h1
                        className='uppercase text-gray font-onest font-bold'
                        variants={headingLine}
                    >
                        Our Programs
                    </motion.h1>
                    <motion.h1
                        className='font-bebas text-3xl sm:text-4xl my-1'
                        variants={headingLine}
                    >
                        Explore the World of Filmmaking
                    </motion.h1>
                    <motion.p
                        className='font-onest text-sec text-sm sm:text-base'
                        variants={headingLine}
                    >
                        Choose your path and start building your career in the film industry
                    </motion.p>
                </motion.div>

                {/* ── Desktop grid — unchanged, uses CourseItems ── */}
                <motion.div
                    className="md:flex items-center h-[80vh] justify-center mt-10 hidden"
                    variants={desktopGrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    {courseData.map((c, idx) => (
                        <motion.div key={idx} variants={courseItemReveal}>
                            <CourseItems
                                number={c.id}
                                imgSrc={c.src}
                                title={c.name}
                                desc={c.desc}
                                link={c.link}
                                toggle={() => handleHover(idx)}
                                isOpen={openIndex === idx}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── Mobile — tap-to-expand accordion, same visual grammar as CourseItems ── */}
                <motion.div
                    className="mt-8 flex flex-col gap-3 md:hidden"
                    variants={mobileStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {courseData.map((c, idx) => (
                        <MobileCourseRow
                            key={c.id}
                            course={c}
                            isOpen={mobileOpenIndex === idx}
                            onToggle={() => handleMobileToggle(idx)}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Courses