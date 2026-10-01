import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import B1 from '../assets/Book/b11.png'
import B2 from '../assets/Book/book11.jpeg'
import B3 from '../assets/Book/book2.jpg'
import { X, User, Mail, Phone, MapPin, BookOpen, Currency } from 'lucide-react'
import PDF from '../assets/Book/VP-book.pdf';
import axios from 'axios'
import BASE_URL from '@/api'

const ACCENT = '#ffac26'

const Book = () => {
  const images = [B1, B2, B3];
  const [image, setImage] = useState(B1);
  const activeIndex = images.indexOf(image);
  const [isOpen, setIsOpen] = useState(false);

  const details = [
    { label: 'Authors', value: 'CJ Rajkumar & Shiv Shankar' },
    { label: 'Publisher', value: 'Cinema Factory Academy' },
    { label: 'Published by', value: 'Rajesh Ravindran' },
    { label: 'Pages', value: '114' },
  ]

  const inputClasses = 'w-full pl-10 pr-4 py-1.5 sm:py-2.5 bg-[#353535]  border border-white/10 rounded-lg text-sm sm:text-base text-white placeholder:text-[#6b6b6b] outline-none transition-all duration-200 focus:border-[#ffac26] focus:ring-1 focus:ring-[#ffac26]'

  const initialForm = {
    name: '',
    email: '',
    phone: '',
    alternate: '',
    address: '',
    book: 'A Basic Guide to Virtual Production',
    price: 299,
    paymentStatus: 'pending',
  };

  const [form, setForm] = useState(initialForm);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${BASE_URL}/api/bookOrders/create`, form);

      const { order, dborderId, key } = res.data;

      // checkout options
      const options = {
        key: key,
        amount: order.amount,
        currency: order.currency,
        name: "Cinema Factory Academy",
        description: "A Basic guide to Virtual Production",
        order_id: order.id,

        handler: async (res) => {
          try {
            
            const response = await axios.post(`${BASE_URL}/api/bookOrders/verify-payment`, {
              rzp_order_id: res.razorpay_order_id,
              rzp_payment_id: res.razorpay_payment_id,
              rzp_signature: res.razorpay_signature,
              dborderId: dborderId,
            });

            if (response.data.success) {
              setForm(initialForm);
              setSuccess(true);
            } else {

            }
          } catch (err) {
            console.log("Payment verify failed ", err);
          }
        },

        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },

        theme: {
          color: "#ffac26"
        }
      };

      const rzpInstance = new window.Razorpay(options);

      rzpInstance.on("payment.failed", async(response) =>{
        try {
          console.log("Payment failed:", response.error);

          await axios.post(
            `${BASE_URL}/api/bookOrders/payment-failed`,
            {
              dborderId: dborderId,
            }
          );
          // alert("Payment failed. Please try again.");

        } catch (error) {
          console.error(
            "Failed to update payment status:",
            error
          );
        }
      });

      rzpInstance.open();

    }
    catch (err) {
      console.log("Book Order creation error:", err);
    }
  }

  return (
    <section className="bg-[#050505]  text-white min-h-screen overflow-hidden">
      <Navbar />

      <div className="relative max-w-6xl  mx-auto px-5 py-14 sm:py-16 md:py-20 lg:py-24">
        {/* ambient background glow */}
        <div
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 70%)` }}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_1fr] gap-14 lg:gap-16 items-center">

          {/* ===== Image column ===== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative flex flex-col items-center"
          >
            {/* glow platform behind the (dark) book */}
            <div className="relative flex justify-center w-full">
              <div
                className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full blur-3xl opacity-45"
                style={{ background: ACCENT }}
              />
              <AnimatePresence mode="wait">
                <motion.img
                  key={image}
                  src={image}
                  alt="Book cover"
                  initial={{ opacity: 0, scale: 0.94, rotate: -1.5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative z-1 w-full max-w-[260px] sm:max-w-[260px] rounded-lg shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8) ring- ring-white/10"
                />
              </AnimatePresence>
            </div>

            {/* floating thumbnail dock */}
            <div className="relative z-1 mt-6 flex items-center gap-4 rounded-full border border-white/80 bg-white/5 backdrop-blur-md px-2 py-2">
              {images.map((img, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setImage(img)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  className="relative rounded-full overflow-hidden border w-11 h-11 sm:w-12 sm:h-12"
                >
                  <img
                    src={img}
                    alt={`Book thumbnail ${idx + 1}`}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${activeIndex === idx ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                      }`}
                  />
                  {activeIndex === idx && (
                    <motion.span
                      layoutId="thumb-ring"
                      className="absolute inset-0 rounded-full ring-2"
                      style={{ boxShadow: `0 0 0 2px ${ACCENT}` }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* ===== Details column ===== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
              <span
                className="text-xs sm:text-sm font-onest tracking-[0.2em] uppercase"
                style={{ color: ACCENT }}
              >
                Now Available
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bebas leading-[1.1] ">
              A Basic Guide to{' '}
              <span className="relative inline-block">
                Virtual Production
              </span>
            </h1>

            <p className="text-[#8b8b8b] font-onest text-sm sm:text-base">
              By <span className="text-white font-medium">CJ Rajkumar</span>{' '}
              &{' '}
              <span className="text-white font-medium">Shiv Shankar</span>
            </p>

            <p className="text-white/80 font-onest leading-relaxed text-sm sm:text-md max-w-lg">
              India's first cinematography-driven and practical guide to
              Virtual Production and In-Camera VFX (ICVFX). From rear
              projection to LED volumes, this book connects traditional
              filmmaking with real-time virtual production workflows.
            </p>

            {/* stat-style detail grid */}
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-2 font-onest gap-4 sm:gap-0 sm:divide-x sm:divide-white/10">
              {details.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 + idx * 0.08 }}
                  className="sm:px- mb-3"
                >
                  <p className="text-[11px] uppercase tracking-wider text-[#8b8b8b] mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm sm:text-base font-semibold">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.55 }}
              className="mt-4 flex flex-wrap gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-full cursor-pointer font-semibold text-sm sm:text-base text-[#050505]"
                onClick={() => setIsOpen(true)}
                style={{ backgroundColor: ACCENT }}
              >
                Get the Book
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, borderColor: ACCENT, color: ACCENT }}
                whileTap={{ scale: 0.97 }}

                className="px-6 py-3 font-semibold text-sm cursor-pointer text-grayy"
              >
                <a href={PDF} target='_blank' rel="noopener noreferrer"> Read Sample</a>

              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {isOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          // onClick={onClose}
          className="fixed inset-0 z-50 bg-black/10 backdrop-blur-md flex items-center justify-center px-4 py-6"
        >
          {!success ?
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/40 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* ambient accent glow */}
              <div
                className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: ACCENT }}
              />

              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-[#8b8b8b] hover:text-white transition-colors duration-200"
              >
                <X size={16} />
              </button>

              <div className="relative p-4 sm:p-6">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="mb-4"
                >
                  <span
                    className="text-xs font-onest font-semibold tracking-[0.2em] uppercase"
                    style={{ color: ACCENT }}
                  >
                    Checkout
                  </span>
                  <h1 className="font-bebas text-3xl sm:text-4xl text-white mt-1 tracking-wide leading-tight">
                    Complete Your Purchase
                  </h1>

                  <div className="flex items-center gap-2 mt-1  w-fit">
                    <BookOpen size={18} style={{ color: ACCENT }} />
                    <span className="font-onest text-md text-[#8b8b8b]">
                      Book price —{' '}
                      <span className="text-white font-semibold">₹299</span>
                    </span>
                  </div>
                </motion.div>

                {/* Form */}
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="space-y-3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="relative"
                  >
                    <User className="absolute left-3 top-2.5 sm:top-3.5 w-4 h-4 text-[#8b8b8b]" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name*"
                      required
                      className={inputClasses}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.24 }}
                    className="relative"
                  >
                    <Mail className="absolute left-3 top-2.5 sm:top-3.5 w-4 h-4 text-[#8b8b8b]" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email*"
                      required
                      className={inputClasses}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.28 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"
                  >
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 sm:top-3.5 w-4 h-4 text-[#8b8b8b]" />
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone number*"
                        required
                        className={inputClasses}
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 sm:top-3.5 w-4 h-4 text-[#8b8b8b]" />
                      <input
                        type="tel"
                        name="alternate"
                        value={form.alternate}
                        onChange={handleChange}
                        placeholder="Alternative number*"
                        required
                        className={inputClasses}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.32 }}
                    className="relative"
                  >
                    <MapPin className="absolute left-3 top-2.5 sm:top-3.5 w-4 h-4 text-[#8b8b8b]" />
                    <textarea
                      name="address"
                      id="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="Enter your full address*"
                      rows={3}
                      required
                      className={`${inputClasses} resize-none`}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.36 }}
                    className="grid grid-cols-2 gap-3 pt-2"
                  >
                    <motion.button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="py-2.5 sm:py-3 rounded-lg font-onest font-medium text-sm sm:text-base text-[#cdcdcd] bg-[#353535] border border-white/10 hover:bg-white/10 hover:text-white transition-colors duration-200"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="py-2.5 sm:py-3 rounded-lg font-onest font-semibold text-sm sm:text-base text-[#050505] shadow-lg shadow-[#ffac26]/10 transition-shadow duration-200 hover:shadow-xl hover:shadow-[#ffac26]/20"
                      style={{ backgroundColor: ACCENT }}
                    >
                      Proceed to Payment
                    </motion.button>
                  </motion.div>
                </motion.form>
              </div>
            </motion.div>
            :
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* ambient accent glow */}
              <div
                className="pointer-events-none absolute -top-20 -left-20 w-60 h-60 rounded-full blur-3xl opacity-25"
                style={{ backgroundColor: ACCENT }}
              />

              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-[#8b8b8b] hover:text-white transition-colors duration-200"
              >
                <X size={16} />
              </button>

              <div className="relative flex flex-col items-center text-center px-6 py-12 sm:px-10 sm:py-14">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                  className="mb-6 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full"
                  style={{ backgroundColor: `${ACCENT}20` }}
                >
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10"
                    style={{ color: ACCENT }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>

                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                  className="text-xs font-onest font-semibold tracking-[0.2em] uppercase mb-2"
                  style={{ color: ACCENT }}
                >
                  Order Confirmed
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="font-bebas text-3xl sm:text-4xl text-white tracking-wide leading-tight"
                >
                  Thank You for Your Purchase!
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 }}
                  className="font-onest text-xs sm:text-sm text-[#8b8b8b] mt-3 max-w-sm"
                >
                  Your book is on its way! We've sent a confirmation to your email
                  with the order details and next steps.
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsOpen(false)}
                  className="mt-4 cursor-pointer  px-8 py-3 rounded-full font-onest font-semibold text-sm sm:text-base text-[#050505]"
                  style={{ backgroundColor: ACCENT }}
                >
                  Done
                </motion.button>
              </div>
            </motion.div>
          }
        </motion.div>
      }
      <Footer />
    </section>
  )
}

export default Book