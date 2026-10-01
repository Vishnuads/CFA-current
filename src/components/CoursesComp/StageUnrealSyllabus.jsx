import React from "react";
import { ExternalLink, ArrowRight, Cpu, Sparkles } from "lucide-react";

const StageUnrealSyllabus = ({ course }) => {
  if (!course?.syllabus?.length) return null;

  const syllabus = course.syllabus[0];

  // Group the flat modules into the original 9 modules
  const moduleGroups = [
    {
      number: "01",
      title: "Unreal Fundamentals",
      topics: [
        "Unreal Fundamentals",
        "Asset Import Pipeline",
        "Sequencer Fundamentals",
      ],
    },
    {
      number: "02",
      title: "Materials & Lighting",
      topics: [
        "Materials Fundamentals",
        "Lighting Fundamentals",
        "Level Design",
      ],
    },
    {
      number: "03",
      title: "Previsualisation",
      topics: ["Previsualisation"],
    },
    {
      number: "04",
      title: "Technical Visualisation",
      topics: ["Technical-Visualisation"],
    },
    {
      number: "05",
      title: "Post Visualization",
      topics: ["Post-Visualization"],
    },
    {
      number: "06",
      title: "Performance Capture",
      topics: ["Performance Capture"],
    },
    {
      number: "07",
      title: "Metahumans",
      topics: ["Metahumans"],
    },
    {
      number: "08",
      title: "Real-Time Systems",
      topics: [
        "Blueprint Fundamentals",
        "Animations Fundamentals",
        "Niagara Fundamentals",
      ],
    },
    {
      number: "09",
      title: "Advanced Production",
      topics: [
        "Control Rig Fundamentals",
        "Hair and Fur Fundamentals",
        "Rendering and Post-Processing",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-24">

      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#ffac26]/[0.035] blur-[140px]" />

      <div className="pointer-events-none absolute -left-40 top-[35%] h-[350px] w-[350px] rounded-full bg-[#ffac26]/[0.025] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#ffac26]/[0.025] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-4 flex items-center justify-center gap-2">
            <Cpu
              size={15}
              className="text-[#ffac26]"
            />

            <span className="font-onest text-xs font-bold uppercase tracking-[0.2em] text-[#ffac26]">
              Stage Unreal
            </span>
          </div>

          <h2 className="font-bebas text-4xl leading-none text-white sm:text-5xl md:text-6xl">
            VIRTUAL{" "}
            <span className="text-[#ffac26]">
              PRODUCTION
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-onest text-sm leading-7 text-white/45 sm:text-base">
            A one-year certification program combining practical and
            theoretical training in Unreal Engine, real-time filmmaking,
            virtual environments and modern virtual production workflows.
          </p>

        </div>

        {/* ================= COURSE INFO ================= */}

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">

          <div className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5">
            <span className="font-onest text-xs text-white/50">
              Duration
            </span>

            <span className="ml-2 font-onest text-xs font-semibold text-white">
              {syllabus.duration}
            </span>
          </div>

          <div className="rounded-full border border-[#ffac26]/20 bg-[#ffac26]/[0.04] px-5 py-2.5">
            <span className="font-onest text-xs text-white/50">
              Internship
            </span>

            <span className="ml-2 font-onest text-xs font-semibold text-[#ffac26]">
              6 Months Stage Unreal
            </span>
          </div>

        </div>

        {/* ================= SYLLABUS LABEL ================= */}

        <div className="mt-16 flex items-center gap-4 sm:mt-20">

          <span className="font-onest text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            Course Structure
          </span>

          <div className="h-px flex-1 bg-white/10" />

          <span className="font-onest text-xs text-white/25">
            09 Modules
          </span>

        </div>

        {/* ================= MODULE GRID ================= */}

        <div className="relative mt-8">

          {/* Connecting vertical line */}

          <div className="pointer-events-none absolute left-[22px] top-6 hidden h-[calc(100%-48px)] w-px bg-gradient-to-b from-[#ffac26]/60 via-white/10 to-transparent md:block" />

          <div className="grid gap-5 md:grid-cols-2">

            {moduleGroups.map((module, index) => (

              <div
                key={module.number}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-5
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#ffac26]/30
                  hover:bg-[#ffac26]/[0.035]
                  sm:p-6
                  ${
                    index === 8
                      ? "md:col-span-2"
                      : ""
                  }
                `}
              >

                {/* Glow */}

                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#ffac26]/[0.06] blur-3xl transition-all duration-500 group-hover:bg-[#ffac26]/[0.12]" />

                {/* Module Number */}

                <div className="relative flex items-start gap-4">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#ffac26]/30
                      bg-black
                      font-bebas
                      text-lg
                      text-[#ffac26]
                      transition-all
                      duration-500
                      group-hover:border-[#ffac26]
                      group-hover:bg-[#ffac26]
                      group-hover:text-black
                    "
                  >
                    {module.number}
                  </div>

                  <div className="min-w-0 flex-1">

                    <div className="flex flex-wrap items-center gap-2">

                      <span className="font-onest text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                        Module
                      </span>

                      <span className="h-1 w-1 rounded-full bg-[#ffac26]" />

                      <span className="font-onest text-[9px] uppercase tracking-[0.15em] text-[#ffac26]">
                        Stage Unreal
                      </span>

                    </div>

                    <h3 className="mt-1 font-bebas text-2xl text-white sm:text-3xl">
                      {module.title}
                    </h3>

                  </div>

                </div>

                {/* Topics */}

                <div className="relative mt-5 grid gap-2 sm:grid-cols-2">

                  {module.topics.map((topic, topicIndex) => (

                    <div
                      key={topicIndex}
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-lg
                        border
                        border-white/[0.07]
                        bg-black/30
                        px-3
                        py-2.5
                        transition-colors
                        duration-300
                        group-hover:border-white/10
                      "
                    >

                      <ArrowRight
                        size={12}
                        className="shrink-0 text-[#ffac26]"
                      />

                      <span className="font-onest text-xs leading-5 text-white/55">
                        {topic}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* ================= INTERNSHIP FEATURE ================= */}

        <div className="relative mt-10 overflow-hidden rounded-2xl border border-[#ffac26]/20 bg-gradient-to-r from-[#ffac26]/[0.08] via-white/[0.02] to-transparent p-6 sm:p-8">

          <div className="absolute right-0 top-0 h-full w-1/3 bg-[#ffac26]/[0.025] blur-3xl" />

          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ffac26]/30 bg-[#ffac26]/10">
                <Sparkles
                  size={18}
                  className="text-[#ffac26]"
                />
              </div>

              <div>

                <p className="font-onest text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffac26]">
                  Industry Experience
                </p>

                <h3 className="mt-1 font-bebas text-2xl text-white sm:text-3xl">
                  6-MONTH STAGE UNREAL INTERNSHIP
                </h3>

                <p className="mt-1 max-w-2xl font-onest text-xs leading-6 text-white/40 sm:text-sm">
                  Gain real-world experience through practical virtual
                  production workflows and industry-focused training.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <div className="mt-10 text-center">

          <p className="mx-auto max-w-2xl font-onest text-xs leading-6 text-white/35 sm:text-sm">
            Explore the complete Stage Unreal syllabus and discover
            everything included in the Virtual Production certification.
          </p>

          {syllabus.exploreLink && (
            <div className="mt-5">

              <a
                href={syllabus.exploreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded
                  border
                  border-[#ffac26]
                  bg-[#ffac26]
                  px-6
                  py-3
                  font-onest
                  text-sm
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-white
                "
              >
                <ExternalLink size={16} />
                View Detailed Syllabus
              </a>

            </div>
          )}

        </div>

      </div>

    </section>
  );
};

export default StageUnrealSyllabus;