import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clapperboard, ShieldCheck } from "lucide-react";
import axios from "axios";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/Home/CTA";
import Mentors from "@/components/Home/MentorsFilmography";
import BASE_URL from "@/api";

const ACCENT = "#FFAC26";

const sectionInfo = [
    {
        number: "01",
        key: "filmmakers",
        icon: Clapperboard,
        title: "Filmmakers as Mentors",
        description:
            "Working directors, cinematographers, and editors who mentor students between their own productions.",
        type: "Mentor",
    },
    {
        number: "02",
        key: "advisoryBoard",
        icon: ShieldCheck,
        title: "Advisory Board of Directors",
        description:
            "Industry veterans and business leaders who guide the school's curriculum and long-term direction.",
        type: "Advisory Board",
    },
];

function MentorCard({ mentor, showOverlay }) {
    const [isTapped, setIsTapped] = useState(false);

    const handleMobileTap = () => {
        setIsTapped(!isTapped);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px", }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={handleMobileTap}
            data-tapped={isTapped}
            className="group relative aspect-3/4 cursor-pointer overflow-hidden rounded-xl bg-[#111] ring-1 ring-white/10"
        >
            <img
                src={`http://localhost:3000/${mentor.image.replace(/\\/g, "/")}`}
                alt={mentor.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-data-[tapped=true]:scale-105"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-0 group-data-[tapped=true]:opacity-0" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-4 transition-all duration-500 ease-out group-hover:translate-y-6 group-hover:opacity-0 group-data-[tapped=true]:translate-y-6 group-data-[tapped=true]:opacity-0 sm:p-5">
                <h4 className="font-onest text-sm font-semibold leading-tight text-white sm:text-base">
                    {mentor.name}
                </h4>

                <p className="mt-1 font-onest text-[8px] font-medium uppercase tracking-wide text-[#ffac26] sm:text-xs">
                    {mentor.role}
                </p>
            </div>

            {showOverlay && (
                <div className=" pointer-events-none absolute inset-0 z-20 flex translate-y-6 flex-col justify-end bg-linear-to-t from-black via-black/70 to-black/10 p-4 opacity-0 transition-all duration-500 ease-out md:group-hover:translate-y-0 md:group-hover:pointer-events-auto md:group-hover:opacity-100 group-data-[tapped=true]:translate-y-0 group-data-[tapped=true]:pointer-events-auto group-data-[tapped=true]:opacity-100 sm:p-5"
                >
                    <p className="mt-3 font-onest text-[11px] text-white/80 sm:text-xs sm:leading-5">
                        {mentor.desc}
                    </p>
                </div>
            )}
        </motion.div>
    );
}

function MentorStep({ step, mentors, isLast, showOverlay }) {
    const Icon = step.icon;
    return (
        <div className="relative flex gap-5 sm:gap-10">
            <div
                className={`min-w-0 flex-1 ${isLast ? "" : "pb-16 sm:pb-24"
                    }`}
            >
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-6 sm:mb-8"
                >
                    <div className="mb-3 flex items-center gap-2 sm:hidden">
                        <span
                            className="flex h-9 w-9 items-center justify-center rounded-full border-2 font-bebas text-sm"
                            style={{
                                borderColor: ACCENT,
                                color: ACCENT,
                            }}
                        >
                            {step.number}
                        </span>
                    </div>

                    <div className="mb-2 flex items-center gap-2.5">
                        <Icon size={18} style={{ color: ACCENT }} />

                        <h3 className="font-bebas text-2xl tracking-wide text-white sm:text-3xl">
                            {step.title}
                        </h3>
                    </div>

                    <p className="max-w-xl font-onest text-sm leading-6 text-white/60 sm:text-base">
                        {step.description}
                    </p>
                </motion.div>

                {mentors.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:gap-5 lg:grid-cols-5">
                        {mentors.map((mentor) => (
                            <MentorCard
                                key={mentor._id}
                                mentor={mentor}
                                showOverlay={showOverlay}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function MentorsSection() {
    const [mentors, setMentors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMentors = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/mentors/get`);
                setMentors(res.data.data || []);
            } catch (error) {
                console.error("Failed to fetch mentors:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMentors();
    }, []);

    const mentorList = mentors
    .filter((person) => person.type === "Mentor")
    .filter((mentor, index, array) =>
            index ===
            array.findIndex(
                (item) =>
                    item.name.trim().toLowerCase() ===
                    mentor.name.trim().toLowerCase()
            )
    );

    const advisoryBoardList = mentors.filter(
        (person) => person.type === "Advisory Board"
    );

    return (
        <div className="bg-[#050505] text-white">
            <Navbar />

            <section className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 md:py-28">
                <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#ffac26]/10 blur-[140px]" />

                <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#ffac26]/10 blur-[140px]" />

                <div className="relative z-10 mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mx-auto mb-14 max-w-2xl text-center sm:mb-20"
                    >
                        <p
                            className="mb-3 font-onest text-xs font-semibold uppercase tracking-[0.2em]"
                            style={{ color: ACCENT }}
                        >
                            Learn From The Best
                        </p>

                        <h2 className="font-bebas text-4xl leading-tight tracking-wide text-white sm:text-5xl">
                            The People Shaping Our Curriculum
                        </h2>

                        <p className="mt-4 font-onest text-sm leading-6 text-white/60 sm:text-base">
                            Three circles of expertise, one journey — hover over a
                            mentor to learn more about their experience.
                        </p>
                    </motion.div>

                    {loading ? (
                        <div className="py-20 text-center text-white/50">
                            Loading mentors...
                        </div>
                    ) : (
                        <div className="relative">
                            {sectionInfo.map((step, index) => {
                                const people =
                                    step.type === "Mentor"
                                        ? mentorList
                                        : advisoryBoardList;

                                // Don't render empty sections
                                if (people.length === 0) {
                                    return null;
                                }

                                return (
                                    <MentorStep
                                        key={step.key}
                                        step={step}
                                        mentors={people}
                                        isLast={index === sectionInfo.length - 1}
                                        showOverlay={step.type === "Mentor"}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>
            <Mentors />
            <CTA />
            <Footer />
        </div>
    );
}