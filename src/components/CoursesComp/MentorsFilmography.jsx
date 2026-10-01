import React from "react";

export default function MentorsFilmography({ course }) {
  const filmography = course?.filmography || [];
  const marqueeImages = [...filmography, ...filmography];
  if (!filmography.length) {
    return null;
  }

  return (
    <section className="relative w-full overflow-hidden bg-black py-10">

      {/* ======================================================
          HEADER
      ====================================================== */}
      <div className="relative mx-auto mb-10 max-w-7xl px-5 text-center sm:mb-14 sm:px-8 lg:mb-16 lg:px-10">

        <p className="font-onest font-bold uppercase text-gray">
          Industry Experience
        </p>

        <h2 className="my-1 font-bebas text-4xl tracking-wide sm:text-5xl">
          MENTOR'S{" "}
         
            FILMOGRAPHY
         
        </h2>

        <p className="mx-auto mt-5 max-w-2xl font-onest text-sm leading-7 text-white/45 sm:text-base">
          Explore the films and creative works that reflect the experience,
          craft and storytelling journey of our industry mentors.
        </p>

      </div>

      {/* ======================================================
          MARQUEE
      ====================================================== */}
      <div className="relative w-full overflow-hidden">

        {/* LEFT FADE */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-12
            bg-gradient-to-r
            from-black
            to-transparent
            sm:w-24
            lg:w-40
          "
        />

        {/* RIGHT FADE */}
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-12
            bg-gradient-to-l
            from-black
            to-transparent
            sm:w-24
            lg:w-40
          "
        />

        {/* ====================================================
            MARQUEE TRACK
        ==================================================== */}
        <div className="film-marquee">

          {marqueeImages.map((image, index) => (
            <div
              key={`film-${index}`}
              className="
                film-card
                group
                h-[280px]
                w-[240px]
                shrink-0
                overflow-hidden

                sm:h-[350px]
                sm:w-[290px]

                lg:h-[350px]
                lg:w-[300px]
              "
            >

              <img
                src={image}
                alt={
                  index < filmography.length
                    ? `${course?.name || "Mentor"} filmography ${index + 1}`
                    : ""
                }
                aria-hidden={index >= filmography.length}
                loading="lazy"
                className="
                  block
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />

            </div>
          ))}

        </div>
      </div>

      {/* ======================================================
          MARQUEE CSS
      ====================================================== */}
      <style>{`
        .film-marquee {
          display: flex;
          width: max-content;
          animation: mentorFilmMarquee 25s linear infinite;
          will-change: transform;
        }

        .film-card {
          position: relative;
          border-top: 1px solid rgba(255, 255, 255, 0.10);
          border-bottom: 1px solid rgba(255, 255, 255, 0.10);
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          background: #111111;
        }

        .film-card img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @keyframes mentorFilmMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .film-marquee {
            animation-duration: 18s;
          }
        }

        /* Tablet */
        @media (min-width: 641px) and (max-width: 1024px) {
          .film-marquee {
            animation-duration: 22s;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .film-marquee {
            animation-play-state: paused;
          }
        }
      `}</style>

    </section>
  );
}