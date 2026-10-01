import React, { useState } from "react";

const CourseMentors = ({ course }) => {

  if (!course?.mentors?.length) return null;
  const [flippedIndex, setFlippedIndex] = useState(null)

  return (
    <section className="relative w-full overflow-hidden bg-black py-16 sm:py-16">

      <div className="pointer-events-none absolute left-1/2 top-10 h-87.5 w-125 -translate-x-1/2 rounded-full bg-[#ffac26]/4.5 blur-[120px]" />


      {/* Header */}

      <div className="relative mx-auto mb-10 max-w-7xl px-5 text-center sm:mb-14">

        <p className="font-onest font-semibold uppercase text-gray">
          {course.name} Course
        </p>

        <h2 className="my-2 font-bebas text-4xl">
          LEARN FROM{" "}  INDUSTRY MENTORS
        </h2>

        <p className="mx-auto mt-3 max-w-2xl font-onest text-sm leading-7 text-white/45 sm:text-base">
          Learn filmmaking and storytelling directly from experienced
          professionals who bring real-world industry experience into
          the classroom.
        </p>

      </div>


      {/* Mentor Cards */}

      {/* <div 
      className="relative mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 px-5 sm:flex-row sm:items-stretch"
      > */}
      {/* “ */}
      {/* <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3" > */}

      <div className="relative mx-auto grid max-w-6xl grid-cols-2 justify-items-center gap-3 px-4 sm:grid-cols-3 sm:gap-5 sm:px-5 lg:grid-cols-4 lg:gap-6">
        {course.mentors.map((mentor, index) => {
          const isFlipped = flippedIndex === index

          return (
            <div
              key={index}
              role="button"
              tabIndex={0}
              aria-pressed={isFlipped}
              aria-label={`${mentor.name}, ${mentor.role}. Tap to see details`}
              onClick={() => setFlippedIndex(isFlipped ? null : index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setFlippedIndex(isFlipped ? null : index)
                }
              }}
              className="group aspect-3/4 w-full max-w-65 cursor-pointer select-none perspective-distant focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffac26] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] rounded-2xl"
            >
              <div
                className={`relative h-full w-full rounded-2xl transition-transform duration-700 transform-3d
            [@media(hover:hover)]:group-hover:[transform:rotateY(180deg)]
            ${isFlipped ? '[@media(hover:none)]:[transform:rotateY(180deg)]' : ''}`}
              >
                {/* ===== Front ===== */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-[#111] [-webkit-backface-visibility:hidden] [backface-visibility:hidden]">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 [@media(hover:hover)]:group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 lg:p-6">
                    <h3 className="font-bebas text-xl leading-tight text-white sm:text-2xl lg:text-3xl">
                      {mentor.name}
                    </h3>
                    <p className="mt-1 font-onest text-[9px] font-semibold uppercase tracking-[0.12em] text-[#ffac26] sm:text-[11px] sm:tracking-[0.16em] lg:text-[13px]">
                      {mentor.role}
                    </p>

                    {/* tap hint, touch devices only */}
                    <span className="mt-2 hidden items-center gap-1 font-onest text-[9px] uppercase tracking-wider text-white/50 [@media(hover:none)]:inline-flex">
                      Tap to flip
                    </span>
                  </div>
                </div>

                {/* ===== Back ===== */}
                <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#ffac26]/30 bg-[#111] p-3 sm:p-4 lg:p-5 [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="shrink-0">
                    <h3 className="font-bebas text-2xl leading-tight text-white sm:text-3xl lg:text-4xl">
                      {mentor.name}
                    </h3>
                    <div className="mt-2 h-[2px] w-10 bg-[#ffac26] sm:w-14" />
                    <p className="mt-2 font-onest text-[10px] font-semibold uppercase tracking-[0.1em] text-white/65 sm:mt-3 sm:text-xs sm:tracking-[0.12em]">
                      {mentor.role}
                    </p>
                  </div>

                  <p className="mt-2 max-h-[55%] overflow-y-auto font-onest text-[11px] leading-[1.5] text-white/60 no-scrollbar sm:text-xs sm:leading-6">
                    {mentor.details}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default CourseMentors;