import React from "react";

// ============================================================
// MENTOR IMAGES
// ============================================================

import img1 from "../../assets/mentors/ps vinothraj.webp";
import img2 from "../../assets/mentors/sudhan.webp";
import img3 from "../../assets/mentors/cabel shankar.webp";


// ============================================================
// DIRECTION COURSE MENTORS
// ============================================================

const MENTORS = [
  {
    name: "PS Vinoth Raj",
    role: "Director",
    image: img1,
    details:
      "P.S. Vinothraj's debut film Pebbles (Koozhangal) has won numerous prestigious awards, including the Tiger Award at the International Film Festival Rotterdam and the Best Director Award at the Singapore International Film Festival, showcasing his extraordinary talent and global impact as a filmmaker.",
  },
  {
    name: "Sudhan PS",
    role: " Director",
    image: img2,
    details:
      "Sudhan Padmanathan is a filmmaker, educator, and media professional with extensive experience at Ramoji Film City Group under the mentorship of Hon'ble Ramoji Rao. A gold medalist from MGR Film Institute (Adayar), he has excelled in talent management and facilitation across South Indian cinema, assisted international filmmakers, directed diverse projects, and continues to mentor aspiring talent with global insights.",
  },
    {
    name: "Cable Shankar",
    role: "Director, writter",
    image: img3,
    details:
      "Cable Shankar is a noted writer and filmmaker whose books uniquely explore the business of cinema. He has directed short films, a feature film, and an anthology, and is also recognized as a business head and OTT expert.",
  },
];

// ============================================================
// COMPONENT
// ============================================================

export default function CourseMentors() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-16 sm:py-20 lg:py-17">

      {/* ======================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-10 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-[#ffac26]/[0.045] blur-[120px]" />

      {/* ======================================================
          SECTION HEADER
      ====================================================== */}

      <div className="relative mx-auto mb-10 max-w-7xl px-5 text-center sm:mb-14 sm:px-8 lg:mb-16 lg:px-10">

        <div className="mx-auto max-w-4xl">

          {/* Label */}
          <p className="uppercase text-gray font-onest font-bold">
            Direction Course
          </p>

          {/* Heading */}
          <h2 className="font-bebas text-4xl my-1">
            LEARN FROM{" "}
            <span className="text-[#ffac26]">
              INDUSTRY MENTORS
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl font-onest text-sm leading-7 text-white/45 sm:text-base">
            Learn filmmaking and storytelling directly from experienced
            professionals who bring real-world cinema experience into
            the classroom.
          </p>

        </div>

      </div>

      {/* ======================================================
          TWO MENTOR CARDS
      ====================================================== */}

      <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 px-5 sm:flex-row sm:items-stretch sm:px-8 lg:gap-8">

        {MENTORS.map((mentor, index) => (

          <div
            key={index}
            className="group h-[400px] w-full max-w-[330px] [perspective:1200px] sm:h-[460px] sm:max-w-[360px] lg:h-[400px]"
          >

            {/* ==================================================
                FLIP CARD
            ================================================== */}

            <div className=" relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">

              <div className=" absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-[#111] shadow-[0_20px_60px_rgba(0,0,0,0.35)] [backface-visibility:hidden]">

                {/* Mentor Image */}
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  loading="lazy"
                  className=" h-full w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 "
                />

                {/* Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                {/* Top Orange Line */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#ffac26] transition-all duration-500 group-hover:w-full" />

                {/* Mentor Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">

                  <h3 className="font-bebas text-3xl tracking-wide text-white sm:text-2xl">
                    {mentor.name}
                  </h3>

                  <p className="mt-1 font-onest text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ffac26]">
                    {mentor.role}
                  </p>
                </div>

                {/* Flip Icon */}
                <div className=" absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 font-onest text-sm text-white/70 backdrop-blur-md transition-all duration-300 group-hover:border-[#ffac26]/60 group-hover:text-[#ffac26] "
                >
                  ↗
                </div>

              </div>

              {/* ==================================================
                  BACK
              ================================================== */}

              <div
                className="
                  absolute
                  inset-0
                  flex
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#ffac26]/30
                  bg-[#111]
                  p-7
                  shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                  [backface-visibility:hidden]
                  [transform:rotateY(180deg)]
                  sm:p-8
                "
              >

                {/* Background Glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#ffac26]/10 blur-[80px]" />

                {/* Top Content */}
                <div className="relative">

                  {/* <span className="font-onest text-[10px] font-bold uppercase tracking-[0.28em] text-[#ffac26]">
                    Direction Mentor
                  </span> */}

                  <h3 className="font-bebas text-4xl leading-none tracking-wide text-white sm:text-2xl">
                    {mentor.name}
                  </h3>

                  <div className="mt-4 h-[2px] w-14 bg-[#ffac26]" />

                  <p className="mt-4 font-onest text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-white/55">
                    {mentor.role}
                  </p>

                </div>

                {/* Mentor Details */}
                <div className="relative">

                  <p className="font-onest text-white/55 text-[12px]">
                    {mentor.details}
                  </p>

                </div>

                {/* Bottom */}
                {/* <div className="relative flex items-center justify-between border-t border-white/10 pt-5">

                  <span className="font-bebas text-sm tracking-[0.2em] text-white/25">
                    CINEMA FACTORY
                  </span>

                  <span className="font-onest text-[10px] font-semibold uppercase tracking-[0.15em] text-[#ffac26]">
                    Direction
                  </span>

                </div> */}

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}