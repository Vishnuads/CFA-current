import React from 'react'
import { motion } from 'framer-motion'
import Bg from '@/assets/home/net.png'
import C1 from '@/assets/connect/Lotus.webp'
import C2 from '@/assets/connect/Tinnu.webp'
import C3 from '@/assets/connect/cooke.webp'
import C4 from '@/assets/connect/sony.webp'
import C5 from '@/assets/connect/Nikon.webp'
import C6 from '@/assets/connect/Godox.jpg'
import C7 from '@/assets/connect/sig.webp'
import C8 from '@/assets/connect/panasonic.webp'

const leftLogos = [
    { src: C1, name: "lotus", shift: true  },
    { src: C2, name: "tinnu", shift: false },
    { src: C3, name: "cooke", shift: false },
    { src: C4, name: "sony", shift: true  },
]

const rightLogos = [
    { src: C5, name: "nikon", shift: true  },
    { src: C6, name: "godox", shift: false },
    { src: C7, name: "sigma", shift: false },
    { src: C8, name: "panasonic", shift: true  },
]

const bgFade = {
    hidden: { opacity: 0, scale: 1.04 },
    visible: {
        opacity: 1, scale: 1,
        transition: { duration: 1.1, ease: 'easeOut' }
    }
}

const leftColStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
}

const logoFromLeft = {
    hidden: { opacity: 0, x: -36 },
    visible: {
        opacity: 1, x: 0,
        transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

const rightColStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
}

const logoFromRight = {
    hidden: { opacity: 0, x: 36 },
    visible: {
        opacity: 1, x: 0,
        transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

const mobileRowStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
}

const logoPop = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
        opacity: 1, scale: 1,
        transition: { duration: 0.35, ease: 'backOut' }
    }
}

const centerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
}

const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
}

const Connection = () => {
    return (
        <section className="relative max-w-5xl mx-auto md:h-[80vh] pb-10 pt-6 flex items-center justify-center">
            <motion.div
                className="absolute inset-0 hidden md:block"
                variants={bgFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <img src={Bg} alt="background" className="h-full w-full object-contain" />
            </motion.div>

            <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-4 gap-4">
                <motion.div
                    className="md:flex flex-col gap-6 ps-8 hidden"
                    variants={leftColStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {leftLogos.map((logo, idx) => (
                        <motion.div
                            key={idx}
                            className={`-translate-y-6 bg-white shadow-md rounded-md p-1 w-fit ${logo.shift ? 'ml-8' : 'ml-0'}`}
                            variants={logoFromLeft}
                            whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
                        >
                            <img src={logo.src} alt={logo.name} className="w-12 h-auto object-contain" />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex-1 max-w-sm mx-auto text-center px-4 py-8"
                    variants={centerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.p
                        className="text-xs font-semibold font-onest text-gray tracking-widest uppercase mb-2"
                        variants={fadeUp}
                    >
                        Industry Connections
                    </motion.p>
                    <motion.h2
                        className="font-bebas text-white text-xl md:text-3xl leading-tight"
                        variants={fadeUp}
                    >
                        Powered by Leading Brands
                    </motion.h2>
                    <motion.p
                        className="font-onest text-[#8b8b8b] text-sm leading-relaxed md:mb-5 mb-1"
                        variants={fadeUp}
                    >
                        We collaborate with globally recognized brands and production tools to give you hands-on experience
                    </motion.p>
                    <motion.button
                        className="text-grayy px-6 py-2 rounded-3xl text-sm md:flex mx-auto hidden"
                        variants={fadeUp}
                        whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Get Guidance
                    </motion.button>
                </motion.div>

                <motion.div
                    className="flex gap-5 md:hidden"
                    variants={mobileRowStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    {leftLogos.map((logo, idx) => (
                        <motion.div
                            key={idx}
                            className="-translate-y-6 bg-white shadow-md rounded-md p-1 w-fit"
                            variants={logoPop}
                        >
                            <img src={logo.src} alt={logo.name} className="w-12 h-auto object-contain" />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex md:flex-col items-center flex-row md:gap-7 gap-5 md:pe-8 pe-0 md:items-end"
                    variants={rightColStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {rightLogos.map((logo, idx) => (
                        <motion.div
                            key={idx}
                            className={`-translate-y-6 bg-white shadow-md rounded-md p-1 w-fit ${logo.shift ? 'md:mr-8 mr-0' : 'mr-0'}`}
                            variants={logoFromRight}
                            whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
                        >
                            <img src={logo.src} alt={logo.name} className="w-16 h-auto object-contain" />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.button
                    className="text-grayy px-6 py-2 rounded-3xl text-sm md:hidden block"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
                    whileTap={{ scale: 0.97 }}
                >
                    Get Guidance
                </motion.button>
            </div>
        </section>
    )
}

export default Connection