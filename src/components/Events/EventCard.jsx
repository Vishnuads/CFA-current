// src/components/EventCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import BASE_URL from "@/api";

const AMBER = "#ffac26";

const EventCard = ({ event, index, onView }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: "easeOut" }}
    // whileHover={{ y: -4 }}
    className="group relative sm:h-52 h-40  overflow-hidden w-full"
  >
    <div className="relative h-full w-full">
      <img
        src={`${BASE_URL}/${event.images[0]}`}
        alt={event.title}
        className="h-full w-full object-cover object-center grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
      />
      <div
        style={{ background: 'linear-gradient(to right, #000000, #000000e6, #00000000, #00000000, #00000000)' }}
        className="absolute inset-0">
      </div>
    </div>

    <div className="absolute inset-0 flex items-center md:max-w-6xl max-w-xs sm:mx-auto px-4">
      <div className="flex w-full items-center gap-5 sm:gap-6">
        <div className="shrink-0 text-center font-bebas" style={{ color: AMBER }}>
          <p className="text-3xl sm:text-5xl">
            {new Date(event.date).getDate().toString().padStart(2, "0")}
          </p>
          <p className="text-lg sm:text-4xl">
            {new Date(event.date).toLocaleString("en-US", { month: "short" })}
          </p>
          <p className="text-lg sm:text-3xl">{new Date(event.date).getFullYear()}</p>
        </div>

        <div className="max-w-xs sm:space-y-1.5 space-y-0">
          <p className="sm:line-clamp-2 line-clamp-1  text-xl font-bebas leading-snug sm:text-2xl">
            {event.title}
          </p>

          {event.tagline && (
            <p className="sm:mt-3 my-1 text-[12px] line-clamp-2 leading-relaxed text-gray-200">
              {event.tagline}
            </p>
          )}

          {/* {event.location && (
            <div className="flex items-center gap-1.5 text-xs text-gray-500 sm:text-sm">
              <MapPin size={13} />
              {event.location}
            </div>
          )} */}
          <button
            onClick={() => onView(event)}
            className="flex items-center gap-1.5 pt-1 text-sm font-semibold transition-all duration-300 group-hover:gap-2.5"
            style={{ color: AMBER }}
          >
            <p>View Event</p>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

export default EventCard;