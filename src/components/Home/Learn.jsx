import React from 'react'
import { motion } from 'framer-motion'
import Vid from '@/assets/vfx.mp4'
import Poster from '@/assets/Learn.png'
import OptimizedVideo from '../ui/OptimizedVideo'
import F1 from '@/assets/Mp/Leo.png'
import F2 from '@/assets/Mp/og.png'
import F3 from '@/assets/Mp/vm.png'
import F4 from '@/assets/Mp/beast.png'
import F5 from '@/assets/Mp/enpt.png'
import F6 from '@/assets/Mp/gk.png'
import F7 from '@/assets/Mp/eram.png'
import F8 from '@/assets/Mp/na.png'
import F9 from '@/assets/Mp/vtv1.png'
import F10 from '@/assets/Mp/rs.png'

import { Marquee } from '../ui/3d-testimonails'

const textContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } }
}

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
}

const filmStrip = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.055, delayChildren: 0.55 } }
}

const filmBadge = {
    hidden: { opacity: 0, scale: 0.7, y: 10 },
    visible: {
        opacity: 1, scale: 1, y: 0,
        transition: { duration: 0.35, ease: 'backOut' }
    }
}

const videoReveal = {
    hidden: { opacity: 0, x: 50, scale: 0.97 },
    visible: {
        opacity: 1, x: 0, scale: 1,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.25 }
    }
}


const Learn = () => {
    const films = [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10]

    return (
        <>
            <section>
                <div className="max-w-6xl mx-auto px-5 pt-10 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {/* Left — text + film logos */}
                        <motion.div
                            variants={textContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.35 }}
                        >
                            <motion.h1
                                className='uppercase text-gray font-onest font-bold'
                                variants={fadeUp}
                            >
                                LEARN FROM THE INDUSTRY
                            </motion.h1>

                            <motion.h1
                                className='font-bebas text-4xl my-1'
                                variants={fadeUp}
                            >
                                Inside Real Cinema. Not Just Classrooms.
                            </motion.h1>

                            <motion.p
                                className='font-onest text-sec'
                                variants={fadeUp}
                            >
                                Step behind the scenes with award-winning cinematographer Manoj Paramahamsa as he shares real insights from high-end film production, VFX workflows, and industry collaboration.
                            </motion.p>
                            
                                {/* Film logo strip */}
                                <Marquee 
                                    // variants={filmStrip}
                                >
                                    {films.map((f, idx) => (
                                        <div key={idx} className='flex items-center gap-8'>
                                            <motion.img
                                                src={f}
                                                alt='films'
                                                className='h-auto md:w-20 w-12 mx-2'
                                                variants={filmBadge}
                                                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                                            />
                                        </div>
                                    ))}
                                </Marquee>
    
                        </motion.div>

                        {/* Right — video */}
                        <motion.div
                            className='flex items-center justify-center'
                            variants={videoReveal}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.35 }}
                        >
                            <OptimizedVideo
                                src={Vid}
                                poster={Poster}
                                alt="VP-Manoj"
                            />
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Learn