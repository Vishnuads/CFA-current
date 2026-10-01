import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Mail, Phone, MapPin, Clock, User, MessageSquare, Send, Check,
    ArrowUpRight
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from './ContactForm'

const ACCENT = '#FFAC26'

const InstagramIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
)

const FacebookIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.55.45-1 1-1z" />
    </svg>
)

const ThreadsIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.25 13.75c-.25 4.5-3.15 7.25-7.9 7.25-5.15 0-8.6-3.2-8.6-9S6.2 3 11.35 3c4.7 0 7.75 2.55 8.5 6.6" />
        <path d="M8.25 8.75c1.1-1.1 2.7-1.6 4.55-1.6 4.05 0 6.7 2.15 6.7 5.95 0 3.5-2.2 5.7-5.75 5.7-2.7 0-4.5-1.4-4.5-3.55 0-2 1.6-3.3 3.95-3.3 3.05 0 5.45 1.35 6.95 3.8" />
    </svg>
)

const WhatsAppIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.6 5.96L.08 24l6.28-1.65a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.47-8.43zM12.09 21.8h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.86 9.86 0 0 1-1.52-5.28c0-5.46 4.44-9.9 9.9-9.9 2.65 0 5.14 1.03 7.01 2.9a9.84 9.84 0 0 1 2.9 7c0 5.46-4.44 9.9-9.92 9.9zm5.43-7.41c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
    </svg>
)

const TwitterIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.5-7.2L4.4 22H1.3l8.1-9.3L1 2h7.3l5 6.6L18.9 2zm-1.2 18h1.9L7.4 3.9H5.3L17.7 20z" />
    </svg>
)

const YoutubeIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.6 15.6V8.4l6.27 3.6-6.27 3.6z" />
    </svg>
)

const contactDetails = [
    {
        icon: MapPin,
        label: 'Visit Us',
        value: 'No.271A, 3rd Floor, Maan Sarovar Tower, Scheme Road, Teynampet, Chennai - 600018, India.',
        href: 'https://maps.app.goo.gl/UPLiPZxr79KMKaDr5',
    },
    {
        icon: Mail,
        label: 'Email Us',
        value: 'operations@cinemafactory.co.in',
        href: 'mailto:operations@cinemafactory.co.in',
    },
    {
        icon: Phone,
        label: 'Call Us',
        value: '+91 9884683888',
        href: 'tel:+919884683888',
    },
]

const officeHours = [
    { day: 'Monday — Friday', time: '9:00 AM – 7:00 PM' },
    { day: 'Saturday', time: '10:00 AM – 4:00 PM' },
    { day: 'Sunday', time: 'Closed' },
]

const socials = [
    { icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=61559751436051', label: 'Facebook' },
    { icon: InstagramIcon, href: 'https://www.instagram.com/cinema_factory_academy/', label: 'Instagram' },
    { icon: TwitterIcon, href: 'https://x.com/CF_academy2024?t=50Xz_jo1R8-TMc3gVJnwwQ&s=09', label: 'Twitter' },
    { icon: ThreadsIcon, href: 'https://www.threads.com/@cinema_factory_academy', label: 'Threads' },
    { icon: WhatsAppIcon, href: 'https://api.whatsapp.com/send?phone=9884683888', label: 'WhatsApp' },
    { icon: YoutubeIcon, href: 'https://www.youtube.com/@CinemafactoryFilmAcademy', label: 'YouTube' },
]

function SocialButton({ social }) {
    const [hovered, setHovered] = useState(false)
    const Icon = social.icon

    return (
        <div
            className="relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 4, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.9 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap z-20"
                    >
                        <span
                            className="block rounded-lg px-3 py-1.5 font-onest text-[11px] font-semibold text-[#050505] shadow-lg"
                            style={{ backgroundColor: ACCENT }}
                        >
                            {social.label}
                        </span>
                        <span
                            className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-2 w-2 rotate-45"
                            style={{ backgroundColor: ACCENT }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className={`relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${hovered
                    ? 'border-[#FFAC26] text-[#FFAC26] -translate-y-0.5'
                    : 'border-white/10 text-white/50'
                    }`}
            >
                <Icon size={16} />
            </a>
        </div>
    )
}

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: 'easeOut', delay },
    }),
}

function DetailCard({ detail, index }) {
    const Icon = detail.icon
    return (
        <motion.a
            href={detail.href}
            target={detail.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            variants={fadeUp}
            custom={0.15 + index * 0.08}
            className="card-border group relative flex items-start gap-4 bg-white/[0.02] p-5 transition-all duration-300 hover:bg-white/[0.05]"
        >
            <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${ACCENT}20` }}
            >
                <Icon size={18} style={{ color: ACCENT }} />
            </span>
            <span className="min-w-0 flex-1">
                <span className="block font-onest text-xs uppercase tracking-widest text-white/40 mb-1">
                    {detail.label}
                </span>
                <span className="block font-onest text-sm sm:text-base text-white leading-snug">
                    {detail.value}
                </span>
            </span>
            <ArrowUpRight
                size={16}
                className="mt-1 shrink-0 text-white/20 transition-all duration-300 group-hover:text-[#FFAC26] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
        </motion.a>
    )
}

const Contact = () => {

    return (
        <div className=' text-white '>
            <Navbar />
            <section className="relative bg-[#050505] overflow-hidden md:px-16 md:py-10 py-20">


                {/* Ambient glows */}
                <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#ffac26]/15 blur-[140px]" />
                <div className="pointer-events-none absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-[#ffac26]/10 blur-[130px]" />

                <div className="relative z-10">
                    {/* ── Header ── */}
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={fadeUp}
                        custom={0}
                        className="pt-8 sm:pt-12 md:pt-16 lg:pt-26 px-4 sm:px-6 lg:px-8"
                    >
                        <div className="text-center mb-14 sm:mb-16 md:mb-20 max-w-4xl mx-auto">
                            <h2 className="uppercase font-onest font-bold text-xs sm:text-sm tracking-wider mb-3" style={{ color: ACCENT }}>
                                Get In Touch
                            </h2>
                            <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl leading-tight">
                                Let's Start The Conversation
                            </h1>
                            <p className="font-onest text-sec mt-4 text-sm sm:text-base max-w-xl mx-auto">
                                Questions about a course, campus, or admissions? Reach out — a real
                                person from our team replies within one working day.
                            </p>
                        </div>
                    </motion.div>

                    {/* ── Main content ── */}
                    <div className="max-w-7xl mx-auto px-4 pb-20 sm:pb-24 md:pb-28">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">

                            {/* ── Left — contact details, hours, socials ── */}
                            <motion.div
                                initial="hidden"
                                animate="show"
                                className="lg:col-span-2 flex flex-col gap-4"
                            >
                                {contactDetails.map((detail, i) => (
                                    <DetailCard key={detail.label} detail={detail} index={i} />
                                ))}

                                {/* Office hours */}
                                <motion.div
                                    variants={fadeUp}
                                    custom={0.4}
                                    className="card-border relative bg-white/[0.02] p-5"
                                >
                                    <div className="flex items-center gap-2.5 mb-4">
                                        <Clock size={17} style={{ color: ACCENT }} />
                                        <span className="font-onest text-sm font-semibold">Office Hours</span>
                                    </div>
                                    <div className="space-y-2.5">
                                        {officeHours.map((row) => (
                                            <div key={row.day} className="flex justify-between font-onest text-xs sm:text-sm">
                                                <span className="text-white/50">{row.day}</span>
                                                <span className="text-white">{row.time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Socials */}
                                <motion.div variants={fadeUp} custom={0.48} className="flex items-center m-auto gap-3 pt-2">
                                    {socials.map((s) => (
                                        <SocialButton key={s.label} social={s} />
                                    ))}
                                </motion.div>

                            </motion.div>


                            <div className='lg:col-span-3'>
                                <ContactForm />
                            </div>

                        </div>
                    </div>

                    <motion.div
                        variants={fadeUp}
                        custom={0.56}
                        // className="card-border relative overflow-hidden group"
                        className="relative overflow-hidden group md:border md:border-white/10 md:rounded-2xl"
                    >

                        <iframe
                            title="Our location on Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.91654690229!2d80.24601647321103!3d13.040983813357023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267006fba7507%3A0x503e1b6f9895ffa7!2sCinema%20Factory%20Academy!5e0!3m2!1sen!2sin!4v1786449646210!5m2!1sen!2sin"
                            width="100%"
                            height="420"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </motion.div>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contact