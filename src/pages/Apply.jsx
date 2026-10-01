import React, { useState } from 'react'
import FormImage from '@/assets/apply.webp'
import {
    Mail, Phone, Calendar, User, BookOpen, ChevronDown, ChevronLeft,
    Users, MapPin, Building2, Globe2, Check, ArrowRight, ArrowLeft,
    ReceiptText, Sparkles
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import axios from 'axios'
import BASE_URL from '@/api'

const ACCENT = '#FFAC26'

// ── Course + fee data ────────────────────────────────────────────────────

const courses = [
    'Direction & Screenplay',
    'Cinematography',
    'Editing & DI',
    'Stage Unreal Virtual Production',
    'Advance Virtual Production',
    'Acting',
    'Photography',
]

const tuitionFees = {
    'Direction & Screenplay': 45000,
    'Cinematography': 45000,
    'Editing & DI': 45000,
    'Stage Unreal Virtual Production': 45000,
    'Advance Virtual Production': 45000,
    'Acting': 45000,
    'Photography': 30000,
}

const enrollmentFee = 5000
const admissionFee = 45000

const paymentOptions = [
    { key: 'admission', label: 'Admission Fee', amount: admissionFee, note: 'Full admission fee, paid upfront' },
    { key: 'enrollment', label: 'Enrollment Fee', amount: enrollmentFee, note: 'Reserve your seat now, pay the rest later' },
]

const genders = ['Male', 'Female', 'Other', 'Prefer not to say']

const formatINR = (n = 0) => `₹${n.toLocaleString('en-IN')}`

// ── Animation variants ───────────────────────────────────────────────────

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut', delay },
    }),
}

const stepVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40, transition: { duration: 0.25, ease: 'easeIn' } }),
}

// ── Steps meta ───────────────────────────────────────────────────────────

const steps = [
    { key: 'personal', label: 'Personal', icon: User },
    { key: 'family', label: 'Family & Address', icon: Users },
    { key: 'course', label: 'Course', icon: BookOpen },
    { key: 'review', label: 'Review', icon: ReceiptText },
]

// ── Reusable field shell ─────────────────────────────────────────────────

function Field({ label, htmlFor, error, children }) {
    return (
        <div>
            <label htmlFor={htmlFor} className="block font-onest font-semibold text-sm sm:text-base mb-2">
                {label}
            </label>
            {children}
            {error && <p className="text-red-500 text-xs sm:text-sm mt-1 font-onest">{error}</p>}
        </div>
    )
}

function inputClasses(hasError) {
    return `w-full pl-10 pr-4 py-2.5 sm:py-3 bg-[#313131] border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-[#050505] transition-all duration-300 font-onest text-sm sm:text-base placeholder:text-[#6b6b6b] ${hasError
        ? 'border-red-500 focus:ring-red-500'
        : 'border-[#ffac26] focus:border-[#FFAC26] focus:ring-[#FFAC26]'
        }`
}

// ── Component ────────────────────────────────────────────────────────────

const Apply = () => {
    const [stepIndex, setStepIndex] = useState(0)
    const [direction, setDirection] = useState(1)
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        fatherName: '',
        fatherNumber: '',
        age: '',
        gender: 'Male',
        dob: '',
        address: '',
        city: '',
        state: '',
        country: '',
        course: '',
        paymentOption: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    }

    const selectCourse = (course) => {
        setFormData((prev) => ({ ...prev, course }))
        if (errors.course) setErrors((prev) => ({ ...prev, course: '' }))
    }

    const selectPaymentOption = (key) => {
        setFormData((prev) => ({ ...prev, paymentOption: key }))
        if (errors.paymentOption) setErrors((prev) => ({ ...prev, paymentOption: '' }))
    }

    const validateStep = (index) => {
        const e = {}

        if (index === 0) {
            if (!formData.fullName.trim()) e.fullName = 'Full name is required'
            if (!formData.email.trim()) e.email = 'Email is required'
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Please enter a valid email'
            if (!formData.phone.trim()) e.phone = 'Mobile number is required'
            else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) e.phone = 'Please enter a valid 10-digit number'
            if (!formData.age.trim()) e.age = 'Age is required'
            else if (!/^[0-9]{1,2}$/.test(formData.age) || Number(formData.age) <= 0) e.age = 'Please enter a valid age'
            if (!formData.dob) e.dob = 'Date of birth is required'
        }

        if (index === 1) {
            if (!formData.fatherName.trim()) e.fatherName = "Father's name is required"
            if (!formData.fatherNumber.trim()) e.fatherNumber = "Father's number is required"
            else if (!/^[0-9]{10}$/.test(formData.fatherNumber.replace(/[^0-9]/g, ''))) e.fatherNumber = 'Please enter a valid 10-digit number'
            if (!formData.address.trim()) e.address = 'Address is required'
            if (!formData.city.trim()) e.city = 'City is required'
            if (!formData.state.trim()) e.state = 'State is required'
            if (!formData.country.trim()) e.country = 'Country is required'
        }

        if (index === 2) {
            if (!formData.course) e.course = 'Please select a course to continue'
            if (!formData.paymentOption) e.paymentOption = 'Please choose an admission fee or enrollment fee to continue'
        }

        return e
    }

    const goNext = () => {
        const stepErrors = validateStep(stepIndex)
        if (Object.keys(stepErrors).length > 0) {
            setErrors(stepErrors)
            return
        }
        setErrors({})
        setDirection(1)
        setStepIndex((i) => Math.min(i + 1, steps.length - 1))
    }

    const goBack = () => {
        setErrors({})
        setDirection(-1)
        setStepIndex((i) => Math.max(i - 1, 0))
    }

    const goToStep = (index) => {
        // Only allow jumping to a step that's already been reached/validated
        if (index > stepIndex) return
        setDirection(index > stepIndex ? 1 : -1)
        setErrors({})
        setStepIndex(index)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${BASE_URL}/api/admission/create`, formData);

            const result = res.data
            if (!result.success) {
                alert(result.message);
                return;
            }

            const paymentData = result.data

            const options = {
                key: paymentData.rzp_key_id,
                amount: paymentData.amount * 100,
                currency: paymentData.currency,
                name: "Cinema Factory Academy",
                description: `Admission Fee - ${paymentData.course}`,
                order_id: paymentData.rzp_order_id,

                handler: async (res) => {
                    try {
                        console.log(res);

                        const verification = await axios.post(
                            `${BASE_URL}/api/admission/verify-payment`,
                            {
                                admissionId: paymentData.admissionID,

                                razorpay_order_id: res.razorpay_order_id,
                                razorpay_payment_id: res.razorpay_payment_id,
                                razorpay_signature: res.razorpay_signature,
                            }
                        );
                        const verificationResult = verification.data;
                        if (verificationResult.success) {
                            alert("Payment successful! Your admission is confirmed.");
                            setSubmitted(true);
                        } else {
                            alert(
                                verificationResult.message || "Payment verification failed."
                            );
                        }

                    } catch (error) {
                        console.error("Verification error:", error.response?.data || error.message);
                        alert("Payment verification failed. Please contact support.");
                    }
                },
                prefill: {
                    name: paymentData.fullName,
                    email: paymentData.email,
                    contact: paymentData.phone,
                },
                theme: {
                    color: "#ffac26",
                },
            };

            const rzpInstance = new window.Razorpay(options);

            rzpInstance.on("payment.failed", async (response) => {
                try {
                    console.log("Payment failed:", response.error);

                    await axios.post(
                        `${BASE_URL}/api/admission/failed-payment`,
                        {
                            admissionId: paymentData.admissionID,
                            errorCode: response.error.code,
                            errorDescription: response.error.description,
                        }
                    );

                    alert("Payment failed. You can try again.");
                } catch (error) {
                    console.error(
                        "Failed payment update error:",
                        error.response?.data || error.message
                    );
                }
            });

            rzpInstance.open();
        }
        catch (err) {
            console.log("Admission error", err);
        };
    }

    const courseFee = formData.course ? tuitionFees[formData.course] : 0
    const selectedPayment = paymentOptions.find((p) => p.key === formData.paymentOption)
    const payableNow = selectedPayment ? selectedPayment.amount : 0
    // const totalFee = formData.course ? courseFee + payableNow : 0

    const totalFee = formData.course ? payableNow : 0

    return (
        <>
            <section className="bg-[#050505] text-white ">
                <Navbar />
                <div className="w-full py-20 md:py-10">
                    {/* Header */}
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={fadeUp}
                        custom={0}
                        className="pt-8 sm:pt-12 md:pt-16 lg:pt-26 px-4 sm:px-6 lg:px-8"
                    >
                        <div className="text-center mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto">
                            <h2
                                className="uppercase font-onest font-bold text-xs sm:text-sm tracking-wider mb-2 sm:mb-3"
                                style={{ color: ACCENT }}
                            >
                                Admissions Open
                            </h2>
                            <h1 className="font-bebas text-3xl sm:text-4xl md:text-5xl leading-tight">
                                Start Your Filmmaking Journey Today
                            </h1>
                        </div>
                    </motion.div>

                    {/* Form Container */}
                    <div className="max-w-6xl mx-auto px-4 pb-12 sm:pb-16 md:pb-20">
                        <motion.div
                            initial="hidden"
                            animate="show"
                            variants={fadeUp}
                            custom={0.1}
                            className="relative grid grid-cols-1 lg:grid-cols-[40%_60%]  gap-6 bg-white/[0.02] border border-white/10 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl"
                        >
                            {/* ambient accent glow */}
                            <div
                                className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-80"
                                style={{ background: ACCENT }}
                            />

                            {/* ── Left panel — image + live summary, always visible on desktop ── */}
                            <div className="hidden lg:flex relative overflow-hidden flex-col">
                                <img
                                    src={FormImage}
                                    alt="Filmmaking in action"
                                    className="absolute inset-0 w-full h-full object-right object-cover"
                                />
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: `linear-gradient(180deg, rgba(255,172,38,0.10) 0%, rgba(5,5,5,0.35) 45%, rgba(5,5,5,0.92) 100%)`,
                                    }}
                                />

                                {/* live progress + fee summary card, floats over the image */}
                                <div className="relative mt-auto p-6 sm:p-8 w-full">
                                    <p className="font-onest text-xs uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
                                        Step {stepIndex + 1} of {steps.length}
                                    </p>
                                    <h3 className="font-bebas text-2xl sm:text-3xl mb-5">
                                        {steps[stepIndex].label}
                                    </h3>

                                    <AnimatePresence mode="wait">
                                        {formData.course ? (
                                            <motion.div
                                                key={formData.course + formData.paymentOption}
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -8 }}
                                                transition={{ duration: 0.3 }}
                                                className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-4 space-y-2"
                                            >
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Sparkles size={15} style={{ color: ACCENT }} />
                                                    <span className="font-onest text-sm font-semibold">{formData.course}</span>
                                                </div>
                                                {/* <div className="font-onest text-xs text-[#b5b5b5] flex justify-between">
                                                    <span>Course Fee</span><span>{formatINR(courseFee)}</span>
                                                </div> */}
                                                {selectedPayment ? (
                                                    <div className="font-onest text-xs text-[#b5b5b5] flex justify-between">
                                                        <span>{selectedPayment.label}</span><span>{formatINR(selectedPayment.amount)}</span>
                                                    </div>
                                                ) : (
                                                    <p className="font-onest text-xs text-[#8b8b8b] italic">
                                                        Choose admission or enrollment fee
                                                    </p>
                                                )}
                                                <div className="border-t border-white/10 pt-2 mt-2 flex justify-between font-onest text-sm font-bold" style={{ color: ACCENT }}>
                                                    <span>Total</span><span>{formatINR(totalFee)}</span>
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <p className="font-onest text-sm text-[#b5b5b5]">
                                                Fill in your details — your course fee breakdown will appear here once you pick a course.
                                            </p>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* ── Right panel — the actual stepper form ── */}
                            <div className="relative p-5 sm:p-6 md:p-8 flex flex-col justify-center">
                                <AnimatePresence mode="wait">
                                    {submitted ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.35, ease: 'easeOut' }}
                                            className="text-center py-12"
                                        >
                                            <div className="mb-6">
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                                                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                                                    style={{ backgroundColor: `${ACCENT}25` }}
                                                >
                                                    <Check className="w-8 h-8" style={{ color: ACCENT }} />
                                                </motion.div>
                                            </div>
                                            <h3 className="font-bebas text-2xl sm:text-3xl mb-2">
                                                Application Submitted!
                                            </h3>
                                            <p className="font-onest text-[#8b8b8b] text-sm sm:text-base mb-6">
                                                Thank you for applying to <span style={{ color: ACCENT }}>{formData.course}</span>.
                                                We'll review your application and contact you soon.
                                            </p>
                                            <div className="inline-block text-left rounded-xl border border-white/10 bg-[#111]/60 p-4">
                                                <div className="font-onest text-xs text-[#b5b5b5] flex justify-between gap-8">
                                                    <span>Total Payable</span>
                                                    <span className="font-semibold" style={{ color: ACCENT }}>{formatINR(totalFee)}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>

                                            {/* ── Stepper header ── */}
                                            <div className="flex items-center justify-between mb-8">
                                                {steps.map((s, i) => {
                                                    const StepIcon = s.icon
                                                    const isActive = i === stepIndex
                                                    const isDone = i < stepIndex
                                                    return (
                                                        <React.Fragment key={s.key}>
                                                            <button
                                                                type="button"
                                                                onClick={() => goToStep(i)}
                                                                disabled={i > stepIndex}
                                                                className="flex flex-col items-center gap-1.5 group"
                                                            >
                                                                <span
                                                                    className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 transition-all duration-300 ${isDone
                                                                        ? 'bg-[#FFAC26] border-[#FFAC26]'
                                                                        : isActive
                                                                            ? 'border-[#FFAC26] bg-transparent'
                                                                            : 'border-white/15 bg-transparent'
                                                                        }`}
                                                                >
                                                                    {isDone ? (
                                                                        <Check size={16} className="text-[#050505]" />
                                                                    ) : (
                                                                        <StepIcon size={15} className={isActive ? 'text-[#FFAC26]' : 'text-white/40'} />
                                                                    )}
                                                                </span>
                                                                <span
                                                                    className={`hidden sm:block font-onest text-[11px] tracking-wide ${isActive ? 'text-white' : 'text-white/40'
                                                                        }`}
                                                                >
                                                                    {s.label}
                                                                </span>
                                                            </button>
                                                            {i < steps.length - 1 && (
                                                                <span
                                                                    className={`flex-1 h-[2px] mx-2 rounded-full transition-colors duration-300 ${i < stepIndex ? 'bg-[#FFAC26]' : 'bg-white/10'
                                                                        }`}
                                                                />
                                                            )}
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </div>

                                            {/* ── Step content ── */}
                                            <form onSubmit={handleSubmit}>
                                                <AnimatePresence mode="wait" custom={direction}>

                                                    {/* Step 1 — Personal */}
                                                    {stepIndex === 0 && (
                                                        <motion.div
                                                            key="step-0"
                                                            custom={direction}
                                                            variants={stepVariants}
                                                            initial="enter"
                                                            animate="center"
                                                            exit="exit"
                                                            className="space-y-4"
                                                        >
                                                            <Field label="Full Name" htmlFor="fullName" error={errors.fullName}>
                                                                <div className="relative">
                                                                    <User className="absolute left-3 top-3.5 w-4 h-4 text-[#8b8b8b]" />
                                                                    <input
                                                                        type="text" id="fullName" name="fullName"
                                                                        value={formData.fullName} onChange={handleChange}
                                                                        placeholder="Enter your full name"
                                                                        className={inputClasses(errors.fullName)}
                                                                    />
                                                                </div>
                                                            </Field>

                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                                <Field label="Email Address" htmlFor="email" error={errors.email}>
                                                                    <div className="relative">
                                                                        <Mail className="absolute left-3 top-3.5 w-4 h-4 text-[#8b8b8b]" />
                                                                        <input
                                                                            type="email" id="email" name="email"
                                                                            value={formData.email} onChange={handleChange}
                                                                            placeholder="you@example.com"
                                                                            className={inputClasses(errors.email)}
                                                                        />
                                                                    </div>
                                                                </Field>

                                                                <Field label="Mobile Number" htmlFor="phone" error={errors.phone}>
                                                                    <div className="relative">
                                                                        <Phone className="absolute left-3 top-3.5 w-4 h-4 text-[#8b8b8b]" />
                                                                        <input
                                                                            type="tel" id="phone" name="phone"
                                                                            value={formData.phone} onChange={handleChange}
                                                                            placeholder="10-digit number"
                                                                            className={inputClasses(errors.phone)}
                                                                        />
                                                                    </div>
                                                                </Field>
                                                            </div>

                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                                <Field label="Age" htmlFor="age" error={errors.age}>
                                                                    <div className="relative">
                                                                        <User className="absolute left-3 top-3.5 w-4 h-4 text-[#8b8b8b]" />
                                                                        <input
                                                                            type="number" id="age" name="age" min="1" max="99"
                                                                            value={formData.age} onChange={handleChange}
                                                                            placeholder="e.g. 21"
                                                                            className={inputClasses(errors.age)}
                                                                        />
                                                                    </div>
                                                                </Field>

                                                                <Field label="Date of Birth" htmlFor="dob" error={errors.dob}>
                                                                    <div className="relative">
                                                                        <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-[#8b8b8b] pointer-events-none" />
                                                                        <input
                                                                            type="date" id="dob" name="dob"
                                                                            value={formData.dob} onChange={handleChange}
                                                                            className={`${inputClasses(errors.dob)} [color-scheme:dark]`}
                                                                        />
                                                                    </div>
                                                                </Field>
                                                            </div>

                                                            <Field label="Gender" htmlFor="gender">
                                                                <div className="flex flex-wrap gap-2">
                                                                    {genders.map((g) => (
                                                                        <button
                                                                            type="button"
                                                                            key={g}
                                                                            onClick={() => setFormData((p) => ({ ...p, gender: g }))}
                                                                            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-onest border transition-all cursor-pointer duration-200 ${formData.gender === g
                                                                                ? 'bg-[#FFAC26] border-[#FFAC26] text-[#050505] font-semibold'
                                                                                : 'border-white/15 text-white/70 hover:border-[#FFAC26]/60'
                                                                                }`}
                                                                        >
                                                                            {g}
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </Field>
                                                        </motion.div>
                                                    )}

                                                    {/* Step 2 — Family & Address */}
                                                    {stepIndex === 1 && (
                                                        <motion.div
                                                            key="step-1"
                                                            custom={direction}
                                                            variants={stepVariants}
                                                            initial="enter"
                                                            animate="center"
                                                            exit="exit"
                                                            className="space-y-4"
                                                        >
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                                <Field label="Father's Name" htmlFor="fatherName" error={errors.fatherName}>
                                                                    <div className="relative">
                                                                        <Users className="absolute left-3 top-3.5 w-4 h-4 text-[#8b8b8b]" />
                                                                        <input
                                                                            type="text" id="fatherName" name="fatherName"
                                                                            value={formData.fatherName} onChange={handleChange}
                                                                            placeholder="Enter father's name"
                                                                            className={inputClasses(errors.fatherName)}
                                                                        />
                                                                    </div>
                                                                </Field>

                                                                <Field label="Father's Number" htmlFor="fatherNumber" error={errors.fatherNumber}>
                                                                    <div className="relative">
                                                                        <Phone className="absolute left-3 top-3.5 w-4 h-4 text-[#8b8b8b]" />
                                                                        <input
                                                                            type="tel" id="fatherNumber" name="fatherNumber"
                                                                            value={formData.fatherNumber} onChange={handleChange}
                                                                            placeholder="10-digit number"
                                                                            className={inputClasses(errors.fatherNumber)}
                                                                        />
                                                                    </div>
                                                                </Field>
                                                            </div>

                                                            <Field label="Address" htmlFor="address" error={errors.address}>
                                                                <div className="relative">
                                                                    <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-[#8b8b8b]" />
                                                                    <textarea
                                                                        id="address" name="address" rows={2}
                                                                        value={formData.address} onChange={handleChange}
                                                                        placeholder="House no, street, area"
                                                                        className={`${inputClasses(errors.address)} resize-none`}
                                                                    />
                                                                </div>
                                                            </Field>

                                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                                <Field label="City" htmlFor="city" error={errors.city}>
                                                                    <div className="relative">
                                                                        <Building2 className="absolute left-3 top-3.5 w-4 h-4 text-[#8b8b8b]" />
                                                                        <input
                                                                            type="text" id="city" name="city"
                                                                            value={formData.city} onChange={handleChange}
                                                                            placeholder="City"
                                                                            className={inputClasses(errors.city)}
                                                                        />
                                                                    </div>
                                                                </Field>

                                                                <Field label="State" htmlFor="state" error={errors.state}>
                                                                    <div className="relative">
                                                                        <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-[#8b8b8b]" />
                                                                        <input
                                                                            type="text" id="state" name="state"
                                                                            value={formData.state} onChange={handleChange}
                                                                            placeholder="State"
                                                                            className={inputClasses(errors.state)}
                                                                        />
                                                                    </div>
                                                                </Field>

                                                                <Field label="Country" htmlFor="country" error={errors.country}>
                                                                    <div className="relative">
                                                                        <Globe2 className="absolute left-3 top-3.5 w-4 h-4 text-[#8b8b8b]" />
                                                                        <input
                                                                            type="text" id="country" name="country"
                                                                            value={formData.country} onChange={handleChange}
                                                                            placeholder="Country"
                                                                            className={inputClasses(errors.country)}
                                                                        />
                                                                    </div>
                                                                </Field>
                                                            </div>
                                                        </motion.div>
                                                    )}

                                                    {/* Step 3 — Course selection with fee display */}
                                                    {stepIndex === 2 && (
                                                        <motion.div
                                                            key="step-2"
                                                            custom={direction}
                                                            variants={stepVariants}
                                                            initial="enter"
                                                            animate="center"
                                                            exit="exit"
                                                        >
                                                            <p className="font-onest font-semibold text-sm sm:text-base mb-3">
                                                                Select Your Course
                                                            </p>

                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[320px] overflow-y-auto pr-1">
                                                                {courses.map((c) => {
                                                                    const checked = formData.course === c
                                                                    return (
                                                                        <button
                                                                            type="button"
                                                                            key={c}
                                                                            onClick={() => selectCourse(c)}
                                                                            className={`relative flex cursor-pointer items-center gap-3 text-left p-3.5 rounded-xl border transition-all duration-200 ${checked
                                                                                ? 'border-[#FFAC26] bg-[#FFAC26]/10 shadow-[0_0_0_1px_rgba(255,172,38,0.4)]'
                                                                                : 'border-white/10 bg-[#151515] hover:border-white/25'
                                                                                }`}
                                                                        >
                                                                            <span
                                                                                className={`flex items-center justify-center shrink-0 w-5 h-5 rounded-md border-2 transition-colors duration-200 ${checked ? 'bg-[#FFAC26] border-[#FFAC26]' : 'border-white/25'
                                                                                    }`}
                                                                            >
                                                                                {checked && <Check size={13} className="text-[#050505]" />}
                                                                            </span>
                                                                            <span className="flex-1 min-w-0">
                                                                                <span className="block font-onest text-sm font-medium text-white truncate">{c}</span>
                                                                                <span className="block font-onest text-xs text-[#8b8b8b] mt-0.5">
                                                                                    Tuition {formatINR(tuitionFees[c])}
                                                                                </span>
                                                                            </span>
                                                                        </button>
                                                                    )
                                                                })}
                                                            </div>
                                                            {errors.course && (
                                                                <p className="text-red-500 text-xs sm:text-sm mt-2 font-onest">{errors.course}</p>
                                                            )}

                                                            {/* admission vs enrollment fee choice — only shown once a course is picked */}
                                                            <AnimatePresence>
                                                                {formData.course && (
                                                                    <motion.div
                                                                        initial={{ opacity: 0, height: 0 }}
                                                                        animate={{ opacity: 1, height: 'auto' }}
                                                                        exit={{ opacity: 0, height: 0 }}
                                                                        transition={{ duration: 0.3 }}
                                                                        className="overflow-hidden"
                                                                    >
                                                                        <p className="font-onest font-semibold text-sm sm:text-base mt-5 mb-3">
                                                                            Choose Payment Type
                                                                        </p>
                                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                                            {paymentOptions.map((opt) => {
                                                                                const checked = formData.paymentOption === opt.key
                                                                                return (
                                                                                    <button
                                                                                        type="button"
                                                                                        key={opt.key}
                                                                                        onClick={() => selectPaymentOption(opt.key)}
                                                                                        className={`relative cursor-pointer flex items-start gap-3 text-left p-3.5 rounded-xl border transition-all duration-200 ${checked
                                                                                            ? 'border-[#FFAC26] bg-[#FFAC26]/10 shadow-[0_0_0_1px_rgba(255,172,38,0.4)]'
                                                                                            : 'border-white/10 bg-[#151515] hover:border-white/25'
                                                                                            }`}
                                                                                    >
                                                                                        <span
                                                                                            className={`flex items-center justify-center shrink-0 w-5 h-5 mt-0.5 rounded-md border-2 transition-colors duration-200 ${checked ? 'bg-[#FFAC26] border-[#FFAC26]' : 'border-white/25'
                                                                                                }`}
                                                                                        >
                                                                                            {checked && <Check size={13} className="text-[#050505]" />}
                                                                                        </span>
                                                                                        <span className="flex-1 min-w-0">
                                                                                            <span className="flex items-baseline justify-between gap-2">
                                                                                                <span className="block font-onest text-sm font-medium text-white">{opt.label}</span>
                                                                                                <span className="block font-onest text-sm font-semibold shrink-0" style={{ color: ACCENT }}>
                                                                                                    {formatINR(opt.amount)}
                                                                                                </span>
                                                                                            </span>
                                                                                            <span className="block font-onest text-xs text-[#8b8b8b] mt-0.5">
                                                                                                {opt.note}
                                                                                            </span>
                                                                                        </span>
                                                                                    </button>
                                                                                )
                                                                            })}
                                                                        </div>
                                                                        {errors.paymentOption && (
                                                                            <p className="text-red-500 text-xs sm:text-sm mt-2 font-onest">{errors.paymentOption}</p>
                                                                        )}
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>

                                                            {/* live fee breakdown, reflects the chosen payment type */}
                                                            <AnimatePresence>
                                                                {formData.course && selectedPayment && (
                                                                    <motion.div
                                                                        initial={{ opacity: 0, height: 0 }}
                                                                        animate={{ opacity: 1, height: 'auto' }}
                                                                        exit={{ opacity: 0, height: 0 }}
                                                                        transition={{ duration: 0.3 }}
                                                                        className="overflow-hidden"
                                                                    >
                                                                        <div className="mt-4 rounded-xl border border-[#FFAC26]/30 bg-[#FFAC26]/[0.06] p-4 space-y-1.5">
                                                                            {/* <div className="flex justify-between font-onest text-sm text-white/80">
                                                                                <span>Course Fee</span><span>{formatINR(courseFee)}</span>
                                                                            </div> */}
                                                                            <div className="flex justify-between font-onest text-sm text-white/80">
                                                                                <span>{selectedPayment.label}</span><span>{formatINR(selectedPayment.amount)}</span>
                                                                            </div>
                                                                            <div className="border-t border-white/10 pt-2 mt-1 flex justify-between font-onest text-base font-bold" style={{ color: ACCENT }}>
                                                                                <span>Total Payable</span><span>{formatINR(totalFee)}</span>
                                                                            </div>
                                                                        </div>
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </motion.div>
                                                    )}

                                                    {/* Step 4 — Review */}
                                                    {stepIndex === 3 && (
                                                        <motion.div
                                                            key="step-3"
                                                            custom={direction}
                                                            variants={stepVariants}
                                                            initial="enter"
                                                            animate="center"
                                                            exit="exit"
                                                            className="space-y-5"
                                                        >
                                                            <p className="font-onest font-semibold text-sm sm:text-base">
                                                                Review Your Application
                                                            </p>

                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 font-onest text-sm">
                                                                {[
                                                                    ['Full Name', formData.fullName],
                                                                    ['Email', formData.email],
                                                                    ['Mobile', formData.phone],
                                                                    ['Age', formData.age],
                                                                    ['Gender', formData.gender],
                                                                    ['Date of Birth', formData.dob],
                                                                    ["Father's Name", formData.fatherName],
                                                                    ["Father's Number", formData.fatherNumber],
                                                                    ['Address', formData.address],
                                                                    ['City', formData.city],
                                                                    ['State', formData.state],
                                                                    ['Country', formData.country],
                                                                ].map(([label, value]) => (
                                                                    <div key={label} className="flex justify-between border-b border-white/5 pb-2">
                                                                        <span className="text-white/50">{label}</span>
                                                                        <span className="text-white text-right ml-4 truncate">{value || '—'}</span>
                                                                    </div>
                                                                ))}
                                                            </div>

                                                            <div className="rounded-xl border border-[#FFAC26]/30 bg-[#FFAC26]/[0.06] p-4 space-y-1.5">
                                                                <div className="flex justify-between font-onest text-sm text-white">
                                                                    <span>Selected Course</span>
                                                                    <span className="font-semibold" style={{ color: ACCENT }}>{formData.course}</span>
                                                                </div>
                                                                <div className="flex justify-between font-onest text-sm text-white/80">
                                                                    <span>Course Fee</span><span>{formatINR(courseFee)}</span>
                                                                </div>
                                                                <div className="flex justify-between font-onest text-sm text-white/80">
                                                                    <span>{selectedPayment ? selectedPayment.label : 'Payment Type'}</span>
                                                                    <span>{formatINR(payableNow)}</span>
                                                                </div>
                                                                <div className="border-t border-white/10 pt-2 mt-1 flex justify-between font-onest text-base font-bold" style={{ color: ACCENT }}>
                                                                    <span>Total Payable</span><span>{formatINR(totalFee)}</span>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>

                                                {/* ── Nav buttons ── */}
                                                <div className="flex items-center gap-3 mt-7">
                                                    {stepIndex > 0 && (
                                                        <motion.button
                                                            type="button"
                                                            onClick={goBack}
                                                            whileHover={{ scale: 1.02 }}
                                                            whileTap={{ scale: 0.97 }}
                                                            className="flex items-center cursor-pointer gap-1.5 px-5 py-3 rounded-3xl border border-white/15 text-white/80 font-onest text-sm sm:text-base hover:border-white/30 transition-colors"
                                                        >
                                                            <ArrowLeft size={16} />
                                                            Back
                                                        </motion.button>
                                                    )}

                                                    {stepIndex < steps.length - 1 ? (
                                                        <motion.button
                                                            type="button"
                                                            onClick={goNext}
                                                            whileHover={{ scale: 1.02 }}
                                                            whileTap={{ scale: 0.97 }}
                                                            className="flex-1 flex cursor-pointer items-center justify-center gap-1.5 px-4 py-3 sm:py-3.5 rounded-3xl text-[#050505] font-onest font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all"
                                                            style={{ backgroundColor: ACCENT }}
                                                        >
                                                            Continue
                                                            <ArrowRight size={16} />
                                                        </motion.button>
                                                    ) : (
                                                        <motion.button
                                                            type="submit"
                                                            whileHover={{ scale: 1.02 }}
                                                            whileTap={{ scale: 0.97 }}
                                                            className="flex-1 px-4 cursor-pointer py-3 sm:py-3.5 rounded-3xl text-[#050505] font-onest font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#050505] focus:ring-[#FFAC26]"
                                                            style={{ backgroundColor: ACCENT }}
                                                        >
                                                            Submit Application
                                                        </motion.button>
                                                    )}
                                                </div>
                                            </form>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <Footer />
            </section>

        </>
    )
}

export default Apply