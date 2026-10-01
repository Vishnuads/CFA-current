import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router'

const CourseItems = ({ imgSrc, title, number, desc, link, toggle, isOpen }) => {
  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer "
      animate={{ width: isOpen ? '15rem' : '8rem' }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      onMouseEnter={toggle}
    >
      {/* Image with grayscale transition */}
      <motion.img
        src={imgSrc}
        alt={title}
        className="object-cover h-[80vh] w-full"
        animate={{ filter: isOpen ? 'grayscale(0%)' : 'grayscale(100%)' }}
        transition={{ duration: 0.5 }}
      />

      {/* Dark overlay — fades out when open */}
      <motion.div
        className="absolute inset-0 bg-black/30"
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Collapsed: vertical title */}
      <motion.div
        className="absolute font-bebas text-lg pt-5 inset-0 text-white text-center"
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.25 }}
      >
        {title}
      </motion.div>

      {/* Collapsed: large background number */}
      <motion.div
        className="absolute -bottom-4 -left-6 font-akira text-7xl text-white"
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.25 }}
      >
        {number}
      </motion.div>

      {/* Expanded: detail panel slides up */}
      <motion.div
        className="absolute bottom-0 w-full text-white bg-gradient-to-t from-[#FFAC26] via-[#FFAC26]/70 to-transparent p-3 pb-5 text-center space-y-3"
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : 16,
        }}
        transition={{ duration: 0.35, delay: isOpen ? 0.25 : 0 }}
      >
        <div className="font-bebas text-2xl">{title}</div>
        <p className="font-onest text-sm">{desc}</p>
        <Link to={link}>
          <button className="hover:scale-110 cursor-pointer backdrop-blur-md bg-white/20 px-4 py-2 text-sm rounded-3xl border border-white/70">
            View Course
          </button>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default CourseItems