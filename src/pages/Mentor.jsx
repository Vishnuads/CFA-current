import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clapperboard, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
import img17 from "../assets/mentors/kaamesh.webp"
import img18 from "../assets/mentors/ja deepa.webp"
import img19 from "../assets/mentors/sai vij.webp"
import img20 from "../assets/mentors/st.webp"
import img21 from "../assets/mentors/sri.webp"
import img22 from "../assets/mentors/arvinth.webp"
import img23 from "../assets/mentors/js-di.webp"

import advisory1 from "../assets/mentors/advisory-board/seetha.jpg"
import advisory2 from "../assets/mentors/advisory-board/rajen.jpg"
import advisory3 from "../assets/mentors/advisory-board/arul.jpg"
import advisory4 from "../assets/mentors/advisory-board/shiv babu.webp"
import advisory5 from "../assets/mentors/advisory-board/sivaram.jpg"
import advisory6 from "../assets/mentors/advisory-board/umapathy.jpg"
import Mentors from '@/components/Home/MentorsFilmography'

import CTA from "@/components/Home/CTA";

const ACCENT = "#FFAC26";

const steps = [
    {
        number: "01",
        key: "filmmakers",
        icon: Clapperboard,
        title: "Filmmakers as Mentors",
        description:
            "Working directors, cinematographers, and editors who mentor students between their own productions.",
        mentors: [
            { name: "CJ Rajkumar", role: "Vice President", img: img1, bio: "Author of 15 books on cinematography and film technology. His feature and short films have won multiple international awards including Berlin." },
            { name: "Nasser", role: "Mentor | Acting", img: img2, bio: "Legendary actor, director and producer who has redefined performance across Indian cinema with an extraordinary body of work." },
            { name: "Madhu Ambat", role: "Mentor | Cinematography", img: img3, bio: "Veteran cinematographer with over 50 glorious years in cinema. Multiple National Award winner and one of India's most respected DOPs." },
            { name: "A Karthik Raaja", role: "Mentor | Cinematography", img: img4, bio: "Veteran cinematographer and President of SICA. Served as Jury member for National Awards and Indian Panorama." },
            { name: "Manoj Paramahamsa", role: "Mentor | Cinematography & VP", img: img5, bio: "Ace cinematographer who redefined Indian cinematography with technical innovations. Leading expert in Virtual Production workflows." },
            { name: "P.S. Vinoth Raj", role: "Mentor | Direction", img: img6, bio: "International award-winning filmmaker, winner of the prestigious Tiger Award at Rotterdam International Film Festival." },
            { name: "Raja Mohammed", role: "Director | Editing", img: img7, bio: "National Award-winning editor including Paruthiveeran. Has edited over 200 films across Tamil, Malayalam and Telugu industries." },
            { name: "R Prasanna Venkatesh", role: "Director | Photography", img: img8, bio: "Celebrity photographer and master trainer at MESC. Official photographer for top brands including Rolls- Royce and Kalakshetra." },

            { name: "S Chandra Mohan", role: "Director | Acting", img: img9, bio: "Award-winning actor and NSD-trained theatre expert. Has conducted acting training programs in over 500 schools and institutions." },
            { name: "Diamond Babu", role: "Director | Entertainment", img: img10, bio: "Diamond Babu is a legendary personality in the film and media Industry as Public relation officer. He has been honored with Kalaimaanani award from Government of Tamilnadu." },
            { name: "Mahesh Muthuswami", role: "Mentor | Cinematography", img: img11, bio: "Popular cinematographer known for Anjaathey, Kaatrin Mozhi, Genie. His short film was Oscar-nominated." },
            { name: "Cable Shankar", role: "Mentor | Direction", img: img12, bio: "Well-known writer, producer and director. Founder of OTT Plus and a prominent creative voice in contemporary cinema." },
            { name: "Sudhan PS", role: "Director | Direction", img: img13, bio: "Gold Medalist film graduate, casting director and screenplay expert. Also an accomplished documentary filmmaker." },
            { name: "Brindha Sarathy", role: "Mentor | Direction", img: img14, bio: "Renowned dialogue writer, director and literary personality known for strong content-driven cinema." },
            { name: "Shiv Shankar", role: "Mentor | VFX & VP", img: img15, bio: "Virtual Production expert and co-author of a book on Virtual Production. Specialist in ICVFX and real- time workflows." },
            { name: "Muniraj", role: "Creative Technologist", img: img16, bio: "Leading DIT for over 100 films. Expert in VFX pipelines, data management and Virtual Production workflows." },

            { name: "Kaamesh", role: "Mentor | Editing", img: img17, bio: "Experienced editing mentor and freelance editor for feature films and digital content platforms." },
            { name: "JA. Deepa", role: "Mentor | Direction", img: img18, bio: "Popular writer and program producer for leading television channels. Established screenwriter and creative consultant." },
            { name: "Sai Vijendhrn", role: "Mentor | Direction", img: img19, bio: "Sai Vijendhrn is a popular writer, mentor and specialized in script Doctoring, his books on screenplay writing are best sellers." },
            { name: "Santonio Terzio", role: "Mentor | Cinematography", img: img20, bio: "Santonio Terzio born in Portugal. He is a British Cinematographer who has worked in several international projects." },
            { name: "VP Shrinivas", role: "Director | Artificial Intelligence", img: img21, bio: "VP Shrinivas is a pioneering AI-in-filmmaking educator with 10+ workshops and 1000+ trained participants. Conducted AI sessions at IIT Madras Research Park." },
            { name: "Arvind Ramachandran", role: "Mentor | Virtual Production", img: img22, bio: "Virtual Production Mentor with 5+ years of experience in Unreal Engine, XR/VR integration, and real-time 3D workflows. Specialized in VFX, virtual production, 3D asset pipelines, and real-time rendering." },
            { name: "John Sriram", role: "Mentor | DI Colorist", img: img23, bio: "John Sriram is a leading colorist, DI editor worked for Thangalan and many feature films, documentaries and shortfilms." },
        ],
    },
    {
        number: "02",
        key: "advisoryBoard",
        icon: ShieldCheck,
        title: "Advisory Board of Directors",
        description:
            "Industry veterans and business leaders who guide the school's curriculum and long-term direction.",
        mentors: [
            { name: "Seetharaman", role: "Director - Business Development ", img: advisory1, bio: "" },
            { name: "Rajendran", role: "Director - Communication", img: advisory2, bio: "" },
            { name: "Arularasan", role: "Director - Expansion", img: advisory3, bio: "" },
            { name: "Shivaraj Babu", role: "Director - Finance", img: advisory4, bio: "" },
            { name: "Sivaram", role: "Advisor - Overseas", img: advisory5, bio: "" },
            { name: "Umapathy", role: "Director - Human Resource", img: advisory6, bio: "" },
        ],
    },
]

function MentorCard({ mentor, showOverlay }) {
    // Local state to toggle the overlay on mobile taps
    const [isTapped, setIsTapped] = useState(false);

    const handleMobileTap = () => {
        setIsTapped(!isTapped);
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 25,
                scale: 0.97,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            viewport={{
                once: true,
                margin: "-40px",
            }}
            transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            // Added onClick handler for mobile touch screens
            onClick={handleMobileTap}
            // data-tapped attribute helps pass the mobile state cleanly to Tailwind
            data-tapped={isTapped}
            className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-[#111] ring-1 ring-white/10 cursor-pointer"
        >

            <img
                src={mentor.img}
                alt={mentor.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-data-[tapped=true]:scale-105"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-0 group-data-[tapped=true]:opacity-0" />

            {/* ================= DEFAULT NAME + ROLE ================= */}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5 transition-all duration-500 ease-out group-hover:translate-y-6 group-hover:opacity-0 group-data-[tapped=true]:translate-y-6 group-data-[tapped=true]:opacity-0">
                <h4 className="font-onest text-sm font-semibold leading-tight text-white sm:text-base">
                    {mentor.name}
                </h4>

                <p className="mt-1 font-onest text-[8px] font-medium uppercase tracking-wide text-[#ffac26] sm:text-xs">
                    {mentor.role}
                </p>
            </div>

            {showOverlay &&
               
                <div className="pointer-events-none absolute inset-0 z-20 flex translate-y-6 flex-col justify-end bg-gradient-to-t from-black via-black/70 to-black/10 p-4 opacity-0 transition-all duration-500 ease-out 
                    md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-hover:pointer-events-auto
                    group-data-[tapped=true]:translate-y-0 group-data-[tapped=true]:opacity-100 group-data-[tapped=true]:pointer-events-auto
                    sm:p-5"
                >
                    {/* Bio */}
                    <p className="mt-3 font-onest text-[11px] text-white/80 sm:text-xs sm:leading-5">
                        {mentor.bio}
                    </p>
                </div>
            }

        </motion.div>
    );
}

function MentorStep({ step, isLast, showOverlay }) {
    const Icon = step.icon;

    return (
        <div className=" relative flex gap-5 sm:gap-10 " >
            <div className={` min-w-0 flex-1 ${isLast ? "" : "pb-16 sm:pb-24"}`} >
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px"}}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-6 sm:mb-8"
                >

                    <div className="mb-3 flex items-center gap-2 sm:hidden">
                        <span className=" flex h-9 w-9 items-center  justify-center rounded-full  border-2 font-bebas text-sm "
                            style={{ borderColor: ACCENT, color: ACCENT }}
                        >
                            {step.number}
                        </span>
                    </div>

                    {/* Title */}
                    <div className="mb-2 flex items-center gap-2.5">
                        <Icon size={18}  style={{ color: ACCENT }} />

                        <h3 className=" font-bebas text-2xl tracking-wide text-white sm:text-3xl " >
                            {step.title}
                        </h3>
                    </div>

                    {/* Description */}
                    <p className="max-w-xl font-onest text-sm leading-6 text-white/60 sm:text-base" >
                        {step.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:gap-5 lg:grid-cols-5">
                    {step.mentors.map((mentor) => (
                        <MentorCard
                            key={`${step.key}-${mentor.name}`}
                            mentor={mentor}
                            showOverlay={showOverlay}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function MentorsSection() {
    return (
        <div className="bg-[#050505] text-white">

            <Navbar />

            <section className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 md:py-28">

                <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96  rounded-full bg-[#ffac26]/10  blur-[140px]" />

                <div className=" pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#ffac26]/10 blur-[140px] " />

                <div className="relative z-10 mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20, }}
                        whileInView={{ opacity: 1, y: 0, }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className=" mx-auto mb-14 max-w-2xl text-center sm:mb-20" >

                        <p className="mb-3 font-onest text-xs font-semibold uppercase tracking-[0.2em]"
                            style={{ color: ACCENT, }}
                        >
                            Learn From The Best
                        </p>

                        <h2 className="font-bebas text-4xl leading-tight tracking-wide text-white sm:text-5xl " >
                            The People Shaping Our Curriculum
                        </h2>

                        <p className="mt-4 font-onest text-sm leading-6 text-white/60 sm:text-base" >
                            Three circles of expertise, one journey — hover over a
                            mentor to learn more about their experience.
                        </p>
                    </motion.div>

                    <div className="relative">
                        {steps.map((step, index) => (
                            <MentorStep
                                key={step.key}
                                step={step}
                                isLast={index === steps.length - 1}
                                showOverlay = {index == 0}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Mentors/>
            <CTA />
            <Footer />
        </div>
    );
}