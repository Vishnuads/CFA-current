import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Building2, GraduationCap, Users, X, ImageIcon } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import axios from 'axios'
import BASE_URL from '@/api'

const ACCENT = '#ffac26'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay },
  }),
}

const getInitials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

// Placement image fields store relative paths like "/uploads/students/xyz.png".
// Prefix them with BASE_URL so <img> tags can actually load them.
const resolveImg = (path) => (path ? `${BASE_URL}${path}` : null)

const PlacementCard = ({ person, idx, onOpenGallery }) => {
  const hasWork = person.workImages?.length > 0

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, delay: idx * 0.05, ease: 'easeOut' }}
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden transition-colors duration-300 hover:border-[#ffac26]/40"
    >
      {/* accent glow on hover */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 z-0"
        style={{ backgroundColor: ACCENT }}
      />

      <div className="relative p-5 sm:p-6">
        <div className="flex items-start gap-4">
          {/* Avatar: student photo if available, else initials */}
          <div className="relative shrink-0 w-14 h-14 sm:w-auto sm:h-34 rounded-md overflow-hidden ring-1 ring-white/10">
            {person.studentImage ? (
              <img
                src={resolveImg(person.studentImage)}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-20 h-24  flex items-center justify-center font-bebas text-lg sm:text-xl tracking-wide"
                style={{ backgroundColor: `${ACCENT}20`, color: ACCENT }}
              >
                {getInitials(person.name)}
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="font-onest font-semibold text-white text-base sm:text-lg leading-snug truncate">
              {person.name}
            </h3>
            <div className="flex items-center gap-1.5 mt-1">
              <Briefcase size={13} style={{ color: ACCENT }} className="shrink-0" />
              <p className="font-onest text-xs sm:text-sm text-white/80 leading-snug">
                {person.role}
              </p>
            </div>
          </div>
        </div>

        {/* Company + logo */}
        <div className="flex items-center gap-2 mt-3.5 pt-3.5 border-t border-white/10">
          {person.companyLogo ? (
            <img
              src={resolveImg(person.companyLogo)}
              alt={person.company}
              className="w-6 h-6 sm:w-auto sm:h-14 object-cove rounded-full bg-white/5 p-1 shrink-0"
            />
          ) : (
            <div className='p-2.5 border border-gray-500 rounded-full'>
            <Building2 size={16} className="text-[#8b8b8b] " />
            </div>
          )}
          <div>
            <p className="font-onest text-xs sm:text-sm text-[#d2d0d0] leading-relaxed">
              {person.company}
            </p>
            {person.note && (
              <p className="font-onest text-xs sm:text-sm text-[#8b8b8b] italic leading-snug mt-1">
                {person.note}
              </p>
            )}
          </div>
        </div>

        {/* Type tag (acting dept) */}
        {person.type && (
          <span
            className="inline-block mt-3 text-[10px] sm:text-[11px] font-onest font-medium uppercase tracking-wide px-2.5 py-1 rounded-full border border-white/10 text-white/70"
          >
            {person.type}
          </span>
        )}
      </div>

      {/* Work images strip */}
      {hasWork && (
        <button
          // onClick={() => onOpenGallery(person)}
          className="relative w-full flex gap-3 px-5 sm:px-6 pb-5 sm:pb-6 -mt-1 group/gallery"
        >
          {person.workImages.slice(0, 3).map((img, i) => (
            <div
              key={i}
              className="relative flex h-8 sm:h-12 w-auto "
            >
              <img
                src={resolveImg(img)}
                alt={`${person.name} work ${i + 1}`}
                className="w-full h-full transition-transform duration-500 group-hover/gallery:scale-110"
              />
              {i === 2 && person.workImages.length > 3 && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white text-xs font-onest font-semibold">
                    +{person.workImages.length - 3}
                  </span>
                </div>
              )}
            </div>
          ))}
          {/* <div
            className="absolute bottom-6 sm:bottom-7 right-6 sm:right-7 flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-onest font-medium text-[#050505] opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300"
            style={{ backgroundColor: ACCENT }}
          >
            <ImageIcon size={10} />
            View
          </div> */}
        </button>
      )}
    </motion.div>
  )
}

// Simple lightbox for a person's work images
const WorkGalleryModal = ({ person, onClose }) => {
  const [active, setActive] = useState(0)

  if (!person) return null
  const images = (person.workImages || []).map(resolveImg)

  return (
    <AnimatePresence>
      {person && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-4 py-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-200"
            >
              <X size={16} />
            </button>

            <div className="relative h-64 sm:h-80 md:h-96">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={images[active]}
                  alt={`${person.name} work ${active + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(5,5,5,0.9) 100%)' }}
              />
              <div className="absolute bottom-4 left-4">
                <h3 className="font-bebas text-2xl text-white tracking-wide">{person.name}</h3>
                <p className="font-onest text-xs sm:text-sm text-white/70">{person.role}</p>
              </div>
            </div>

            {images.length > 1 && (
              <div className="flex gap-2 p-4 overflow-x-auto scrollbar-hide">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-colors duration-300 ${active === i ? 'border-[#ffac26]' : 'border-white/10 hover:border-white/30'
                      }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const Placements = () => {
  const [placements, setPlacements] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeDept, setActiveDept] = useState('All')
  const [galleryPerson, setGalleryPerson] = useState(null)

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/placements/get`)
        setPlacements(res.data.data || [])
      } catch (err) {
        console.error('Failed to load placements:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchPlacements()
  }, [])

  // Only show active placements on the public site
  const activePlacements = useMemo(
    () => placements.filter((p) => p.isActive),
    [placements]
  )

  // Group flat API list into { "Department Name": [placements...] },
  // same shape the old placementsData object had, so the rest of the
  // JSX below (which was written for that shape) doesn't need to change.
  const placementsByDept = useMemo(() => {
    return activePlacements.reduce((acc, person) => {
      const deptName =
        typeof person.department === 'string'
          ? person.department
          : person.department?.name || 'Other'

      if (!acc[deptName]) acc[deptName] = []
      acc[deptName].push(person)
      return acc
    }, {})
  }, [activePlacements])

  const departments = useMemo(
    () => Object.keys(placementsByDept),
    [placementsByDept]
  )


  const visibleDepartments =
    activeDept === 'All' ? departments : [activeDept]

  return (
    <div className="bg-[#050505] relative text-white min-h-screen">
      <Navbar />

      {/* ===== Hero ===== */}
      <section className="relative pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-14">
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: ACCENT }}
        />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
            className="inline-block text-xs sm:text-sm font-onest font-semibold tracking-[0.2em] uppercase"
            style={{ color: ACCENT }}
          >
            Our Alumni
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.1}
            className="font-bebas text-3xl sm:text-4xl md:text-5xl mt-1 tracking-wide leading-tight"
          >
            Placements &amp; Industry Success
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.2}
            className="font-onest text-sm sm:text-base text-[#8b8b8b] max-w-xl mx-auto mt-2"
          >
            From directing sets to VFX pipelines, our students are working
            across every corner of the film industry.
          </motion.p>
        </div>

        {/* Stats */}
        {/* <div className="relative max-w-4xl mx-auto px-5 mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard icon={Users} value={stats.totalStudents} label="Students Placed" delay={0.3} />
          <StatCard icon={GraduationCap} value={stats.totalDepartments} label="Departments" delay={0.38} />
          <StatCard icon={Building2} value={stats.totalCompanies} label="Companies & Filmmakers" delay={0.46} />
        </div> */}
      </section>

      {loading ? (
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pb-24 text-center text-sm text-[#8b8b8b] font-onest">
          Loading placements...
        </div>
      ) : (
        <>
          {/* ===== Department Filter ===== */}
          <div className="sticky top-20 z-40 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 mt-6 mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
              // className="rounded-2xl border border-white/10 bg-[#050000]/80 backdrop-blur-xl p-3"
            >
              <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-hide justify-start sm:justify-center">
                {['All', ...departments].map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setActiveDept(dept)}
                    className={`relative shrink-0 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-onest font-medium whitespace-nowrap transition-all duration-300 border ${activeDept === dept
                        ? 'text-[#050505] border-transparent'
                        : 'text-[#8b8b8b] border-white/10 hover:text-white hover:border-white/25'
                      }`}
                    style={activeDept === dept ? { backgroundColor: ACCENT } : {}}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ===== Placement Sections ===== */}
          <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDept}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-14 sm:space-y-16"
              >
                {visibleDepartments.map((dept) => (
                  <div key={dept}>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex items-center gap-3 mb-5 sm:mb-6"
                    >
                      <span
                        className="h-6 w-1 rounded-full"
                        style={{ backgroundColor: ACCENT }}
                      />
                      <h2 className="font-bebas text-2xl sm:text-3xl tracking-wide">
                        {dept}
                      </h2>
                      <span className="font-onest text-xs text-[#8b8b8b] border border-white/10 rounded-full px-2.5 py-0.5">
                        {placementsByDept[dept].length} placed
                      </span>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                      {placementsByDept[dept].map((person, idx) => (
                        <PlacementCard
                          key={person._id}
                          person={person}
                          idx={idx}
                          onOpenGallery={setGalleryPerson}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </section>
        </>
      )}

      <WorkGalleryModal person={galleryPerson} onClose={() => setGalleryPerson(null)} />

      <Footer />
    </div>
  )
}

export default Placements