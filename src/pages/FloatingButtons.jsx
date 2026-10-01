
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaWhatsapp, FaPhoneAlt, FaChevronRight, FaEnvelope } from "react-icons/fa";
// import { MdOutlineContactPhone } from "react-icons/md";
// import { IoMdContact } from "react-icons/io";

// const buttons = [
//     {
//         key: "whatsapp",
//         href: "https://wa.me/919884683888?text=Hi",
//         external: true,
//         label: "WhatsApp",
//         sub: "Chat with us",
//         icon: <FaWhatsapp size={20} />,
//         bg: "#25D366",
//         text: "text-white",
//     },
//     {
//         key: "call",
//         href: "tel:+919884683888",
//         external: false,
//         label: "Call Now",
//         sub: "+91 98846 83888",
//         icon: <FaPhoneAlt size={16} />,
//         bg: "#FFAC26",
//         text: "text-black",
//     },

//     { key: "enquiry", href: "/contact", external: false, label: "Enquiry", sub: "Send us an enquiry", icon: <MdOutlineContactPhone  size={16} />, bg: "#2563EB", text: "text-white", }

// ]

// export default function FloatingButtons() {
//     const [open, setOpen] = useState(false)

//     return (
//         <>
//             {/* Backdrop, mobile tap-to-close */}
//             <AnimatePresence>
//                 {open && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 0.2 }}
//                         onClick={() => setOpen(false)}
//                         className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px] sm:hidden"
//                     />
//                 )}
//             </AnimatePresence>

//             <motion.div
//                 onMouseEnter={() => setOpen(true)}
//                 onMouseLeave={() => setOpen(false)}
//                 initial={false}
//                 animate={{ x: open ? 0 : "calc(-100% + 42px)" }}
//                 transition={{ type: "spring", stiffness: 260, damping: 28 }}
//                 className="fixed top-[75%] left-0 z-50 -translate-y-1/2"
//             >
//                 <div className="card-border flex flex-row-reverse items-stretch overflow-hidden rounded-r-3xl rounded-l-none bg-black/80 backdrop-blur-md">
//                     {/* ── Collapsed edge tab ── */}
//                     <button
//                         onClick={() => setOpen((v) => !v)}
//                         aria-label={open ? "Close contact panel" : "Open contact panel"}
//                         className="relative flex w-[42px] shrink-0 flex-col items-center justify-center gap-3 py-5"
//                     >
//                         <motion.span
//                             animate={{ rotate: open ? 180 : 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="text-white/70"
//                         >
//                             <FaChevronRight size={12} />
//                         </motion.span>
//                         <span
//                             className="font-onest text-[11px] tracking-widest text-white/70 uppercase"
//                             style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
//                         >
//                             Contact
//                         </span>
//                         {/* breathing dot indicator, visible while collapsed */}
//                         <motion.span
//                             className="h-1.5 w-1.5 rounded-full bg-[#ffac26]"
//                             animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
//                             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                         />
//                     </button>

//                     {/* ── Expanded content ── */}
//                     <div className="flex flex-col gap-1.5 p-3">
//                         {buttons.map((btn, i) => (
//                             <motion.a
//                                 key={btn.key}
//                                 href={btn.href}
//                                 target={btn.external ? "_blank" : undefined}
//                                 rel={btn.external ? "noreferrer" : undefined}
//                                 initial={{ opacity: 0, x: -16 }}
//                                 animate={
//                                     open
//                                         ? { opacity: 1, x: 0 }
//                                         : { opacity: 0, x: -16 }
//                                 }
//                                 transition={{
//                                     duration: 0.3,
//                                     delay: open ? 0.12 + i * 0.08 : 0,
//                                     ease: "easeOut",
//                                 }}
//                                 whileHover={{ x: 3 }}
//                                 whileTap={{ scale: 0.97 }}
//                                 className="flex w-44 items-center gap-3 rounded-2xl bg-white/5 p-2.5 transition-colors hover:bg-white/10"
//                             >
//                                 <span
//                                     className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${btn.text}`}
//                                     style={{ backgroundColor: btn.bg }}
//                                 >
//                                     {btn.icon}
//                                 </span>
//                                 <span className="flex flex-col">
//                                     <span className="font-onest text-sm text-white">{btn.label}</span>
//                                     <span className="font-onest text-[11px] text-white/50">{btn.sub}</span>
//                                 </span>
//                             </motion.a>
//                         ))}
//                     </div>
//                 </div>
//             </motion.div>
//         </>
//     )
// }













import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"


const ChevronRightIcon = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
)

const WhatsAppIcon = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.6 5.96L.08 24l6.28-1.65a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.47-8.43zM12.09 21.8h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.86 9.86 0 0 1-1.52-5.28c0-5.46 4.44-9.9 9.9-9.9 2.65 0 5.14 1.03 7.01 2.9a9.84 9.84 0 0 1 2.9 7c0 5.46-4.44 9.9-9.92 9.9zm5.43-7.41c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
    </svg>
)

const PhoneIcon = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
)

const EnquiryIcon = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
)


const buttons = [
    {
        key: "whatsapp",
        type: "external",
        href: "https://wa.me/919884683888?text=Hi",
        label: "WhatsApp",
        sub: "Chat with us",
        icon: <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />,
        bg: "#25D366",
        text: "text-white",
    },
    {
        key: "call",
        type: "tel",
        href: "tel:+919884683888",
        label: "Call Now",
        sub: "+91 98846 83888",
        icon: <PhoneIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
        bg: "#FFAC26",
        text: "text-black",
    },
    {
        key: "enquiry",
        type: "route",
        href: "/contact",
        label: "Enquiry",
        sub: "Send us an enquiry",
        icon: <EnquiryIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
        bg: "#2563EB",
        text: "text-white",
    },
]

// ── One button row — picks Link vs <a> based on btn.type ────────────────────

function ContactButton({ btn, open, delay, onNavigate }) {
    const content = (
        <>
            <span
                className={`flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full ${btn.text}`}
                style={{ backgroundColor: btn.bg }}
            >
                {btn.icon}
            </span>
            <span className="flex flex-col">
                <span className="font-onest text-xs sm:text-sm text-white">{btn.label}</span>
                <span className="font-onest text-[10px] sm:text-[11px] text-white/50">{btn.sub}</span>
            </span>
        </>
    )

    const motionProps = {
        initial: { opacity: 0, x: -16 },
        animate: open ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 },
        transition: { duration: 0.3, delay: open ? delay : 0, ease: "easeOut" },
        whileHover: { x: 3 },
        whileTap: { scale: 0.97 },
        className: "flex w-36 sm:w-44 items-center gap-2 sm:gap-3 rounded-2xl bg-white/5 p-2 sm:p-2.5 transition-colors hover:bg-white/10",
    }

    if (btn.type === "route") {
        return (
            <motion.div {...motionProps}>
              
                <Link to={btn.href} onClick={onNavigate} className="flex items-center gap-2 sm:gap-3 w-full">
                    {content}
                </Link>
            </motion.div>
        )
    }

    return (
        <motion.a
            href={btn.href}
            target={btn.type === "external" ? "_blank" : undefined}
            rel={btn.type === "external" ? "noreferrer" : undefined}
            {...motionProps}
        >
            {content}
        </motion.a>
    )
}

// ── Component ────────────────────────────────────────────────────────────

export default function FloatingButtons() {
    const [open, setOpen] = useState(false)

    const closePanel = () => setOpen(false)

    return (
        <>
            {/* Backdrop, mobile tap-to-close */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={closePanel}
                        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px] sm:hidden"
                    />
                )}
            </AnimatePresence>

            <motion.div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                initial={false}
                animate={{ x: open ? 0 : "calc(-100% + 42px)" }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                className="fixed top-[75%] left-0 z-50 -translate-y-1/2"
            >
                <div className="card-border flex flex-row-reverse items-stretch overflow-hidden rounded-r-3xl rounded-l-none bg-black/80 backdrop-blur-md">
                    {/* ── Collapsed edge tab ── */}
                    <button
                        onClick={() => setOpen((v) => !v)}
                        aria-label={open ? "Close contact panel" : "Open contact panel"}
                        className="relative flex w-[42px] shrink-0 flex-col items-center justify-center gap-2 sm:gap-3 py-4 sm:py-5"
                    >
                        <motion.span
                            animate={{ rotate: open ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-white/70"
                        >
                            <ChevronRightIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        </motion.span>
                        <span
                            className="font-onest text-[9px] sm:text-[11px] tracking-widest text-white/70 uppercase"
                            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                        >
                            Contact
                        </span>
                        {/* breathing dot indicator, visible while collapsed */}
                        <motion.span
                            className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#ffac26]"
                            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </button>

                    {/* ── Expanded content ── */}
                    <div className="flex flex-col gap-1.5 p-2 sm:p-3">
                        {buttons.map((btn, i) => (
                            <ContactButton
                                key={btn.key}
                                btn={btn}
                                open={open}
                                delay={0.12 + i * 0.08}
                                onNavigate={closePanel}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    )
}