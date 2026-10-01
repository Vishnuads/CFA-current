import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ACCENT = '#ffac26'

const getTimeLeft = (targetDate) => {
  const diff = +new Date(targetDate) - +new Date()
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0, ended: true }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
    ended: false,
  }
}

const TimeBlock = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ background: `radial-gradient(circle at 50% 0%, ${ACCENT}, transparent 70%)` }}
      />
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="font-bebas text-2xl sm:text-4xl md:text-5xl tracking-wide"
          style={{ color: ACCENT }}
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </AnimatePresence>
    </div>
    <span className="mt-2 sm:mt-3 font-onest text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#8b8b8b]">
      {label}
    </span>
  </div>
)

const Counter = ({
  targetDate ,
  eyebrow = "Workshop Starts In",
  title = "Don't Miss Out",
}) => {
  const [time, setTime] = useState(getTimeLeft(targetDate))
  
  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft(targetDate)), 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  if (time.ended) return null

  return (
    <section className="relative bg-[#050505] text-white pb-16 overflow-hidden">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: ACCENT }}
      />

      <div className="relative max-w-4xl mx-auto px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-8 sm:mb-10"
        >
          <span
            className="text-xs sm:text-sm font-onest font-semibold tracking-[0.2em] uppercase"
            style={{ color: ACCENT }}
          >
            {eyebrow}
          </span>
          <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl mt-2">{title}</h2>
        </motion.div>

        {time.ended ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-onest text-base sm:text-lg text-[#8b8b8b]"
          >
            This workshop has already started or ended.
          </motion.p>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="flex items-center justify-center gap-3 sm:gap-5 md:gap-7"
          >
            <TimeBlock value={time.days} label="Days" />
            {/* <span className="font-bebas text-2xl sm:text-4xl text-white/20 -mt-4 sm:-mt-6">:</span> */}
            <TimeBlock value={time.hours} label="Hours" />
            {/* <span className="font-bebas text-2xl sm:text-4xl text-white/20 -mt-4 sm:-mt-6">:</span> */}
            <TimeBlock value={time.mins} label="Mins" />
            {/* <span className="font-bebas text-2xl sm:text-4xl text-white/20 -mt-4 sm:-mt-6">:</span> */}
            <TimeBlock value={time.secs} label="Secs" />
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Counter