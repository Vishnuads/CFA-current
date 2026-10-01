import React, { useMemo } from "react";

const GRID_COLS = 42;
const GRID_ROWS = 14;
const ORIGIN = { col: 30, row: 4 }; 

function useDotField() {
  return useMemo(() => {
    const dots = [];
    for (let r = 0; r < GRID_ROWS; r++) {
      for (let c = 0; c < GRID_COLS; c++) {
        const seed = Math.sin(c * 12.9898 + r * 78.233) * 43758.5453;
        const noise = seed - Math.floor(seed);
        if (noise > 0.42) continue; 

        const dist = Math.hypot(c - ORIGIN.col, r - ORIGIN.row);
        dots.push({
          id: `${r}-${c}`,
          col: c,
          row: r,
          delay: (dist * 0.06).toFixed(2),
        });
      }
    }
    return dots;
  }, []);
}

export default function GlobalRecognitionHero({
  eyebrow = "International Recognition. Industry Validation.",
  title = "GLOBAL RECOGNITION",
}) {
  const dots = useDotField();

  return (
    <section className="relative w-full overflow-hidden bg-black pt-34 pb-10 sm:py-40">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 70% at 55% 20%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 55% 20%, black 40%, transparent 90%)",
        }}
      >
        <div
          className="relative h-full w-full"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
            gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
          }}
        >
          {dots.map((d) => (
            <span
              key={d.id}
              className="signal-dot"
              style={{
                gridColumn: d.col + 1,
                gridRow: d.row + 1,
                animationDelay: `${d.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="scan-sweep absolute inset-0" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-bebas text-5xl leading-none tracking-wide text-white sm:text-6xl md:text-9xl">
          {title.split(" ").map((word, i) => (
            <span
              key={word + i}
              className={i === 1 ? "text-gray" : undefined}
            >
              {word}
              {i === 0 ? <br className="hidden sm:block" /> : " "}
            </span>
          ))}
        </h1>
        {/* <p className="font-onest mx-auto mt-5 max-w-xl text-base text-sec sm:text-lg">
          {eyebrow}
        </p> */}
      </div>

      <style>{`
        .signal-dot {
          width: 3px;
          height: 3px;
          margin: auto;
          border-radius: 9999px;
          background: rgba(220, 38, 38, 0.55);
          animation: signal-pulse 3.2s ease-in-out infinite;
        }
        @keyframes signal-pulse {
          0%, 100% { opacity: 0.25; transform: scale(1); background: rgba(220,38,38,0.4); }
          50% { opacity: 1; transform: scale(1.8); background: rgba(255,172,38,0.9); }
        }
        .scan-sweep {
          background: linear-gradient(
            115deg,
            transparent 40%,
            rgba(255, 172, 38, 0.08) 48%,
            rgba(220, 38, 38, 0.18) 50%,
            rgba(255, 172, 38, 0.08) 52%,
            transparent 60%
          );
          background-size: 300% 300%;
          animation: sweep-move 7s linear infinite;
        }
        @keyframes sweep-move {
          0% { background-position: 120% 0%; }
          100% { background-position: -20% 0%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .signal-dot, .scan-sweep { animation: none; }
        }
      `}</style>
    </section>
  );
}
