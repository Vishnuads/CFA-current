import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { milestones } from "./milestonesData";

/* ----------------------------------
   Find shortest circular offset
----------------------------------- */
function circularOffset(itemIndex, activeIndex, length) {
  let diff = itemIndex - activeIndex;

  if (diff > length / 2) {
    diff -= length;
  }

  if (diff < -length / 2) {
    diff += length;
  }

  return diff;
}

export default function MilestonesCarousel({
  eyebrow = "Institutional Milestones",
  title = "Building industry standards. Not just classrooms.",
}) {
  /* ----------------------------------
     Initial active slide
  ----------------------------------- */
  const featuredIndex = milestones.findIndex((item) => item.featured);

  const [activeIndex, setActiveIndex] = useState(
    featuredIndex >= 0 ? featuredIndex : 0
  );

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  /* ----------------------------------
     Navigation
  ----------------------------------- */
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % milestones.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + milestones.length) % milestones.length
    );
  };

  /* ----------------------------------
     Mobile Swipe
  ----------------------------------- */
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      return;
    }

    const distance =
      touchStartX.current - touchEndX.current;

    const minimumSwipeDistance = 50;

    if (distance > minimumSwipeDistance) {
      nextSlide();
    }

    if (distance < -minimumSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="overflow-hidden bg-black py-16 sm:py-20 lg:py-24">

      {/* ==============================
          HEADING
      ============================== */}
      <div className="mx-auto max-w-6xl px-4 text-center">

        <p className="font-onest text-[11px] font-semibold uppercase tracking-[0.1em] text-gray sm:text-sm">
          {eyebrow}
        </p>

        <h2 className="font-bebas mx-auto mt-3 max-w-4xl text-3xl tracking-wide text-white sm:text-4xl md:text-5xl lg:text-5xl">
          {title}
        </h2>

      </div>

      <div className=" relative mx-auto mt-8 h-[360px] w-full max-w-[1400px] overflow-hidden sm:mt-10 sm:h-[430px] lg:h-[500px] "
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >

        {milestones.map((item, index) => {
          const offset = circularOffset(
            index,
            activeIndex,
            milestones.length
          );

          if (Math.abs(offset) > 1) {
            return null;
          }

          const isActive = offset === 0;
          const isLeft = offset === -1;
          const isRight = offset === 1;

          return (
            <div
              key={item.id}
              onClick={() => {
                if (!isActive) {
                  setActiveIndex(index);
                }
              }}
              className={` absolute left-1/2 top-1/2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${isActive
                  ? "z-20 cursor-default"
                  : "z-10 cursor-pointer"
                }
                ${isLeft
                  ? ` translate-x-[-115%] -translate-y-1/2 scale-[0.78] opacity-45 sm:translate-x-[-125%] sm:scale-[0.82] lg:translate-x-[-135%] lg:scale-[0.86] `
                  : ""
                }

                ${isActive
                  ? ` -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 `
                  : ""
                }

                ${isRight
                  ? `translate-x-[15%] -translate-y-1/2 scale-[0.78] opacity-45 sm:translate-x-[25%] sm:scale-[0.82] lg:translate-x-[35%] lg:scale-[0.86] `
                  : ""
                }
              `}
            >

              <article
                className={` group relative overflow-hidden rounded-2xl border transition-all duration-700
                  ${isActive
                    ? `h-[330px] w-[330px] border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.7)] sm:h-[400px]
                        sm:w-[300px] md:w-[320px] lg:h-[400px] lg:w-[650px] `
                    : ` h-[300px] w-[210px] border-white/10 sm:h-[360px] sm:w-[270px] md:w-[290px] lg:h-[410px]
                        lg:w-[380px]
                      `
                  }
                `}
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  draggable={false}
                  className={` h-full w-full select-none object-cover transition-transform duration-700
                    ${isActive
                      ? "scale-100 group-hover:scale-105"
                      : "scale-105"
                    }
                  `}
                />

                {/* EXTRA BOTTOM GRADIENT */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/60 to-transparent" />

                <div className={`transition-all duration-500
                 ${isActive
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                  }
                  `}
                >

                  {/* LOCATION */}
                  {item.location && (
                    <div className="absolute left-4 top-4 sm:left-5 sm:top-5">

                      <span className="font-onest flex items-center gap-1.5 rounded-full bg-[#ffac26] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-white shadow-lg sm:px-4 sm:py-2 sm:text-[10px]">

                        <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5" />

                        {item.location}

                      </span>

                    </div>
                  )}

                  {/* BOTTOM CONTENT */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
                    <h3 className="font-onest mt-1 text-lg font-semibold leading-snug text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* SIDE CARD HOVER */}
                {!isActive && (
                  <div className="pointer-events-none absolute inset-0 border border-transparent transition group-hover:border-white/20" />
                )}

              </article>

            </div>
          );
        })}

        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous milestone"
          className=" absolute left-3 top-1/2 cursor-pointer z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20  bg-black/70 text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110  hover:border-[#ffac26] sm:left-6 sm:h-12 sm:w-12 lg:left-10
          "
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* ==============================
            NEXT BUTTON
        ============================== */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next milestone"
          className=" absolute cursor-pointer right-3 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2
            items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-xl backdrop-blur-md transition-all duration-300  hover:scale-110 hover:border-[#ffac26] sm:right-6 sm:h-12 sm:w-12 lg:right-10 "
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

      </div>


      <div className="mt-6 flex items-center justify-center gap-2 sm:mt-8">
        {milestones.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${item.title}`}
              className={` h-1.5  rounded-full transition-all duration-500
                ${isActive
                  ? "w-8 bg-[#ffac26]"
                  : "w-1.5 bg-white/25 hover:bg-white/60"
                }
              `}
            />
          );
        })}

      </div>

      {/* ==============================
          MOBILE SWIPE TEXT
      ============================== */}
      <p className="font-onest mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-white/30 sm:hidden">
        Swipe to explore
      </p>

    </section>
  );
}