import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import img1 from "../../assets/mentor_film/mf1.webp";
import img2 from "../../assets/mentor_film/mf2.webp";
import img3 from "../../assets/mentor_film/mf3.webp";
import img4 from "../../assets/mentor_film/mf4.webp";
import img5 from "../../assets/mentor_film/mf5.webp";
import img6 from "../../assets/mentor_film/mf6.webp";
import img7 from "../../assets/mentor_film/mf7.webp";
import img8 from "../../assets/mentor_film/mf8.webp";
import img9 from "../../assets/mentor_film/mf9.webp";
import img10 from "../../assets/mentor_film/mf10.webp";
import img11 from "../../assets/mentor_film/mf11.webp";
import img12 from "../../assets/mentor_film/mf12.webp";
import img13 from "../../assets/mentor_film/mf13.webp";
import img14 from "../../assets/mentor_film/mf14.webp";
import img15 from "../../assets/mentor_film/mf15.webp";
import img16 from "../../assets/mentor_film/mf16.webp";
import img17 from "../../assets/mentor_film/mf17.webp";
import img18 from "../../assets/mentor_film/mf18.webp";
import img19 from "../../assets/mentor_film/mf19.webp";
import img20 from "../../assets/mentor_film/mf20.webp";
import img21 from "../../assets/mentor_film/mf21.webp";
import img22 from "../../assets/mentor_film/mf22.webp";
import img23 from "../../assets/mentor_film/mf23.webp";
import img24 from "../../assets/mentor_film/mf24.webp";
import img25 from "../../assets/mentor_film/mf25.webp";
import img26 from "../../assets/mentor_film/mf26.webp";
import img27 from "../../assets/mentor_film/mf27.webp";
import img28 from "../../assets/mentor_film/mf28.webp";
import img29 from "../../assets/mentor_film/mf29.webp";
import img30 from "../../assets/mentor_film/mf30.webp";
import img31 from "../../assets/mentor_film/mf31.webp";


const FILMOGRAPHY = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
];

const FILMOGRAPHY_REVERSE = [...FILMOGRAPHY].reverse();

export default function Mentors() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-5  sm:py-20">


      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* ======================================================
          TOP AMBIENT GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-[#ffac26]/[0.035] blur-[140px]" />
    <div className="relative mx-auto mb-10 max-w-7xl px-5 text-center sm:mb-14 sm:px-8 lg:mb-16 lg:px-10">

  <div className="mx-auto max-w-4xl">

    {/* Small Label */}
    <div className="mb-4 flex items-center justify-center gap-3">

      <p className="font-onest font-bold uppercase text-gray">
        Industry Experience
      </p>

    </div>

    {/* Heading */}
    <h2 className="font-bebas text-4xl my-1">

      MENTORS WHO ARE{" "}

      <span className="font-bebas font-normal tracking-wide text-[#ffac26]">
        STILL WORKING
      </span>

    </h2>

    {/* Description */}
    <p className="mx-auto mt-5 max-w-2xl font-onest text-sm leading-7 text-white/45 sm:text-base">
      Learn directly from professionals who continue to shape
      cinema, filmmaking, visual storytelling and the entertainment
      industry.
    </p>

  </div>

</div>



      <div className="relative mb-5 w-full">

        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-black to-transparent sm:w-28 lg:w-40" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-black to-transparent sm:w-28 lg:w-40" />

        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView="auto"
          spaceBetween={14}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          allowTouchMove={true}
          grabCursor={true}
          className="!overflow-visible"
        >

          {[...FILMOGRAPHY, ...FILMOGRAPHY].map((image, index) => (

            <SwiperSlide
              key={`film-row-one-${index}`}
            //   className="!h-auto !w-[170px] sm:!w-[210px] md:!w-[240px] lg:!w-[280px]"
                              className="!h-auto !w-[145px] sm:!w-[180px] md:!w-[210px] lg:!w-[245px]"

            >

              <div className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-2 transition-all duration-500 hover:border-[#ffac26]/40 hover:bg-white/[0.06]">

                {/* Image */}
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg">

                  <img
                    src={image}
                    alt="Mentor filmography"
                    loading="lazy"
                    className="h-full w-full object-contain opacity-65 grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />

                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#ffac26]/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

      {/* ======================================================
          FILMOGRAPHY SLIDER - ROW 2
      ====================================================== */}

      <div className="relative w-full">

        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-black to-transparent sm:w-28 lg:w-40" />

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-black to-transparent sm:w-28 lg:w-40" />

        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView="auto"
          spaceBetween={14}
          speed={5500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: true,
          }}
          allowTouchMove={true}
          grabCursor={true}
          className="!overflow-visible"
        >

          {[...FILMOGRAPHY_REVERSE, ...FILMOGRAPHY_REVERSE].map(
            (image, index) => (

              <SwiperSlide
                key={`film-row-two-${index}`}
                className="!h-auto !w-[145px] sm:!w-[180px] md:!w-[210px] lg:!w-[245px]"
              >

                <div className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.025] p-2 transition-all duration-500 hover:border-[#ffac26]/30 hover:bg-white/[0.05]">

                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg">

                    <img
                      src={image}
                      alt="Mentor filmography"
                      loading="lazy"
                      className="h-full w-full object-contain opacity-45 grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#ffac26]/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  </div>

                </div>

              </SwiperSlide>

            )
          )}

        </Swiper>

      </div>

      {/* ======================================================
          BOTTOM ACCENT
      ====================================================== */}
{/* 
      <div className="relative mx-auto mt-12 flex max-w-7xl items-center gap-4 px-5 sm:mt-16 sm:px-8 lg:px-10">

        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/10" />

        <span className="font-bebas text-xs tracking-[0.3em] text-white/25 sm:text-sm">
          CINEMA • CRAFT • EXPERIENCE
        </span>

        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-white/10" />

      </div> */}

    </section>
  );
}