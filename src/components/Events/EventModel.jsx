// src/components/EventModal.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react";
import BASE_URL from "@/api";

const ACCENT = "#ffac26";

const EventModal = ({ event, onClose }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        lightboxIndex !== null ? setLightboxIndex(null) : onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "auto";
    };
  }, [lightboxIndex, onClose]);

  if (!event) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[90vh] pt-3 w-full max-w-3xl overflow-y-auto no-scrollbar rounded-2xl text-white bg-[#0a0a0a] border border-white/50 shadow-2xl"
        >
          {/* ambient glow */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-15 z-0"
            style={{ backgroundColor: ACCENT }}
          />

          {/* Close */}
          <button
            onClick={onClose}
            className="sticky top-5 left-[calc(100%-3.25rem)] z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors duration-200"
          >
            <X size={18} />
          </button>

          <div className="relative px-6 pb-8 -mt-9 sm:px-8 z-[1]">
            {/* Meta */}
            <div className="mb-4 font-onest flex flex-wrap items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} style={{ color: ACCENT }} />
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
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} style={{ color: ACCENT }} />
                  <p>{event.location}</p>
                </div>
              )}
            </div>

            <h2 className="font-bebas text-2xl font-bold leading-tight tracking-wide sm:text-3xl text-white">
              {event.title}
            </h2>

            {event.tagline && (
              <p className="mt-3 font-onest text-[15px] leading-relaxed text-[#8b8b8b]">
                {event.tagline}
              </p>
            )}

            {/* Image grid */}
            {event.images?.length > 0 && (
              <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {event.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10"
                  >
                    <img
                      src={`${BASE_URL}/${img}`}
                      alt={`${event.title} ${i + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"
                      style={{ background: `radial-gradient(circle at 50% 100%, ${ACCENT}, transparent 60%)` }}
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Highlights */}
            {event.highlights?.length > 0 && (
              <div className="mt-6 font-onest">
                <p
                  className="mb-3 text-xs font-semibold uppercase tracking-[0.1em]"
                  style={{ color: ACCENT }}
                >
                  Highlights
                </p>
                <ul className="space-y-2">
                  {event.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-white/80">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: ACCENT }}
                      />
                      <p>{h}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </motion.div>
      </motion.div>

      {/* Lightbox for full image view */}
      {lightboxIndex !== null && event.images?.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i - 1 + event.images.length) % event.images.length);
            }}
            className="absolute left-4 text-white/70 hover:text-white transition-colors duration-200"
          >
            <ChevronLeft size={32} />
          </button>

          <motion.img
            key={lightboxIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            src={`${BASE_URL}/${event.images[lightboxIndex]}`}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i + 1) % event.images.length);
            }}
            className="absolute right-4 text-white/70 hover:text-white transition-colors duration-200"
          >
            <ChevronRight size={32} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventModal;