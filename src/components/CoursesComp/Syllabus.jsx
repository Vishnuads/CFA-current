import React, { useState } from "react";
import { ExternalLink, ArrowDownToLine } from "lucide-react";
import { Link } from "react-router";

const Syllabus = ({ course }) => {
  const [index, setIndex] = useState(0);

  if (!course?.syllabus?.length) return null;

  return (
    <section className="bg-black py-12 sm:py-16 md:py-10">
      <div className="mx-auto max-w-6xl px-5">

        <div className="text-center">
          <h2 className="font-onest text-xs font-bold uppercase text-gray sm:text-sm">
            Syllabus
          </h2>

          {/* <h1 className="my-2 font-bebas text-2xl sm:text-3xl md:text-4xl">
            Your Journey Into {course.name}
          </h1> */}
          <h1 className="my-2 font-bebas tracking-wide text-2xl sm:text-3xl md:text-4xl">
            {course.timeLine}
          </h1>

          <p className="mx-auto max-w-3xl font-onest text-sm leading-7 text-white/65 sm:text-base">
            Build practical skills step-by-step through structured learning,
            hands-on projects and industry-focused workflows.
          </p>
        </div>

        <div className="my-10 overflow-hidden rounded-xl">

          {course.syllabus.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setIndex(idx)}
              className={` relative cursor-pointer overflow-hidden transition-all duration-500 ease-in-out
                ${
                  index === idx
                    ? ` ${course.name === "Stage Unreal Virtual Production" ?  'h-52' : 'h-[430px] sm:h-[390px] md:h-[320px]'} `
                    : "h-20 sm:h-24 md:h-24"
                }
                
              `}
            >

              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* ================= OVERLAY ================= */}

              <div
                className={`absolute inset-0 bg-black transition-opacity duration-500
                  ${
                    index === idx
                      ? "opacity-60"
                      : "opacity-30"
                  }
                `}
              />

              {/* ================= CONTENT ================= */}

              <div className="absolute inset-0 flex flex-col p-4 sm:p-6 md:p-8">

                {/* Program Name */}

                <h2 className="shrink-0 font-akira text-lg text-white sm:text-2xl md:text-3xl">
                  {item.name}
                </h2>

                {/* Duration */}

                {index === idx && item.duration && (
                  <h3 className="mt-2 shrink-0 font-onest text-xs font-semibold uppercase tracking-wider text-[#ffac26] sm:text-sm">
                    {item.duration}
                  </h3>
                )}

                {/* Subtitle */}

                {index === idx && item.subtitle && (
                  <p className="mt-2 shrink-0 font-onest text-xs font-semibold uppercase tracking-wider text-[#ffac26] sm:text-sm">
                    {item.subtitle}
                  </p>
                )}

                {/* ================= SCROLLABLE SYLLABUS ================= */}

                <div
                  className={` mt-5 min-h-0 flex-1 overflow-y-auto overflow-x-hidden pr-3 scroll-smooth transition-opacity duration-500
                    ${
                      index === idx
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                    }
                    [scrollbar-width:auto]
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-track]:bg-white/10
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-white/40
                    [&::-webkit-scrollbar-thumb:hover]:bg-[#ffac26]
                  `}
                >
                  {/* ================= MODULE LIST ================= */}

                  <div className="flex flex-wrap content-start gap-2 pb-4 sm:gap-3">

                    {item.modules?.map((module, moduleIndex) => (
                      <span
                        key={moduleIndex}
                        className="rounded border border-white/70 px-2 py-1 font-onest text-[9px] leading-4 text-white transition-all duration-300 hover:border-[#ffac26] hover:bg-white hover:text-black sm:px-3 sm:py-1.5 sm:text-sm"
                      >
                        {module}
                      </span>
                    ))}
                  </div>

                  {/* ================= EXPLORE MORE ================= */}

                  {item.exploreLink && (
                    <div className="pb-4">

                      <Link
                        to={item.exploreLink}
                        onClick={(e) => e.stopPropagation()}
                        className=" inline-flex items-center gap-2 rounded border border-[#ffac26] bg-[#ffac26] px-5 py-2.5 font-onest text-sm font-semibold text-black transition-all duration-300 hover:border-white hover:bg-white "
                      >
                        <ExternalLink size={16} />
                        Explore More
                      </Link>

                    </div>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM CONTENT ================= */}

        <div className="mt-8 text-center">

          <p className="mx-auto max-w-2xl font-onest text-xs leading-6 text-white/40 sm:text-sm">
            Explore the complete course structure, practical training,
            projects and industry-focused learning available in the{" "}
            {course.name} program.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3">

            {/* Browse Full Details */}

            {/* {course.brochurePdf && ( )} */}
              {/* <a
                href={course.brochurePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded border border-white/40 px-5 py-2.5 font-onest text-sm text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black "
              >
                <ExternalLink size={16} />
                Browse Full Details
              </a> */}
           
            {/* Download Brochure */}
            {course.brochurePdf && ( 
              <a
                href={course.brochurePdf}
                download
                className=" inline-flex items-center gap-2 rounded-full bg-[#ffac26] px-5 py-2.5 font-onest text-sm font-semibold text-black transition-all duration-300 hover:bg-white "
              >
                <ArrowDownToLine size={16} />
                Download Brochure
              </a>
           )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Syllabus;