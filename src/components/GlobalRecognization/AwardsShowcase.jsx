import React from "react";
import { awards } from "./awardsData";

const ACCENTS = {
  gold: {
    ring: "shadow-[0_0_60px_-15px_rgba(255,172,38,0.55)",
    // hoverRing: "group-hover:shadow-[0_0_80px_-10px_rgba(255,172,38,0.75)]",
    text: "text-[#ffac26]",
    glow: "from-[#ffac26]/5",
    border: "group-hover:border-[#ffac26",
  },
  red: {
    ring: "shadow-[0_0_60px_-15px_rgba(220,38,38,0.6)]",
    hoverRing: "group-hover:shadow-[0_0_80px_-10px_rgba(220,38,38,0.8)]",
    text: "text-red-500",
    glow: "from-red-600/25",
    border: "group-hover:border-red-500/60",
  },
};

function AwardPlaque({ award }) {
  const accent = ACCENTS[award.accent] ?? ACCENTS.red;

  return (
    <div className="group flex flex-col items-center text-center">
      {/* <div className="group mx-auto flex max-w-[260px] flex-col items-center text-center"> */}
      {/* trophy block */}
      <div
        className={`relative flex h-80 w-63 items-center justify-center rounded-md bg-gradient-to- from-neutral-800 to-black transition-all duration-500 group-hover:-translate-y-2 ${accent.ring} ${accent.hoverRing}`}
      >
        {/* <div
          className={`pointer-events-none absolute inset-0 rounded-md bg-gradient-to-t ${accent.glow} to-transparent opacity-70`}
        /> */}

        <div
          className={`relative flex h-[100%] w-[100%] items-center justify-center overflow-hidden rounded borde border-white/15 bg-blac backdrop-blur-sm transition-colors duration-500 ${accent.border}`}
        >
          <img
            src={award.img}
            alt={`${award.title} award`}
            className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
            draggable={false}
          />
          {/* subtle sheen sweep on hover */}
          {/* <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" /> */}
        </div>

        {/* jagged base */}
        {/* <div className="absolute -bottom-3 h-6 w-24 rotate-1 rounded-sm bg-neutral-900/90 transition-transform duration-500 group-hover:rotate-2" /> */}
        {/* <div className="absolute -bottom-4 h-4 w-28 -rotate-1 rounded-sm bg-neutral-950 transition-transform duration-500 group-hover:-rotate-2" /> */}
      </div>

      <p className="font-onest mt-8 text-xs uppercase tracking-widest text-sec">
        {award.category}
      </p>
      <h3
        className={`font-bebas mt-1 text-3xl tracking-wide text-white transition-colors duration-300 group-hover:${accent.text}`}
      >
        {award.title}
      </h3>
      <p className="font-onest mt-1 max-w-[16rem] text-sm text-sec">
        {award.festival}
        {award.year ? ` · ${award.year}` : ""}
      </p>
    </div>
  );
}

export default function AwardsShowcase({
  eyebrow = "Global Honours",
  title = "Recognised Beyond Borders",
}) {
  return (
    <section className="bg-black px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-onest text-sm font-semibold uppercase tracking-[0.1em] text-gray">
          {eyebrow}
        </p>
        <h2 className="font-bebas mt-2 text-4xl tracking-wide text-white sm:text-5xl">
          {title}
        </h2>

        <div className="mt-16 grid gap-16 md:gap-8 lg:gap-0 grid-cols-1 sm:grid-cols-3 lg:grid-cols-3">
          {/* <div className="mt-16  grid grid-cols-1 justify-items-center gap-16 sm:grid-cols-2 lg:grid-cols-2"> */}
          {awards.map((award) => (
            <AwardPlaque key={award.id} award={award} />
          ))}
        </div>
      </div>
    </section>
  );
}