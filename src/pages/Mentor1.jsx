
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clapperboard, Globe2, ShieldCheck, Quote } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import img1 from "../assets/mentors/cj rajkumar.webp"
import img2 from "../assets/mentors/nasar.webp"
import img3 from "../assets/mentors/madhu ambat.webp"
import img4 from "../assets/mentors/karthik R.webp"
import img5 from "../assets/mentors/manoj param.webp"
import img6 from "../assets/mentors/ps vinothraj.webp"
import img7 from "../assets/mentors/rm.webp"
import img8 from "../assets/mentors/prasanna.webp"
import img9 from "../assets/mentors/chandramohan.webp"
import img10 from "../assets/mentors/diamond babu.webp"
import img11 from "../assets/mentors/mahesh muthusw.webp"
import img12 from "../assets/mentors/cabel shankar.webp"
import img13 from "../assets/mentors/sudhan.webp"
import img14 from "../assets/mentors/b3.webp"
import img15 from "../assets/mentors/shiv shankar.webp"
import img16 from "../assets/mentors/mn.webp"
import img17 from "../assets/mentors/ritto.webp"
import img18 from "../assets/mentors/kaamesh.webp"
import img19 from "../assets/mentors/ja deepa.webp"
import img20 from "../assets/mentors/sai vij.webp"
import img21 from "../assets/mentors/antony bibin.webp"
import img22 from "../assets/mentors/st.webp"
import img23 from "../assets/mentors/sri.webp"


const ACCENT = "#FFAC26"

// ── Mentor data, grouped by category ────────────────────────────────────────

const mentorsByCategory = {
    filmmakers: [
        { name: "Arjun Mehta", role: "Feature Film Director", company: "Independent", img: img1, bio: "20+ years directing narrative features across three continents." },
        { name: "Naomi Reyes", role: "Cinematographer", company: "Reyes Films", img: img2, bio: "DOP on award-winning indie dramas, known for natural-light work." },
        { name: "Ken Watanabe Jr.", role: "Editor & Colorist", company: "Cutroom Studios", img: img3, bio: "Edited three festival-selected shorts and one Netflix original." },
        { name: "Priya Raman", role: "Screenwriter", company: "Freelance", img:img4, bio: "Wrote two produced features, mentors emerging screenwriters." },
        { name: "Marcus Bell", role: "Production Designer", company: "Bell Creative", img:img5, bio: "Built worlds for period dramas and sci-fi alike for a decade." },
        { name: "Chloe Fontaine", role: "Documentary Director", company: "Fontaine Docs", img:img6, bio: "Directed documentaries screened at Sundance and IDFA." },
        { name: "Rahul Deshmukh", role: "Sound Designer", company: "Echo Studios", img:img7, bio: "Sound design for over 40 short and feature films." },
        { name: "Isabelle Cruz", role: "Line Producer", company: "Cruz Productions", img:img8, bio: "Produced 12 independent features on lean budgets." },
    ],
    guestLecturers: [
        { name: "Prof. Daniel Kim", role: "Film Theory", company: "USC School of Cinema", img:img1, bio: "Visiting lecturer on narrative structure and world cinema." },
        { name: "Dr. Elena Rossi", role: "VFX Pipeline", company: "ILM (Guest Faculty)", img:img1, bio: "Guest speaker on real-time VFX and virtual production workflows." },
        { name: "Sam Okafor", role: "Distribution Strategy", company: "A24 (Alumni Talk)", img:img1, bio: "Shares insights on festival strategy and indie distribution." },
        { name: "Mei Lin", role: "Animation Direction", company: "Studio Ghibli (Guest)", img:img1, bio: "Lectures on hand-drawn animation in a digital-first industry." },
        { name: "Jonas Weber", role: "Cinematography Masterclass", company: "German Film Academy", img:img1, bio: "Runs an annual masterclass on lighting for emotion." },
        { name: "Aisha Bello", role: "Screenwriting Workshop", company: "Nollywood Guild", img:img1, bio: "Workshops on writing for fast, high-volume production." },
    ],
    advisoryBoard: [
        { name: "Vikram Anand", role: "Chairman", company: "Anand Media Group", img: img1, bio: "Three decades building media businesses across Asia." },
        { name: "Laura Whitfield", role: "Board Director", company: "Whitfield Capital", img:img1, bio: "Advises on funding strategy for creative institutions." },
        { name: "Thomas Berger", role: "Board Director", company: "Berger Entertainment", img:img1, bio: "Former studio executive, focuses on curriculum relevance." },
        { name: "Meera Iyer", role: "Board Director", company: "Iyer Foundation", img:img1, bio: "Champions accessibility in film education across India." },
        { name: "Carlos Mendes", role: "Board Director", company: "Mendes Studios", img:img1, bio: "Bridges academic training with industry hiring pipelines." },
    ],
}

const categories = [
    { key: "filmmakers", label: "Filmmakers as Mentors", icon: Clapperboard },
    { key: "guestLecturers", label: "International Guest Lecturers", icon: Globe2 },
    { key: "advisoryBoard", label: "Advisory Board of Directors", icon: ShieldCheck },
]

// ── Variants ─────────────────────────────────────────────────────────────

const gridVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
}

const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
}

// ── Category tabs ────────────────────────────────────────────────────────

function CategoryTabs({ active, onChange }) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => {
                const Icon = cat.icon
                const isActive = active === cat.key
                return (
                    <button
                        key={cat.key}
                        type="button"
                        onClick={() => onChange(cat.key)}
                        className={`relative flex items-center gap-2 rounded-full px-4 py-2.5 sm:px-5 sm:py-3 font-onest text-xs sm:text-sm font-medium transition-colors duration-300 ${
                            isActive ? "text-[#050505]" : "text-white/70 hover:text-white"
                        }`}
                    >
                        {isActive && (
                            <motion.span
                                layoutId="mentor-tab-pill"
                                className="absolute inset-0 rounded-full"
                                style={{ backgroundColor: ACCENT }}
                                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                            />
                        )}
                        {!isActive && (
                            <span className="absolute inset-0 rounded-full border border-white/15" />
                        )}
                        <Icon size={15} className="relative z-10" />
                        <span className="relative z-10">{cat.label}</span>
                    </button>
                )
            })}
        </div>
    )
}

// ── Mentor card — image only, full detail revealed on hover ─────────────────

function MentorCard({ mentor, index }) {
    return (
        <motion.div
            variants={cardVariants}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#111111] ring-1 ring-white/10"
        >
            <img
                src={mentor.img}
                alt={mentor.name}
                loading="lazy"
                className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:grayscale-0"
            />

            {/* Ever-present bottom fade for depth — no text, just a hint of surface */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

            {/* Hover-reveal detail overlay */}
            <div className="pointer-events-none absolute inset-0 flex translate-y-3 flex-col justify-end bg-gradient-to-t from-black via-black/80 to-black/10 p-4 sm:p-5 opacity-0 transition-all duration-350 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <Quote size={16} className="mb-2" style={{ color: ACCENT }} />
                <h3 className="font-onest text-sm sm:text-base font-semibold text-white leading-tight">
                    {mentor.name}
                </h3>
                <p className="font-onest text-xs sm:text-sm mt-0.5" style={{ color: ACCENT }}>
                    {mentor.role} · {mentor.company}
                </p>
                <p className="font-onest text-[11px] sm:text-xs leading-snug text-white/70 mt-2 line-clamp-3">
                    {mentor.bio}
                </p>
            </div>

            {/* Accent corner glow on hover */}
            <div
                className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ backgroundColor: ACCENT }}
            />
        </motion.div>
    )
}

// ── Grid of mentor cards for the active category ────────────────────────────

function MentorGrid({ mentors }) {
    return (
        <motion.div
            variants={gridVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5"
        >
            {mentors.map((mentor, i) => (
                <MentorCard key={mentor.name} mentor={mentor} index={i} />
            ))}
        </motion.div>
    )
}

// ── Section ──────────────────────────────────────────────────────────────

export default function MentorsSectionNew() {
    const [active, setActive] = useState(categories[0].key)
    const activeMeta = categories.find((c) => c.key === active)

    return (
        <div className="bg-[#050505] text-white">
        <Navbar />
        <section className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 md:py-28">
            {/* Ambient glows */}
            <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-[#ffac26]/10 blur-[140px]" />
            <div className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-[#ffac26]/10 blur-[140px]" />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
                >
                    <p className="font-onest mb-3 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
                        Learn From The Best
                    </p>
                    <h2 className="font-bebas text-4xl leading-tight tracking-wide text-white sm:text-5xl">
                        The People Shaping Our Curriculum
                    </h2>
                    <p className="font-onest mt-4 text-sm text-white/60 sm:text-base">
                        Hover over a face to meet the working professionals, visiting experts,
                        and industry leaders behind every course.
                    </p>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    className="mb-10 sm:mb-14"
                >
                    <CategoryTabs active={active} onChange={setActive} />
                </motion.div>

                {/* Active category description */}
                <AnimatePresence mode="wait">
                    <motion.p
                        key={active + "-desc"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="font-onest mb-6 text-center text-xs uppercase tracking-widest text-white/40 sm:mb-8"
                    >
                        {activeMeta.label} · {mentorsByCategory[active].length} people
                    </motion.p>
                </AnimatePresence>

                {/* Grid — swaps with the active category */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <MentorGrid mentors={mentorsByCategory[active]} />
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
        <Footer />
        </div>
    )
}