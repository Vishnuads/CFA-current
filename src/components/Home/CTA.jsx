// import React from 'react'
// import { motion } from 'framer-motion'
// import I1 from '@/assets/home/Left-h.png'
// import I2 from '@/assets/home/Right-h.png'
// import { Link } from 'react-router'

// // ── Variants ────────────────────────────────────────────────────────────────

// const handLeft = {
//     hidden: { x: -120, 
//         // opacity: 0 
//     },
//     visible: {
//         x: 0,
//         // opacity: 1,
//         transition: {
//             duration: 1,
//             ease: [0.22, 1, 0.36, 1], // easeOutExpo — fast start, silky finish
//             delay: 0.1,
//         }
//     }
// }

// const handRight = {
//     hidden: { x: 120, 
//         // opacity: 0 
//     },
//     visible: {
//         x: 0,
//         // opacity: 1,
//         transition: {
//             duration: 1,
//             ease: [0.22, 1, 0.36, 1],
//             delay: 0.1,
//         }
//     }
// }

// const centerContainer = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.11, delayChildren: 0.45 } }
// }

// const fadeUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
//     }
// }

// const buttonReveal = {
//     hidden: { opacity: 0, scale: 0.88 },
//     visible: {
//         opacity: 1,
//         scale: 1,
//         transition: { duration: 0.45, ease: 'backOut', delay: 0.85 }
//     }
// }

// // ── Component ────────────────────────────────────────────────────────────────

// const CTA = () => {
//     return (
//         <>
//             <section className='py-20 overflow-hidden'>
//                 <div className="flex relative">

//                     {/* Left hand */}
//                     <motion.img
//                         src={I1}
//                         alt="Left Hand"
//                         className='h-80 w-auto md:opacity-100 opacity-0'
//                         variants={handLeft}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.4 }}
//                     />

//                     {/* Center text */}
//                     <motion.div
//                         className='text-center z-5 space-y-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
//                         variants={centerContainer}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.4 }}
//                     >
//                         <motion.p className='text-gray font-bold font-onest' variants={fadeUp}>
//                             LET'S CONNECT
//                         </motion.p>
//                         <motion.h1 className='font-bebas text-5xl' variants={fadeUp}>
//                             A BIIGER SCREEN
//                         </motion.h1>
//                         <motion.div className='text-lg' variants={fadeUp}>
//                             <p className='text-[#8B8B8B]'>
//                                 Want to build a <span className='text-white'>Career</span> in <span className='text-white'>Cinema</span>
//                             </p>
//                             <p className='text-[#8B8B8B]'>Our industry mentors are ready to guide you.</p>
//                         </motion.div>
//                         <Link to={'/contact'}>
//                         <motion.button
//                             className='text-grayy px-5 py-3 cursor-pointer'
//                             variants={buttonReveal}
//                             whileHover={{ scale: 1.06, transition: { duration: 0.2 } }}
//                             whileTap={{ scale: 0.96 }}
//                         >
//                             GET IN TOUCH
//                         </motion.button>
//                         </Link>
//                     </motion.div>

//                     {/* Right hand */}
//                     <motion.img
//                         src={I2}
//                         alt="Right Hand"
//                         className='h-80 w-auto absolute right-0 top-0 md:opacity-100 opacity-0'
//                         variants={handRight}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.4 }}
//                     />

//                 </div>
//             </section>
//         </>
//     )
// }

// export default CTA
















import React from 'react'
import { motion } from 'framer-motion'
import I1 from '@/assets/home/Left-h.png'
import I2 from '@/assets/home/Right-h.png'
import { Link } from 'react-router'

// ── Variants ────────────────────────────────────────────────────────────────

const handLeft = {
    hidden: { x: -120 },
    visible: {
        x: 0,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1], // easeOutExpo — fast start, silky finish
            delay: 0.1,
        }
    }
}

const handRight = {
    hidden: { x: 120 },
    visible: {
        x: 0,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
        }
    }
}

const centerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.11, delayChildren: 0.45 } }
}

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

const buttonReveal = {
    hidden: { opacity: 0, scale: 0.88 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.45, ease: 'backOut', delay: 0.85 }
    }
}

// ── Component ────────────────────────────────────────────────────────────────

const CTA = () => {
    return (
        <>
            <section className='py-14 md:py-20 overflow-hidden'>
                <div className="relative flex items-center justify-center min-h-[260px] sm:min-h-[300px] md:min-h-[320px] px-4">

                    {/* Left hand — hidden below md, doesn't affect layout when hidden */}
                    <motion.img
                        src={I1}
                        alt="Left Hand"
                        className='hidden md:block h-64 lg:h-80 w-auto absolute left-0 bottom-0'
                        variants={handLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                    />

                    {/* Right hand — hidden below md, doesn't affect layout when hidden */}
                    <motion.img
                        src={I2}
                        alt="Right Hand"
                        className='hidden md:block h-64 lg:h-80 w-auto absolute right-0 top-0'
                        variants={handRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                    />

                    {/* Center text */}
                    <motion.div
                        className='relative z-10 text-center space-y-3 w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto'
                        variants={centerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <motion.p className='text-gray font-bold font-onest text-sm sm:text-base' variants={fadeUp}>
                            LET'S CONNECT
                        </motion.p>
                        <motion.h1 className='font-bebas text-3xl sm:text-4xl md:text-5xl leading-tight' variants={fadeUp}>
                            A BIIGER SCREEN
                        </motion.h1>
                        <motion.div className='text-sm sm:text-base md:text-lg' variants={fadeUp}>
                            <p className='text-[#8B8B8B]'>
                                Want to build a <span className='text-white'>Career</span> in <span className='text-white'>Cinema</span>
                            </p>
                            <p className='text-[#8B8B8B]'>Our industry mentors are ready to guide you.</p>
                        </motion.div>
                        <Link to={'/contact'}>
                            <motion.button
                                className='text-grayy px-5 py-3 cursor-pointer text-sm sm:text-base'
                                variants={buttonReveal}
                                whileHover={{ scale: 1.06, transition: { duration: 0.2 } }}
                                whileTap={{ scale: 0.96 }}
                            >
                                GET IN TOUCH
                            </motion.button>
                        </Link>
                    </motion.div>

                </div>
            </section>
        </>
    )
}

export default CTA