import React from "react";

import img1 from "../../assets/Direction/mf/1.jpg";
import img2 from "../../assets/Direction/mf/2.jpg";
import img4 from "../../assets/Direction/mf/4.jpg";
import img5 from "../../assets/Direction/mf/5.jpg";

const FILMOGRAPHY = [
  img1,
  img2,
  img4,
  img5,
];

export default function MentorsFilmography() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-10">

      {/* ======================================================
          HEADER
      ====================================================== */}

      <div className="relative mx-auto mb-10 max-w-7xl px-5 text-center sm:mb-14 sm:px-8 lg:mb-16 lg:px-10">

        <p
          className="uppercase text-gray font-onest font-bold"        >
          Industry Experience
        </p>

        <h2
          className="font-bebas text-4xl my-1"        >
          MENTOR'S{" "}
          <span className="text-[#ffac26]">
            FILMOGRAPHY
          </span>
        </h2>


        <p className="mx-auto mt-5 max-w-2xl font-onest text-sm leading-7 text-white/45 sm:text-base">
          Explore the films and creative works that reflect the experience, craft and storytelling journey of our industry mentors.

        </p>

      </div>

      <div className="relative w-full overflow-hidden">

        {/* Left Fade */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-16
            bg-gradient-to-r
            from-black
            to-transparent
            sm:w-24
            lg:w-40
          "
        />

        {/* Right Fade */}
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-16
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

        <div className="film-marquee group">

          {/* FIRST SET */}

          <div className="film-marquee-content">

            {FILMOGRAPHY.map((image, index) => (
              <div
                key={`first-${index}`}
                className="
                  film-card
                  group/card
                  h-[350px]
                  w-[310px]
                  sm:h-[400px]
                  sm:w-[350px]
                  lg:h-[350px]
                  lg:w-[300px]
                "
              >
                <img
                  src={image}
                  alt={`Mentor filmography ${index + 1}`}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover/card:scale-105
                  "
                />
              </div>
            ))}

          </div>

          {/* SECOND SET */}

          <div
            className="film-marquee-content"
            aria-hidden="true"
          >

            {FILMOGRAPHY.map((image, index) => (
              <div
                key={`second-${index}`}
                className="
                  film-card
                  group/card
                  h-[350px]
                  w-[310px]
                  sm:h-[400px]
                  sm:w-[350px]
                 lg:h-[350px]
                  lg:w-[300px]
                "
              >
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover/card:scale-105
                  "
                />
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* ======================================================
          MARQUEE CSS
      ====================================================== */}

      <style>{`
        .film-marquee {
          display: flex;
          width: max-content;
          animation: filmMarquee 25s linear infinite;
        }

        .film-marquee:hover {
          animation-play-state: paused;
        }

        .film-marquee-content {
          display: flex;
          flex-shrink: 0;
        }

        .film-card {
          position: relative;
          flex-shrink: 0;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.10);
          border-bottom: 1px solid rgba(255, 255, 255, 0.10);
          background: #111111;
        }

        .film-card img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @keyframes filmMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .film-marquee {
            animation-duration: 18s;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .film-marquee {
            animation-duration: 22s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .film-marquee {
            animation-play-state: paused;
          }
        }
      `}</style>

    </section>
  );
}