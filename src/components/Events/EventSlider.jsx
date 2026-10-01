// src/components/HeroSlider.jsx
import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Section } from "lucide-react";
import BASE_URL from "@/api";

const AMBER = "#ffac26";
const SLIDE_DURATION = 5000;

const EventSlider = ({ events, onView }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (events.length <= 1) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % events.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [events.length]);

  if (!events.length) return null;

  const event = events[active];
  // console.log(event.images[0]);
  

  return (
    <section className="pt-20">
      <div className="relative h-[80vh]  overflow-hidden sm:h-screen">
        <AnimatePresence mode="wait">
          <motion.img
            key={event.id}
            src={`${BASE_URL}/${event.images[0]}`}
            alt={event.title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        <div
          style={{ background: 'linear-gradient(to right, #000000, #000000e6, #00000000, #00000000, #00000000)' }}
          className="absolute inset-0">
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute left-5 top-[45%] max-w-[80%] -translate-y-1/2 space-y-4 sm:left-12 sm:max-w-[420px] sm:space-y-5 md:left-20"
          >
            <p className="text-xs font-semibold uppercase sm:text-sm" style={{ color: AMBER }}>
              Featured Events
            </p>
            <h1 className="font-bebas text-white text-2xl sm:text-5xl">
              {event.title}
            </h1>
            <p className="text-sm text-gray-200 sm:text-base">{event.tagline}</p>

            <div className="mt-3 text-white flex flex-wrap items-center gap-3 text-xs sm:mt-4 sm:gap-4 sm:text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={15} color={AMBER} />
               <p><span>
                  {new Date(event.date).getDate().toString().padStart(2, "0")}
                </span>
                  <span>
                     {' '}{new Date(event.date).toLocaleString("en-US", { month: "short" })}
                  </span>
                  <span>
                    {' '}{new Date(event.date).getFullYear()}
                  </span>
                </p>
              </div>
              {event.location && (
                <div className="flex items-center gap-2">
                  <MapPin size={15} color={AMBER} />
                  <p>{event.location}</p>
                </div>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onView(event)}
              className="mt-3 rounded-3xl px-5 py-2.5 text-sm  text-white shadow-md sm:mt-4"
              style={{ background: AMBER, boxShadow: `0 8px 20px -6px ${AMBER}88` }}
            >
              <p>View Event Details</p>
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {events.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === active ? 24 : 8,
                background: i === active ? AMBER : "rgba(0,0,0,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSlider;