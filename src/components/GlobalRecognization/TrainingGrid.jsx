import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { trainingModules } from "./trainingData";

function TrainingCard({ item }) {
  return (
    <div className="group relative overflow-hidden border-white/10 bg-neutral-900">
      <img
        src={item.image}
        alt={item.title}
        draggable={false}
        className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-onest text-lg font-semibold text-white">
          {item.title}
        </h3>

        <p className="mt-1 text-sm text-gray-300">
          {item.subtitle}
        </p>
      </div>

      <div className="absolute inset-0 border border-transparent transition group-hover:border-[#ffac26]" />
    </div>
  );
}

export default function TrainingGrid({
  title = "Industry Equipment Training",
}) {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [autoplay.current]
  );

  const prev = () => {
    emblaApi?.scrollPrev();
    autoplay.current.reset();
  };

  const next = () => {
    emblaApi?.scrollNext();
    autoplay.current.reset();
  };

  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">

        <div className="flex items-center justify-between">
          <h2 className="font-bebas text-4xl text-white">
            {title}
          </h2>

          <div className="flex gap-3">

            <button
              onClick={prev}
              className="flex h-11 cursor-pointer w-11 items-center justify-center rounded-full border border-white/20 bg-neutral-900 text-[#ffac26] transition hover:bg-[#ffac26] hover:text-black"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={next}
              className="flex h-11 cursor-pointer w-11 items-center justify-center rounded-full border border-white/20 bg-neutral-900 text-[#ffac26] transition hover:bg-[#ffac26] hover:text-black"
            >
              <ChevronRight size={20} />
            </button>

          </div>
        </div>

        <div
          className="mt-12 overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex">

            {trainingModules.map((item) => (
              <div
                key={item.id}
                className=" min-w-0 flex-[0_0_80%]  sm:flex-[0_0_50%] lg:flex-[0_0_25%] xl:flex-[0_0_26%] px-3"
              >
                <TrainingCard item={item} />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}