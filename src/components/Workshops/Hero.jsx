import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, Award, Ticket } from 'lucide-react';
import Im from '../../assets/workshops/gimbal.jpg'
import PopupForm from './PopupForm';
import { workshopContext } from '../Context/WorkshopContext';
import BASE_URL from '@/api';
import Counter from './Counter';

const ACCENT = '#ffac26'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
}

const Hero = () => {

  const [isOpen, setIsopen] = useState(false);
  const { data } = useContext(workshopContext);
  const [edit, setEdit] = useState()
  // console.log(data);

  const today = new Date();

  const formattedToday = today.toLocaleDateString('en-CA');

  const nextWorkshop = data.filter((w) => w.isActive === true)
  // console.log(nextWorkshop);

  return (
    <>
      <section className="relative bg-[#050505] pt-25 text-white overflow-hidden py-18 sm:py-20 md:py-30">
        {/* ambient glow */}
        <div
          className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: ACCENT }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: ACCENT }}
        />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          {nextWorkshop.length > 0 &&
            nextWorkshop.map((workshop,idx) => (

              <div key={workshop._id} className="mb-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center">

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-center lg:text-left order-2 lg:order-1"
                >
                  <motion.div
                    variants={fadeUp}
                    custom={0}
                    className="inline-flex items-center gap-2 mb-4"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                    <span
                      className="text-xs sm:text-sm font-onest font-semibold tracking-[0.2em] uppercase"
                      style={{ color: ACCENT }}
                    >
                      {workshop.headline}
                    </span>
                  </motion.div>

                  <motion.h1
                    variants={fadeUp}
                    custom={0.1}
                    className="font-bebas text-3xl sm:text-4xl md:text-5xl  mb-3"
                  >
                    {workshop.title}
                  </motion.h1>

                  <p className='text-sec font-sm font-onest my-3'>
                    {workshop.desc}
                  </p>

                  {/* Key points */}
                  <motion.div
                    variants={fadeUp}
                    custom={0.2}
                    className=""
                  >
                    {workshop.points.map((p, idx) => {

                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.25 + idx * 0.08 }}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-l bg-white/[0.03 borde border-white/1"
                        >
                          <span
                            className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full"
                            style={{ backgroundColor: `${ACCENT}20` }}
                          >
                            <Award size={15} style={{ color: ACCENT }} />
                          </span>
                          <span className="font-onest text-xs sm:text-sm text-white/90 text-left">
                            {p}
                          </span>
                        </motion.div>
                      )
                    })}
                  </motion.div>

                  {/* Fee */}
                  <motion.div
                    variants={fadeUp}
                    custom={0.35}
                    className="flex items-center justify-center lg:justify-start gap-2 mt-4 mb-6"
                  >
                    <Ticket size={16} style={{ color: ACCENT }} />
                    <span className="font-onest text-sm text-[#8b8b8b]">
                      Entry Fee —{' '}
                      <span className="text-white font-semibold text-base">{workshop.fee == 0 ? "Free" : workshop.fee}</span>
                    </span>
                  </motion.div>

                  {/* Buttons */}
                  <motion.div
                    variants={fadeUp}
                    custom={0.45}
                    className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
                  >
                   
                    {formattedToday < workshop.date ?
                      <motion.button
                        onClick={() =>{ setIsopen(true); setEdit(idx)}}
                        whileHover={{ scale: 1.03 }}
                        // whileTap={{ scale: 0.97 }}
                        className="w-full sm:w-auto px-7 py-3 rounded-full font-onest font-semibold text-sm sm:text-base text-[#050505] shadow-lg shadow-[#ffac26]/10 hover:shadow-xl hover:shadow-[#ffac26]/20 transition-shadow duration-300 bg-gray-300"
                        style={{ backgroundColor: ACCENT }}
                      >
                        Book Now
                      </motion.button>
                      :
                      <motion.button
                        disabled
                        className="w-full sm:w-auto px-7 py-3 rounded-full font-onest font-semibold text-sm sm:text-base text-[#050505] shadow-lg shadow-[#ffac26]/10 hover:shadow-xl hover:shadow-[#ffac26]/20 transition-shadow duration-300 bg-gray-300"
                      >
                        Closed
                      </motion.button>
                    }

                    <motion.button
                      whileHover={{ scale: 1.03, borderColor: ACCENT }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3  font-onest font-medium text-sm sm:text-base text-grayy text-white transition-colors duration-300"
                    >
                      <CalendarDays size={16} />
                      {workshop.datelabel}
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* ===== Right: poster ===== */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="relative flex justify-center order-1 lg:order-2"
                >
                  <div
                    className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full blur-3xl opacity-25"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 w-full max-w-[260px] sm:max-w-[320px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
                  >
                    <img
                      src={`${BASE_URL}/${workshop.poster}`}
                      alt="Workshop poster"
                      className="w-full h-full object-cover aspect-3/4"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(180deg, transparent 60%, rgba(5,5,5,0.5) 100%)',
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            ))}
        </div>
        {isOpen && <PopupForm isOpen={isOpen} onClose={() => setIsopen(false)} id={edit} workshop={nextWorkshop} />}

      </section>
      <Counter targetDate={nextWorkshop[0]?.date} />
    </>
  )
}

export default Hero