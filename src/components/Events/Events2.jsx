// src/pages/Events.jsx
import React, { useState, useMemo, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ListFilter, ChevronDown, X, ChevronDown as ChevronDownIcon } from "lucide-react";
import EventSlider from "./EventSlider";
import EventCard from "./EventCard";
import EventModal from "./EventModel";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { workshopContext } from "../Context/WorkshopContext";
const AMBER = "#ffac26";
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const PAGE_SIZE = 10;

const monthYearLabel = (dateStr) => {
  const d = new Date(dateStr);
  return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
};

const Events2 = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const { eventData } = useContext(workshopContext);

  // const featuredEvents = useMemo(() => eventData.filter((e) => e.featured).slice(0, 3), []);
  const featuredEvents = useMemo(() => eventData.slice(0, 3), [eventData]);

  const years = useMemo(
    () => ["All", ...Array.from(new Set(eventData?.map((e) => new Date(e.date).getFullYear()))).sort((a, b) => b - a)],
    [eventData]
  );

  const filtered = useMemo(() => {
    if (!eventData) return [];
    return eventData?.filter((e) => {
        const d = new Date(e.date);
        const monthMatch = selectedMonth === "All" || MONTHS[d.getMonth()] === selectedMonth;
        const yearMatch = selectedYear === "All" || d.getFullYear() === selectedYear;
        return monthMatch && yearMatch;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [selectedMonth, selectedYear, eventData]);

  // Reset pagination whenever filters change
  const resetAndSetMonth = (m) => {
    setSelectedMonth(m);
    setVisibleCount(PAGE_SIZE);
  };
  const resetAndSetYear = (y) => {
    setSelectedYear(y);
    setVisibleCount(PAGE_SIZE);
  };
  const clearFilters = () => {
    setSelectedMonth("All");
    setSelectedYear("All");
    setVisibleCount(PAGE_SIZE);
  };

  const visibleEvents = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const hasActiveFilters = selectedMonth !== "All" || selectedYear !== "All";

  // Group visible events by month-year, preserving recent-first order
  const grouped = useMemo(() => {
    const groups = [];
    let currentLabel = null;
    let currentGroup = null;

    visibleEvents.forEach((event) => {
      const label = monthYearLabel(event.date);
      if (label !== currentLabel) {
        currentLabel = label;
        currentGroup = { label, events: [] };
        groups.push(currentGroup);
      }
      currentGroup.events.push(event);
    });

    return groups;
  }, [visibleEvents]);


  return (
    <section className="bg-[#050505] text-white">
      <Navbar />
      <EventSlider events={featuredEvents} onView={setSelectedEvent} />

      <div className="mx-auto max-w-6xl px-4 pt-10 sm:pt-14 pb-8 sm:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="my-5 text-center"
        >
          <p className="font-semibold uppercase font-onest" style={{ color: AMBER }}>
            CFA Archive
          </p>
          <h1 className="my-2 font-bebas text-2xl sm:text-3xl md:text-4xl">
            Moments That Made The Journey
          </h1>
          <p className="mx-auto max-w-2xl text-sm sm:text-[15px] text-sec ">
            Explore masterclasses, workshops, industry interactions, and
            experiences from across the CFA journey.
          </p>
        </motion.div>

        <div className="mt-6 flex flex-row gap-4 items-center justify-between">
          <p className="text-sm font-medium text-white">
            Recent Events
            {/* <span className="text-gray-400">({filtered.length})</span> */}
          </p>

          <div className="relative flex items-center gap-2">
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-[#ffac26]"
              >
                Clear <X size={12} />
              </button>
            )}
            <button
              onClick={() => setFilterOpen((v) => !v)}
              className={`flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm transition-all duration-200 ${filterOpen || hasActiveFilters ? "border-[#ffac26] text-[#ffac26]" : "border-gray-300 text-white hover:border-gray-400"
                }`}
            >
              <ListFilter size={14} />
              Filter
              <ChevronDown size={14} className={`transition-transform duration-300 ${filterOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {filterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-11 z-20 w-64 rounded-xl border border-gray-200 bg-white p-4 shadow-xl"
                >
                  <div className="mb-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">Month</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["All", ...MONTHS].map((m) => (
                        <button
                          key={m}
                          onClick={() => resetAndSetMonth(m)}
                          className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all ${selectedMonth === m ? "text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                          style={selectedMonth === m ? { background: AMBER } : {}}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">Year</p>
                    <div className="flex flex-wrap gap-1.5">
                      {years.map((y) => (
                        <button
                          key={y}
                          onClick={() => resetAndSetYear(y)}
                          className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all ${selectedYear === y ? "text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                          style={selectedYear === y ? { background: AMBER } : {}}
                        >
                          {y}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className=" pb-10">
        {grouped?.length > 0 ? (
          <AnimatePresence mode="popLayout">
            {grouped?.map((group) => (
              <div key={group?._id} className="mb-2 ">
                {/* Month separator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="sticky top-0 z-[5] mb-2 mx-auto max-w-6xl px-4 flex items-center gap-3 py-2 "
                >
                  <span className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                    {group.label}
                  </span>
                  {/* <span className="h-px flex-1 bg-gray-200" /> */}
                </motion.div>

                <div className="mb- space-y- w-fu">
                  {group?.events.map((event, i) => (
                    <EventCard
                      key={event._id}
                      event={event}
                      index={i}
                      onView={setSelectedEvent}
                    />
                  ))}
                </div>
              </div>
            ))}
          </AnimatePresence>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 text-center text-gray-400">
            No events found for this filter.
          </motion.div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="flex justify-center pb-10 pt-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-semibold transition-all duration-300"
              style={{ borderColor: AMBER, color: AMBER }}
            >
              Load More
              <ChevronDownIcon size={16} />
            </motion.button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
      </AnimatePresence>

      <Footer />
    </section>
  );
};

export default Events2;