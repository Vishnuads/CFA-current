import React from "react";
import { motion } from "framer-motion";

const ACCENT = "#ffac26";

const Highlights = ({ course }) => {

  if (!course?.highlights?.length) return null;

  return (
    <section className="relative overflow-hidden bg-[#050505] py-12 text-white sm:py-16 md:py-20">

      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: ACCENT }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="mb-10 text-center sm:mb-14 md:mb-16">

          <h2
            className="font-onest text-xs font-bold uppercase tracking-[0.2em] sm:text-sm"
            style={{ color: ACCENT }}
          >
            Course Highlights
          </h2>

          <h1 className="my-3 font-bebas text-2xl tracking-wide sm:text-3xl md:text-4xl">
            What You'll Learn Inside {course.name}
          </h1>

          <p className="mx-auto max-w-3xl font-onest text-sm leading-relaxed text-[#8b8b8b] sm:text-base">
            Master practical filmmaking skills through industry-focused
            training, creative exercises and real-world production workflows.
          </p>

        </div>


        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {course.highlights.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="group relative"
            >

              <div className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-[#ffac26]/40">

                {/* <div className="flex h-40 items-center justify-center">
                  <div className="h-32 w-40 transition-transform duration-500 group-hover:scale-110">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div> */}
                <div className="absolute z-10 top-0 right-0 bg-amber-400 blur-2xl rounded-full h-14 w-14"></div>


                <div className="p-5 text-center">

                  <h3 className="mb-2 font-onest text-sm font-semibold text-white sm:text-base">
                    {item.title}
                  </h3>

                  <p className="font-onest text-xs leading-6 text-[#8b8b8b] sm:text-sm">
                    {item.description}
                  </p>

                  <span
                    className="mx-auto mt-4 block h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-14"
                    style={{ backgroundColor: ACCENT }}
                  />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Highlights;