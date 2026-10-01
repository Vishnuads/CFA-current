import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import Rajesh from '../../assets/r-bg.png'
import Priya from '../../assets/p-bg.png'

const ACCENT = '#ffac26'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
}

const leaders = [
  {
    name: 'Rajesh Ravindren',
    role: 'Managing Director',
    image: Rajesh,
    paragraphs: [
      'In 2021, he envisioned Cinema Factory as a transformative force in the film industry, rooted in innovation and strategic collaboration. What began as an ambitious idea quickly gained momentum, evolving into a thriving hub for creativity and industry advancement.',
      "By 2023, this vision reached new heights with the establishment of BigBay Cinema Factory Pvt. Ltd., setting a remarkable benchmark in the world of cinema and entertainment. This milestone reflects Rajesh's unwavering commitment to progress and his ability to turn visionary concepts into impactful realities.",
      'This journey exemplifies his dedication to driving advancements across Education, Entertainment, and E-Commerce, positioning Cinema Factory as a pioneering entity shaping the future of the industry.',
    ],
    tag: 'Est. 2021',
  },
  {
    name: 'Priya Rajesh',
    role: 'Chairperson',
    image: Priya,
    paragraphs: [
      'A visionary leader with over 12 years of experience across advertising, media, film education, and digital innovation. A software engineering graduate turned marketing strategist, known for pioneering India\'s first AI-integrated film education curriculum and launching Cinema Factory Junior — a cinema education initiative for children aged 10+.',
      'Skilled in leading multidisciplinary teams, driving ROI-focused campaigns, and executing digital transformations. Adept at client relationship management and creative tool development, delivering measurable impact across cinema, FMCG, education, retail, and healthcare industries.',
    ],
    tag: '12+ Years Experience',
  },
]

const Leadership = () => {
  return (
    <section className="relative bg-[#050505] text-white overflow-hidden py-16 sm:py-20 md:py-28">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-175 h-100 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: ACCENT }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        {/* <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
            <span
              className="text-xs sm:text-sm font-onest font-semibold tracking-wide uppercase"
              style={{ color: ACCENT }}
            >
              The Vision Behind Cinema Factory
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="font-bebas text-3xl sm:text-4xl md:text-5xl tracking-wide leading-tight"
          >
            Leadership
          </motion.h2>
        </motion.div> */}

        {/* Leaders */}
        <div className="flex flex-col gap-20 sm:gap-24 md:gap-32">
          {leaders.map((leader, idx) => {
            const reversed = idx % 2 === 1
            return (
              <div
                key={leader.name}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center ${
                  reversed ? 'md:[direction:rtl]' : ''
                }`}
              >
                {/* ===== Image ===== */}
                <motion.div
                  initial={{ opacity: 0, x: reversed ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className={`relative md:col-span-5 [direction:ltr]`}
                >
                  <div className="relative w-full max-w-xs sm:max-w-sm mx-auto md:mx-0">
                    {/* accent frame offset behind image */}
                    <div
                      className={`absolute -z-10 w-full h-full rounded-2xl borde ${
                        reversed ? '-bottom-4 -left-4' : '-bottom-4 -right-4'
                      }`}
                      style={{ borderColor: `${ACCENT}50` }}
                    />
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.4 }}
                      className="relative rounded-2xl w-[90%] mx-auto h-auto overflow-hidden borde border-white/10 shadow-2xl shadow-black/60"
                    >
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover "
                      />
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            'linear-gradient(180deg, transparent 60%, rgba(5,5,5,0.6) 100%)',
                        }}
                      />
                    </motion.div>

                    {/* floating tag */}
                    {/* <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className={`absolute -top-3 ${
                        reversed ? '-right-3' : '-left-3'
                      } px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-onest font-semibold uppercase tracking-wide text-[#050505] shadow-lg`}
                      style={{ backgroundColor: ACCENT }}
                    >
                      {leader.tag}
                    </motion.div> */}
                  </div>
                </motion.div>

                {/* ===== Content ===== */}
                <motion.div
                  initial={{ opacity: 0, x: reversed ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                  className="md:col-span-7 [direction:ltr] relative"
                >
                  <Quote
                    size={40}
                    className="mb-3 opacity-15"
                    style={{ color: ACCENT }}
                  />

                  <h3 className="font-bebas text-3xl sm:text-4xl md:text-5xl tracking-wide leading-tight text-white">
                    {leader.name}
                  </h3>
                  <p
                    className="mt-1.5 font-onest text-xs sm:text-sm font-semibold uppercase tracking-[0.15em]"
                    style={{ color: ACCENT }}
                  >
                    {leader.role}
                  </p>

                  <div className="mt-5 space-y-4">
                    {leader.paragraphs.map((p, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                        className="font-onest text-sm sm:text-base text-[#8b8b8b] leading-relaxed"
                      >
                        {p}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Leadership