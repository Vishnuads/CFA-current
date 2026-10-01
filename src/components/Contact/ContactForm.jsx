import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Mail, Phone, User, MessageSquare, Send, Check,
} from 'lucide-react'
import axios from 'axios'
import BASE_URL from '@/api'

const ACCENT = '#FFAC26'


const subjects = [
    'Admissions Enquiry',
    'Course Information',
    'Campus Visit',
    'Partnership / Collaboration',
    'Something Else',
]

function FloatField({ icon: Icon, label, name, type = 'text', value, onChange, error, as = 'input', children }) {
    const filled = value && value.length > 0
    const Tag = as

    return (
        <div className="relative">
            <div className="relative">
                <Icon className="absolute left-4 top-4 w-4 h-4 text-white/40 z-10 pointer-events-none" />
                <Tag
                    id={name}
                    name={name}
                    type={as === 'input' ? type : undefined}
                    value={value}
                    onChange={onChange}
                    rows={as === 'textarea' ? 4 : undefined}
                    placeholder=" "
                    className={`peer w-full pl-11 pr-4 pt-5 pb-2 bg-white/[0.03] border rounded-xl font-onest text-sm text-white placeholder-transparent focus:outline-none focus:ring-offset-[#050505] transition-all duration-300 ${as === 'textarea' ? 'resize-none' : ''
                        } ${error
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-white/10 focus:border-[#FFAC26] focus:ring-[#FFAC26]'
                        }`}
                >
                    {children}
                </Tag>
                <label
                    htmlFor={name}
                    className={`absolute left-11 font-onest transition-all duration-200 pointer-events-none ${filled
                        ? 'top-1.5 text-[10px] tracking-wide'
                        : 'top-4 text-sm text-white/40'
                        }`}
                    style={filled ? { color: ACCENT } : undefined}
                >
                    {label}
                </label>
            </div>
            {error && <p className="text-red-500 text-xs mt-1.5 font-onest">{error}</p>}
        </div>
    )
}

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: 'easeOut', delay },
    }),
}

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', about: subjects[0], message: '',
    })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    }

    const validate = () => {
        const e = {}
        if (!formData.name.trim()) e.name = 'Please tell us your name'
        if (!formData.email.trim()) e.email = 'Email is required'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Please enter a valid email'
        if (!formData.phone.trim()) e.phone = 'Mobile number is required'
        else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) e.phone = 'Please enter a valid 10-digit number'
        if (!formData.message.trim()) e.message = "Tell us a little about what you're looking for"
        return e
    }

    // const SHEET_ENDPOINT = 'https://script.google.com/a/macros/cinemafactory.co.in/s/AKfycbwRuCixQplGcEuN23iLEdi-xi5DScIG1gA0EtB9WH9HG0pbDSK4RtLhMti8F5LEEe28/exec';

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const newErrors = validate()
    //     if (Object.keys(newErrors).length > 0) {
    //         setErrors(newErrors)
    //         return
    //     }
    //     try {
    //         await fetch(SHEET_ENDPOINT, {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    //             body: JSON.stringify(formData),
    //         })

    //         setFormData({ name: '', email: '', phone: '', subject: subjects[0], message: '' })
    //         setSubmitted(true);
    //         console.log('Contact form submitted')
    //     }
    //     catch (error) {
    //         console.log('Submission failed:', error)
    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newErrors = validate()
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }
        try {
            await axios.post(`${BASE_URL}/api/contact/create`, formData);
            setFormData({ name: '', email: '', phone: '', about: subjects[0], message: '' })
            setSubmitted(true);
            console.log('Contact form submitted')

        } catch (err) {
            console.log('Submission failed:', err)
        }

    }


    return (
        <>
            <section className='w-full'>

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    custom={0.2}
                    className=" card-border relative bg-white/[0.02] p-6 sm:p-8 md:p-10 overflow-hidden"
                >
                    <div
                        className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-60"
                        style={{ background: ACCENT }}
                    />

                    <AnimatePresence mode="wait">
                        {submitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.35, ease: 'easeOut' }}
                                className="relative text-center py-16"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5"
                                    style={{ backgroundColor: `${ACCENT}25` }}
                                >
                                    <Check className="w-8 h-8" style={{ color: ACCENT }} />
                                </motion.div>
                                <h3 className="font-bebas text-2xl sm:text-3xl mb-2">Message Sent!</h3>
                                <p className="font-onest text-[#8b8b8b] text-sm sm:text-base max-w-sm mx-auto">
                                    Thanks for reaching out, {formData.name.split(' ')[0] || 'there'}.
                                    We'll get back to you within one working day.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onSubmit={handleSubmit}
                                className="relative space-y-4"
                            >
                                <h3 className="font-bebas text-2xl sm:text-3xl mb-1">Send a Message</h3>
                                <p className="font-onest text-sec text-sm mb-5">
                                    Fill in the form and we'll take it from there.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <FloatField
                                        icon={User} label="Full Name" name="name" type="text"
                                        value={formData.name} onChange={handleChange} error={errors.name}
                                    />
                                    <FloatField
                                        icon={Phone} label="Mobile Number" name="phone" type="tel"
                                        value={formData.phone} onChange={handleChange} error={errors.phone}
                                    />
                                </div>

                                <FloatField
                                    icon={Mail} label="Email Address" name="email" type="email"
                                    value={formData.email} onChange={handleChange} error={errors.email}
                                />

                                {/* Subject — pill choices for a more creative feel than a plain select */}
                                <div>
                                    <p className="font-onest text-xs uppercase tracking-widest text-white/40 mb-2.5">
                                        What's this about?
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {subjects.map((s) => {
                                            const active = formData.about === s
                                            return (
                                                <button
                                                    type="button"
                                                    key={s}
                                                    onClick={() => setFormData((p) => ({ ...p, about: s }))}
                                                    className={`px-3.5 py-2 rounded-full text-xs font-onest border transition-all duration-200 ${active
                                                        ? 'text-[#050505] font-semibold border-transparent'
                                                        : 'border-white/15 text-white/60 hover:border-[#FFAC26]/60 hover:text-white'
                                                        }`}
                                                    style={active ? { backgroundColor: ACCENT } : undefined}
                                                >
                                                    {s}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>

                                <FloatField
                                    icon={MessageSquare} label="Your Message" name="message" as="textarea"
                                    value={formData.message} onChange={handleChange} error={errors.message}
                                />

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.97 }}
                                    type="submit"
                                    className="w-full cursor-pointer mt-2 flex items-center justify-center gap-2 px-4 py-3.5 rounded-3xl text-[#050505] font-onest font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-offset-[#050505] focus:ring-[#FFAC26]"
                                    style={{ backgroundColor: ACCENT }}
                                >
                                    Send Message
                                    <Send size={16} />
                                </motion.button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </section>
        </>
    )
}

export default ContactForm
