import { useState } from "react";
import {
    Plus,
    Clapperboard,
    Camera,
    Scissors,
    Users,
    Aperture,
    Sparkles,
    Video,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ACCENT = "#ffac26";

const COURSES = [
    { name: "Film Direction & Screenplay", icon: Clapperboard },
    { name: "Cinematography", icon: Camera },
    { name: "Film Editing & DI", icon: Scissors },
    { name: "Acting", icon: Users },
    { name: "Virtual Production", icon: Video },
    { name: "Photography", icon: Aperture },
    { name: "Advanced Virtual Production", icon: Sparkles },
    // { name: "Digital Intermediate (DI) & Color Grading", icon: SlidersHorizontal },
];

const WHY_CHENNAI = [
    "Active film production environments",
    "Professional studios",
    "Experienced cinema professionals",
    "Networking opportunities",
    "Creative filmmaking community",
    "Industry workshops and events",
];

const PRACTICAL_LEARNING = [
    "Live production projects",
    "Camera handling",
    "Lighting techniques",
    "Editing practice",
    "Script development",
    "Acting workshops",
    "Portfolio building",
    "Industry interaction",
];

const STATES = [
    // Tamil Nadu
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Tiruchirappalli",
    "Salem",
    "Tirunelveli",
    "Erode",
    "Vellore",

    // Kerala
    "Kochi",
    "Thiruvananthapuram",
    "Kozhikode",
    "Thrissur",
    "Kannur",
    "Kollam",
    "Alappuzha",
    "Palakkad",

    // Karnataka
    "Bengaluru",
    "Mysuru",
    "Mangaluru",
    "Hubballi",
    "Belagavi",
    "Shivamogga",
    "Davanagere",
    "Ballari",
];

const INDUSTRY_TRACKS = [
    "Feature Films",
    "OTT Productions",
    "Television",
    "Advertising",
    "Documentary Filmmaking",
    "Music Videos",
    "Digital Content Creation",
    "Photography",
    "Virtual Production Studios",
    "Post Production",
    "Acting for camera"
];

const FAQS = [
    {
        q: "Where is Cinema Factory Academy located?",
        a: "Cinema Factory Academy is located in Chennai, Tamil Nadu. All our filmmaking, acting, cinematography, editing, photography, VFX, DI, and Virtual Production courses are conducted at our Chennai campus.",
    },
    {
        q: "Can students from other states join Cinema Factory Academy?",
        a: "Yes. We welcome students from all over India, including Karnataka, Kerala, Telangana, Andhra Pradesh, Maharashtra, Delhi, Gujarat, West Bengal, Odisha, and many other states. Students relocate to Chennai to attend our classroom-based programs.",
    },
    {
        q: "Does Cinema Factory Academy offer online classes?",
        a: "No. We currently offer only offline, classroom-based training at our Chennai campus. Our courses focus on practical, hands-on learning using professional filmmaking equipment and studio environments.",
    },
    {
        q: "What courses are available at Cinema Factory Academy?",
        a: "We offer professional training in Film Direction, Cinematography, Film Editing, Acting, Photography, Visual Effects (VFX), DI (Digital Intermediate & Color Grading), and Virtual Production.",
    },
    {
        q: "Why should I study filmmaking in Chennai?",
        a: "Chennai is one of India's leading film production hubs, making it an excellent place to study filmmaking. Learning in an active cinema environment provides opportunities for hands-on training, practical experience, and valuable connections with industry professionals. Institutes like Cinema Factory Academy further support this with industry-focused training and real-world exposure.",
    },
    {
        q: "Who can apply for the courses?",
        a: "Anyone passionate about building a career in filmmaking, acting, cinematography, editing, photography, or VFX can apply. Eligibility may vary depending on the course, and our admissions team can provide detailed guidance.",
    },
    {
        q: "Are the courses practical or theory-based?",
        a: "Our programs emphasize practical, hands-on training. Students work with industry-standard cameras, lighting equipment, editing software, and production workflows while also learning the theoretical foundations of filmmaking.",
    },
];

function Eyebrow({ children }) {
    return (
        <span
            className="font-onest text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: ACCENT }}
        >
            {children}
        </span>
    );
}

function SectionHeading({ eyebrow, title, description }) {
    return (
        <div className="mb-10 flex flex-col items-start gap-3 sm:mb-14">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="font-bebas text-3xl tracking-wide text-white sm:text-4xl md:text-5xl">
                {title}
            </h2>
            {description && (
                <p className="max-w-xl font-onest text-sm leading-relaxed text-[#8b8b8b]">
                    {description}
                </p>
            )}
        </div>
    );
}

function CheckRow({ label }) {
    return (
        <li className="flex items-center gap-3 border-b border-white/10 py-3 text-white/80 transition-colors duration-300 hover:text-white">
            <span
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: ACCENT }}
            />
            <span className="font-onest text-[15px]">{label}</span>
        </li>
    );
}

function Hero() {
    return (
        <header className="relative overflow-hidden border-b border-white/10 bg-[#050505]">
            {/* ambient glow */}
            <div
                className="pointer-events-none absolute -top-24 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-15 blur-3xl"
                style={{ backgroundColor: ACCENT }}
            />

            <div className="relative mx-auto max-w-5xl px-6 py-14 sm:py-28">
                <Eyebrow>Chennai · Film Institute</Eyebrow>
                <h1 className="mt-4 max-w-3xl font-bebas text-4xl leading-[1.05] tracking-wide text-white sm:text-6xl md:text-7xl">
                    Film Institute in Chennai for Students from Across India
                </h1>
                <p className="mt-6 max-w-2xl font-onest text-base leading-relaxed text-[#8b8b8b] sm:text-lg">
                    Learn filmmaking at Cinema Factory Academy, Chennai — industry-focused,
                    classroom-based training for aspiring filmmakers, actors,
                    cinematographers, editors, photographers, and VFX artists from every
                    corner of India.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                    <Link to={'/apply-now'}>
                        <button
                            className="rounded-full px-7 py-3 font-onest text-sm font-semibold text-[#050505] shadow-lg shadow-[#ffac26]/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#ffac26]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffac26] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                            style={{ backgroundColor: ACCENT }}
                        >
                            Apply Now
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

function Intro() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-10 sm:py-16">
            <SectionHeading
                eyebrow="Reel 01 — About"
                title="Why Students Across India Choose Cinema Factory Academy"
            />
            <p className="max-w-2xl font-onest text-[15px] leading-relaxed text-[#8b8b8b]">
                Cinema Factory Academy has built its reputation by combining practical
                learning with professional industry exposure. Our curriculum is designed
                to help students gain technical expertise while developing creative
                storytelling skills. We proudly welcome aspiring filmmakers from Chennai,
                Coimbatore, Madurai, Tiruchirappalli, Salem, Tirunelveli, Erode, Vellore
                (Tamil Nadu), Kochi, Thiruvananthapuram, Kozhikode, Thrissur, Kollam,
                Kannur (Kerala), and Bengaluru, Mysuru, Mangaluru, Hubballi, Belagavi,
                Davanagere, Shivamogga (Karnataka).
            </p>
        </section>
    );
}

function Courses() {
    return (
        <section className="border-t border-white/10 bg-[#050505]">
            <div className="mx-auto max-w-5xl px-6 py-10 sm:py-16">
                <SectionHeading
                    eyebrow="Reel 02 — Programs"
                    title="Our Professional Courses"
                    description="Every program emphasizes practical learning using industry-standard equipment, software, and production workflows."
                />
                <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                    {COURSES.map(({ name, icon: Icon }) => (
                        <div
                            key={name}
                            className="group flex flex-col justify-between gap-6 bg-[#0a0a0a] p-6 text-white transition-colors duration-300 hover:bg-[#ffac26] hover:text-[#050505]"
                        >
                            <Icon
                                size={22}
                                strokeWidth={1.5}
                                className="text-[#ffac26] transition-colors duration-300 group-hover:text-[#050505]"
                            />
                            <span className="font-onest text-sm font-medium leading-snug">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function WhyChennaiAndPractical() {
    return (
        <section className="border-t border-white/10">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 px-6 py-10 sm:py-16 lg:grid-cols-2">
                <div>
                    <SectionHeading
                        eyebrow="Reel 03 — Location"
                        title="Why Study Film in Chennai?"
                        description="Chennai has long been recognized as one of India's most influential filmmaking destinations."
                    />
                    <ul>
                        {WHY_CHENNAI.map((item) => (
                            <CheckRow key={item} label={item} />
                        ))}
                    </ul>
                </div>

                <div>
                    <SectionHeading
                        eyebrow="Reel 04 — Training"
                        title="Hands-On Practical Learning"
                        description="At Cinema Factory Academy, learning goes beyond theory."
                    />
                    <ul>
                        {PRACTICAL_LEARNING.map((item) => (
                            <CheckRow key={item} label={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

function StatesWelcome() {
    return (
        <section className="relative overflow-hidden border-t border-white/10 bg-white/[0.02] text-white">
            <div
                className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full opacity-15 blur-3xl"
                style={{ backgroundColor: ACCENT }}
            />

            <div className="relative mx-auto max-w-5xl px-6 py-10 sm:py-16">
                <Eyebrow>Reel 05 — Admissions</Eyebrow>
                <h2 className="mt-3 font-bebas text-3xl tracking-wide sm:text-4xl md:text-5xl">
                    Students from Across India Are Welcome
                </h2>
                <p className="mt-3 max-w-xl font-onest text-sm leading-relaxed text-[#8b8b8b]">
                    If you&apos;re relocating to Chennai for your studies, our
                    admissions team can guide you with accommodation, transportation,
                    and the admission process.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                    {STATES.map((state) => (
                        <span
                            key={state}
                            className="rounded-full border border-white/15 px-4 py-2 font-onest text-xs text-white/80 transition-colors duration-300 hover:border-[#ffac26] hover:text-[#ffac26]"
                        >
                            {state}
                        </span>
                    ))}
                    <span className="rounded-full border border-dashed border-white/20 px-4 py-2 font-onest text-xs text-[#8b8b8b]">
                        And many more
                    </span>
                </div>
            </div>
        </section>
    );
}

function IndustryTracks() {
    return (
        <section className="border-t border-white/10">
            <div className="mx-auto max-w-5xl px-6 py-10 sm:py-16">
                <SectionHeading
                    eyebrow="Reel 06 — Outcomes"
                    title="Industry-Oriented Learning Environment"
                    description="Students learn using modern filmmaking tools while developing professional workflows."
                />
                <div className="flex flex-wrap gap-3">
                    {INDUSTRY_TRACKS.map((track) => (
                        <span
                            key={track}
                            className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 font-onest text-xs text-white/80 transition-colors duration-300 hover:border-[#ffac26] hover:text-[#ffac26]"
                        >
                            {track}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ index, q, a, isOpen, onToggle }) {
    return (
        <div className="border-b border-white/10">
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                className="group flex w-full items-start gap-5 rounded-sm py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffac26]"
            >
                <span
                    className={`mt-1 shrink-0 font-onest text-xs font-semibold tracking-widest transition-colors ${isOpen ? "text-[#ffac26]" : "text-white/30"
                        }`}
                >
                    {String(index + 1).padStart(2, "0")}
                </span>

                <span
                    className={`flex-1 font-onest text-base font-medium leading-snug transition-colors sm:text-lg ${isOpen ? "text-white" : "text-white/70 group-hover:text-white"
                        }`}
                >
                    {q}
                </span>

                <span
                    className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
                        ? "rotate-45 border-[#ffac26] bg-[#ffac26] text-[#050505]"
                        : "border-white/25 text-white/60 group-hover:border-[#ffac26] group-hover:text-[#ffac26]"
                        }`}
                >
                    <Plus size={14} strokeWidth={2.5} />
                </span>
            </button>

            <div
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
                <div className="overflow-hidden">
                    <p className="pb-6 pl-[2.75rem] pr-10 font-onest text-[15px] leading-relaxed text-[#8b8b8b]">
                        {a}
                    </p>
                </div>
            </div>
        </div>
    );
}

function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="border-t border-white/10 bg-[#050505]">
            <div className="mx-auto max-w-5xl px-6 py-10 sm:py-16">
                <SectionHeading
                    eyebrow="Reel 07 — Q&A"
                    title="Frequently Asked Questions"
                    description="Everything you need to know before joining Cinema Factory Academy's Chennai campus."
                />
                <div className="border-t border-white/10">
                    {FAQS.map((item, i) => (
                        <FAQItem
                            key={item.q}
                            index={i}
                            q={item.q}
                            a={item.a}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ClosingCTA() {
    return (
        <section className="relative overflow-hidden border-t border-white/10 bg-[#050505]">
            <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
                style={{ backgroundColor: ACCENT }}
            />

            <div className="relative mx-auto max-w-5xl px-6 py-10 text-center sm:py-16">
                <Eyebrow>Start Your Cinema Career</Eyebrow>
                <h2 className="mx-auto mt-4 max-w-2xl font-bebas text-3xl leading-tight tracking-wide text-white sm:text-3xl md:text-4xl">
                    Whether your dream is director, cinematographer, editor, actor,
                    photographer, or VFX artist — begin here.
                </h2>
                <p className="mx-auto mt-4 max-w-md font-onest text-sm leading-relaxed text-[#8b8b8b]">
                    Admissions are open for students from across India. Visit our
                    Chennai campus and begin your journey into professional
                    filmmaking.
                </p>
                <Link to={'/apply-now'}>
                    <button
                        className="mt-8 rounded-full px-8 py-3 font-onest text-sm font-semibold text-[#050505] shadow-lg shadow-[#ffac26]/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#ffac26]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffac26] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                        style={{ backgroundColor: ACCENT }}
                    >
                        Apply Now
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default function CinemaFactoryPage() {
    return (
        <main className="min-h-screen bg-[#050505] font-onest text-white">
            <Navbar/>
            <Hero />
            <Intro />
            <Courses />
            <WhyChennaiAndPractical />
            <StatesWelcome />
            <IndustryTracks />
            <FAQSection />
            <ClosingCTA />
            <Footer/>
        </main>
    );
}