import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper/modules"

import "swiper/css"
import "swiper/css/free-mode"

import img1 from "../../assets/mentors/cj rajkumar.webp"
import img2 from "../../assets/mentors/nasar.webp"
import img3 from "../../assets/mentors/madhu ambat.webp"
import img4 from "../../assets/mentors/karthik R.webp"
import img5 from "../../assets/mentors/manoj param.webp"
import img6 from "../../assets/mentors/ps vinothraj.webp"
import img7 from "../../assets/mentors/rm.webp"
import img8 from "../../assets/mentors/prasanna.webp"
import img9 from "../../assets/mentors/chandramohan.webp"
import img10 from "../../assets/mentors/diamond babu.webp"
import img11 from "../../assets/mentors/mahesh muthusw.webp"
import img12 from "../../assets/mentors/cabel shankar.webp"
import img13 from "../../assets/mentors/sudhan.webp"
import img14 from "../../assets/mentors/b3.webp"
import img15 from "../../assets/mentors/shiv shankar.webp"
import img16 from "../../assets/mentors/mn.webp"
import img17 from "../../assets/mentors/kaamesh.webp"
import img18 from "../../assets/mentors/ja deepa.webp"
import img19 from "../../assets/mentors/sai vij.webp"
import img20 from "../../assets/mentors/st.webp"
import img21 from "../../assets/mentors/sri.webp"
import img22 from "../../assets/mentors/arvinth.webp"
import img23 from "../../assets/mentors/js-di.webp"
import { Link } from "react-router"

const mentorsColumnA = [
    { name: "CJ Rajkumar", role: "Vice President", img: img1, bio: "Author of 15 books on cinematography and film technology. His feature and short films have won multiple international awards including Berlin." },
    { name: "Nasser", role: "Mentor | Acting", img: img2, bio: "Legendary actor, director and producer who has redefined performance across Indian cinema with an extraordinary body of work." },
    { name: "Madhu Ambat", role: "Mentor | Cinematography", img: img3, bio: "Veteran cinematographer with over 50 glorious years in cinema. Multiple National Award winner and one of India's most respected DOPs." },
    { name: "A Karthik Raaja", role: "Mentor | Cinematography", img: img4, bio: "Veteran cinematographer and President of SICA. Served as Jury member for National Awards and Indian Panorama." },
    { name: "Manoj Paramahamsa", role: "Mentor | Cinematography & VP", img: img5, bio: "Ace cinematographer who redefined Indian cinematography with technical innovations. Leading expert in Virtual Production workflows." },
    { name: "P.S. Vinoth Raj", role: "Mentor | Direction", img: img6, bio: "International award-winning filmmaker, winner of the prestigious Tiger Award at Rotterdam International Film Festival." },
    { name: "Raja Mohammed", role: "Director | Editing", img: img7, bio: "National Award-winning editor including Paruthiveeran. Has edited over 200 films across Tamil, Malayalam and Telugu industries." },
    { name: "R Prasanna Venkatesh", role: "Director | Photography", img: img8, bio: "Celebrity photographer and master trainer at MESC. Official photographer for top brands including Rolls- Royce and Kalakshetra." },
]

const mentorsColumnB = [
    { name: "S Chandra Mohan", role: "Director | Acting", img: img9, bio: "Award-winning actor and NSD-trained theatre expert. Has conducted acting training programs in over 500 schools and institutions." },
    { name: "Diamond Babu", role: "Director | Entertainment", img: img10, bio: "Diamond Babu is a legendary personality in the film and media Industry as Public relation officer. He has been honored with Kalaimaanani award from Government of Tamilnadu." },
    { name: "Mahesh Muthuswami", role: "Mentor | Cinematography", img: img11, bio: "Popular cinematographer known for Anjaathey, Kaatrin Mozhi, Genie. His short film was Oscar-nominated." },
    { name: "Cable Shankar", role: "Mentor | Direction", img: img12, bio: "Well-known writer, producer and director. Founder of OTT Plus and a prominent creative voice in contemporary cinema." },
    { name: "Sudhan PS", role: "Director | Direction", img: img13, bio: "Gold Medalist film graduate, casting director and screenplay expert. Also an accomplished documentary filmmaker." },
    { name: "Brindha Sarathy", role: "Mentor | Direction", img: img14, bio: "Renowned dialogue writer, director and literary personality known for strong content-driven cinema." },
    { name: "Shiv Shankar", role: "Mentor | VFX & VP", img: img15, bio: "Virtual Production expert and co-author of a book on Virtual Production. Specialist in ICVFX and real- time workflows." },
    { name: "Muniraj", role: "Mentor | VFX / Virtual Production", img: img16, bio: "Leading DIT for over 100 films. Expert in VFX pipelines, data management and Virtual Production workflows." },
]

const mentorsColumnC = [
    { name: "Kaamesh", role: "Mentor | Editing", img: img17, bio: "Experienced editing mentor and freelance editor for feature films and digital content platforms." },
    { name: "JA. Deepa", role: "Mentor | Direction", img: img18, bio: "Popular writer and program producer for leading television channels. Established screenwriter and creative consultant." },
    { name: "Sai Vijendhrn", role: "Mentor | Direction", img: img19, bio: "Sai Vijendhrn is a popular writer, mentor and specialized in script Doctoring, his books on screenplay writing are best sellers." },
    { name: "Santonio Terzio", role: "Mentor | Cinematography", img: img20, bio: "Santonio Terzio born in Portugal. He is a British Cinematographer who has worked in several international projects." },
    { name: "VP Shrinivas", role: "Director | Artificial Intelligence", img: img21, bio: "VP Shrinivas is a pioneering AI-in-filmmaking educator with 10+ workshops and 1000+ trained participants. Conducted AI sessions at IIT Madras Research Park." },
    { name: "Arvind Ramachandran", role: "Mentor | Virtual Production", img: img22, bio: "Virtual Production Mentor with 5+ years of experience in Unreal Engine, XR/VR integration, and real-time 3D workflows. Specialized in VFX, virtual production, 3D asset pipelines, and real-time rendering." },
    { name: "John Sriram", role: "Mentor | DI Colorist", img: img23, bio: "John Sriram is a leading colorist, DI editor worked for Thangalan and many feature films, documentaries and shortfilms." },
]

const checklist = [
    "Build practical skills with industry-focused courses",
    "Learn directly from experienced film and media professionals",
    "Get hands-on experience across creative and technical disciplines",
    "Develop your portfolio and prepare for real-world opportunities",
];

// ── Variants ────────────────────────────────────────────────────────────────

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay }
    })
}

const ACCENT = "#ffac26"
// ── Mentor card — base view + hover-reveal bio layer ────────────────────────

function MentorCard({ mentor }) {
    return (
        <div className="mentor-card card-border group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl bg-white/[0.04] p-5 text-center backdrop-blur-md">
            {/* Base layer — big centered photo, name, role. Always visible. */}
            <img
                src={mentor.img}
                alt={mentor.name}
                className="h-28 w-28 shrink-0 rounded-full object-cover ring-1 ring-white/15 transition-opacity duration-300 group-hover:opacity- sm:h-42 sm:w-42"
                loading="lazy"
                draggable={false}
            />
            <div className="min-w-0 transition-opacity duration-300 group-hover:opacity-">
                <h3 className="font-onest truncate text-sm font-semibold text-white">
                    {mentor.name}
                </h3>
                <p className="font-onest truncate text-xs text-white/60">
                    {mentor.role}

                    {/* at {mentor.company} */}
                </p>
            </div>

            {/* Hover layer — small avatar + name pinned top, 2-line bio centered below */}
            {/* <div className="pointer-events-none absolute inset-0 flex translate-y-2 flex-col items-center justify-center gap-2 bg-black/85 px-5 text-center opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <img
                    src={mentor.img}
                    alt=""
                    className="h-9 w-9 shrink-0 rounded-full object-cover ring-1 ring-white/20"
                    draggable={false}
                />
                <span className="font-onest truncate text-xs font-semibold text-white">
                    {mentor.name}
                </span>
                <p className="font-onest  text-[11px] leading-snug text-white/75">
                    {mentor.bio}
                </p>
            </div> */}
        </div>
    )
}

function MarqueeColumn({ mentors, reverse = false, pxPerSecond = 40 }) {
    const swiperRef = useRef(null)
    const positionRef = useRef(0)
    const halfHeightRef = useRef(0)
    const hoveringRef = useRef(false)
    const draggingRef = useRef(false)
    const rafRef = useRef(null)

    const loopedMentors = [...mentors, ...mentors]

    useEffect(() => {
        const swiper = swiperRef.current
        if (!swiper) return

        const wrapperEl = swiper.wrapperEl

        const measure = () => {
            // One full copy of the list = half of the total (duplicated) scroll height
            halfHeightRef.current = wrapperEl.scrollHeight / 2
        }
        measure()

        const resizeObserver = new ResizeObserver(measure)
        resizeObserver.observe(wrapperEl)

        let lastTime = null

        const tick = (time) => {
            if (lastTime === null) lastTime = time
            const deltaSeconds = (time - lastTime) / 1000
            lastTime = time

            const half = halfHeightRef.current
            const paused = hoveringRef.current || draggingRef.current

            if (!paused && half > 0) {
                const delta = pxPerSecond * deltaSeconds * (reverse ? -1 : 1)
                let next = positionRef.current + delta

                if (next >= half) next -= half
                if (next < 0) next += half

                positionRef.current = next
                swiper.setTranslate(-next)
            }

            rafRef.current = requestAnimationFrame(tick)
        }

        rafRef.current = requestAnimationFrame(tick)

        return () => {
            cancelAnimationFrame(rafRef.current)
            resizeObserver.disconnect()
        }
    }, [reverse, pxPerSecond, mentors])

    // Sync our tracked position with Swiper's real translate after a drag,
    // so autoplay picks up exactly where the user let go.
    const syncPositionFromSwiper = () => {
        const swiper = swiperRef.current
        const half = halfHeightRef.current
        if (!swiper || half <= 0) return
        let pos = -swiper.translate
        pos = ((pos % half) + half) % half
        positionRef.current = pos
    }

    const handleMouseEnter = () => { hoveringRef.current = true }
    const handleMouseLeave = () => { hoveringRef.current = false }

    const handleTouchStart = () => { draggingRef.current = true }
    const handleTouchEnd = () => {
        syncPositionFromSwiper()
        draggingRef.current = false
    }

    return (
        <div
            className="relative h-full overflow-hidden"
            style={{
                maskImage: "linear-gradient(180deg, transparent, black 12%, black 88%, transparent)",
                WebkitMaskImage: "linear-gradient(180deg, transparent, black 12%, black 88%, transparent)",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Swiper
                onSwiper={(s) => (swiperRef.current = s)}
                modules={[FreeMode]}
                direction="vertical"
                slidesPerView="auto"
                spaceBetween={16}
                speed={0}
                allowTouchMove
                simulateTouch
                grabCursor
                freeMode={{ enabled: true, momentum: false, sticky: false }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTransitionEnd={syncPositionFromSwiper}
                className="h-full w-full"
            >
                {loopedMentors.map((m, i) => (
                    <SwiperSlide key={i} className="!h-auto">
                        <MentorCard mentor={m} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default function MentorHero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-black px-4 py-14 sm:py-20  md:py-24 max-w-6xl mx-auto">
            <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-[#ffac26]/15 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]" />

            <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:gap-8">

                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="order-1 w-full md:order-1 md:w-[40%] md:shrink-0"
                >
                    {/* Eyebrow */}
                    <motion.div
                        custom={0}
                        variants={fadeUp}
                        className="flex items-center gap-2 mb-3"
                    >
                        <span
                            className="font-onest text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase"
                            style={{ color: ACCENT }}
                        >
                            our Mentors
                        </span>
                    </motion.div>

                    <motion.h1
                        custom={0.1}
                        variants={fadeUp}
                        className="font-bebas text-3xl leading-[1.05] tracking-wide text-white sm:text-5xl"
                    >
                        Learn from the
                        <br />

                        Masters of Cinema

                    </motion.h1>

                    <motion.p
                        custom={0.25}
                        variants={fadeUp}
                        className="font-onest mt-5 text-sm text-sec sm:text-base leading-relaxed"
                    >
                        Meet the industry professionals who shape the next generation of filmmakers.
                        From award-winning cinematographers and directors to acclaimed actors,
                        photographers, and AI innovators, our mentors bring decades of real-world
                        experience directly into every learning journey.
                    </motion.p>

                    {/* Desktop button */}
                    <div className="hidden md:block">
                        <Link to="/mentor" className="inline-block ">
                            <motion.button
                                custom={0.4}
                                variants={fadeUp}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                className="font-onest mt-7 text-grayy inline-flex cursor-pointer items-center gap-2 rounded-3xl border border-white/20 px-6 py-3 text-sm text-white transition-colors duration-300  hover:bg-[#ffac26]"
                            >
                                Meet Our Mentors
                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>

                {/* MENTOR IMAGES */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.3,
                    }}
                    className="order-2 grid h-[420px] w-full grid-cols-2 gap-3 overflow-hidden sm:h-[560px] sm:grid-cols-3 sm:gap-4 md:order-2 md:h-[520px] md:w-[60%]"
                >
                    <MarqueeColumn
                        mentors={mentorsColumnA}
                        pxPerSecond={40}
                    />

                    <MarqueeColumn
                        mentors={mentorsColumnB}
                        reverse
                        pxPerSecond={55}
                    />

                    <div className="hidden sm:contents">
                        <MarqueeColumn
                            mentors={mentorsColumnC}
                            pxPerSecond={30}
                        />
                    </div>
                </motion.div>

                {/* MOBILE BROWSE BUTTON */}
                <div className="order-3 flex justify-center md:hidden">
                    <Link to="/mentor" className="inline-block">
                        <motion.button
                            custom={0.4}
                            variants={fadeUp}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="text-grayy font-onest inline-flex cursor-pointer items-center gap-2 rounded-3xl px-6 py-3 text-sm"
                        >
                            Browse Mentors
                            <ArrowRight size={16} />
                        </motion.button>
                    </Link>
                </div>

            </div>
        </section>
    )
}
