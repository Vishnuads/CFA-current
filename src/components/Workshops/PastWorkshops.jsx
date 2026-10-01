import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { workshopContext } from '../Context/WorkshopContext'
import BASE_URL from '@/api'

const ACCENT = '#ffac26'


const PastWorkshops = ({
  eyebrow = 'Past Workshops',
  title = 'Where Stories Came to Life',
}) => {

  const { data } = useContext(workshopContext);

  return (
    <section className="relative bg-[#050505] text-white py-14 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span
              className="text-xs sm:text-sm font-onest font-semibold tracking-[0.2em] uppercase"
              style={{ color: ACCENT }}
            >
              {eyebrow}
            </span>
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl mt-1">{title}</h2>
          </motion.div>

          {/* Desktop nav arrows */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden sm:flex gap-2"
          >
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 hover:border-[#ffac26] hover:text-[#ffac26] transition-colors duration-300"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 hover:border-[#ffac26] hover:text-[#ffac26] transition-colors duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </motion.div> */}
        </div>

        <div className="grid sm:grid-cols-3  gap-4 sm:gap-5 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {data?.map((w, idx) => (
            w.isActive ||
             <motion.div
              key={w._id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="group relative rounded-xl overflow-hidden border border-white/10 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`${BASE_URL}/${w.poster}`}
                  alt={w.title}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 70%, rgba(5,5,5,0.9) 100%)',
                  }}
                />
                {/* <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"
                  style={{ background: `radial-gradient(circle at 50% 100%, ${ACCENT}, transparent 60%)` }}
                /> */}
              </div>

              <div className=" p-3 sm:p-5">
                <h3 className="font-onest font-semibold text-sm sm:text-lg text-white leading-snug">
                  {w.title}
                </h3>
                <span
                  className="block w-8 h-0.5 mt-2 rounded-full transition-all duration-300 group-hover:w-14"
                  style={{ backgroundColor: ACCENT }}
                />

                {/* <p className='text-gray-500 line-clamp-2 sm:text-sm text-xs pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, molestiae obcaecati! Consequatur a recusandae distinctio ut aliquam. Eligendi, consequuntur esse!</p> */}

                <div className="flex items-center text-sm mt-4 text-white/80 justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar size={15} color={ACCENT} />
                    <p>{w.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={15} color={ACCENT} />
                    <p>{w.location}</p>
                  </div>


                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default PastWorkshops