import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, Mail, Users, Film, Lock, MapPin } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import BASE_URL from "@/api";

const ACCENT = "#ffac26";

const PopupForm = ({ isOpen, onClose, workshop, id }) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    title: workshop[id].title,
    name: "",
    phone: "",
    email: "",
    amount: workshop[id].fee,
    location: "",
    userType: "",
    filmInterest: "",
  });


  const validate = () => {
    const errors = {};

    if (!formData.name?.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.phone) {
      errors.phone = "Phone number is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Enter a valid email";
    }

    if (!formData.location?.trim()) {
      errors.location = "Location is required";
    }

    if (!formData.userType) {
      errors.userType = "Please select a user type";
    }

    if (!formData.filmInterest) {
      errors.filmInterest = "Please select film interest";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handlePayment = async () => {

    if (!validate()) {
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${BASE_URL}/api/workshop-registration/create`, formData);
      const result = res.data;

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      const paymentData = result.data;

      if (paymentData.isFree) {
        toast.success("Workshop registered successfully!");
        onClose();
        return;
      }

      // Razorpay Checkout Options
      const options = {
        key: paymentData.key,
        amount: paymentData.amount,
        currency: paymentData.currency,
        name: "Cinema Factory Academy",
        description: paymentData.title,
        order_id: paymentData.razorpayOrderId,

        prefill: {
          name: paymentData.name,
          email: paymentData.email,
          contact: paymentData.phone,
        },

        theme: {
          color: "#ffac26",
        },

        // SUCCESSFUL PAYMENT
        handler: async function (res) {
          try {
            const verifyRes = await axios.post(
              `${BASE_URL}/api/workshop-registration/verify-payment`,
              {
                registrationId: paymentData.registrationId,
                razorpay_order_id: res.razorpay_order_id,
                razorpay_payment_id: res.razorpay_payment_id,
                razorpay_signature: res.razorpay_signature,
              }
            );
            if (verifyRes.data.success) {
              toast.success("Payment Successful!");
              onClose();
            } else {
              toast.error("Payment verification failed");
            }
          } catch (error) {
            console.error(error);

            toast.error(
              "Payment verification failed"
            );
          }
        },

        // PAYMENT MODAL CLOSED
        modal: {
          ondismiss: function () {
            toast.info(
              "Payment cancelled. Your registration is pending."
            );
          },
        },
      };

      // Open Razorpay Checkout
      const razorpay = new window.Razorpay(options);

      // PAYMENT FAILED
      razorpay.on("payment.failed", async function (res) {
        try {
          await axios.post(`${BASE_URL}/api/workshop-registration/failed-payment`,
            {
              registrationId: paymentData.registrationId,
              razorpay_payment_id: res.error.metadata?.payment_id,
            }
          );

          toast.error(
            "Payment Failed. Please try again."
          );
        } catch (error) {
          console.error("Failed payment update error:", error);
          toast.error(
            "Payment failed. Please contact support."
          );
        }
      }
      );

      razorpay.open();

      toast.success("Workshop registered successfully !!")

    } catch (error) {
      console.error("Payment Error:", error);
      toast.error(error.response?.data?.message || "Payment initialization failed");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full  bg-[#353535] border border-white/10 rounded-lg px-4 py-2 text-sm sm:text-base text-white placeholder:text-[#6b6b6b] outline-none transition-all duration-200 focus:border-[#ffac26] focus:ring-1 focus:ring-[#ffac26]";

  const radioClasses ="peer sr-only";

  const RadioOption = ({ name, value, label, checked }) => (
    <label
      className={`flex-1 flex items-center justify-center gap-2 cursor-pointer px-4 py-2.5 rounded-lg border text-sm font-onest transition-all duration-200 ${checked
        ? "border-[#ffac26] bg-[#ffac26]/10 text-white"
        : "border-white/10  bg-[#353535] text-[#c7c7c7] hover:border-white/25"
        }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        className={radioClasses}
      />
      {label}
    </label>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 p-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl bg-[#0a0a0a] border border-white/50 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh] no-scrollbar"
          >
            {/* ambient accent glow */}
            <div
              className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: ACCENT }}
            />

            <div className="relative md:p-5 p-4">
              {/* CLOSE */}
              <button
                onClick={onClose}
                className="absolute right-5 top-5 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-[#8b8b8b] hover:text-white transition-colors duration-200"
              >
                <X size={16} />
              </button>

              {/* HEADER */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-3 pr-8"
              >
                <span
                  className="text-xs font-onest font-semibold tracking-[0.2em] uppercase"
                  style={{ color: ACCENT }}
                >
                  Reserve Your Seat
                </span>
                <h1 className="font-bebas text-3xl sm:text-4xl text-white mt-1 tracking-wide leading-tight">
                  {formData.title}
                </h1>
              </motion.div>

              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="md:space-y-3 space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <input type="hidden" name="title" value={formData?.title} />

                {/* NAME + LOCATION */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <div>
                    <label className="text-xs sm:text-sm text-[#e5e5e5] mb-1.5 block font-onest">
                      Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 w-4 h-4 text-[#6b6b6b]" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`${inputClasses} pl-10`}
                        placeholder="Your name"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 font-onest">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm text-[#e5e5e5] mb-1.5 block font-onest">
                      Location *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-[#6b6b6b] pointer-events-none" />
                      <input
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Your location"
                        className={`${inputClasses} pl-10 appearance-none cursor-pointer`}
                      />
                      
                    </div>
                    {errors.location && (
                      <p className="text-red-400 text-xs mt-1 font-onest">{errors.location}</p>
                    )}
                  </div>
                </motion.div>

                {/* PHONE + EMAIL */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <div>
                    <label className="text-xs sm:text-sm text-[#e5e5e5] mb-1.5 block font-onest">
                      Phone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 w-4 h-4 text-[#6b6b6b]" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`${inputClasses} pl-10`}
                        placeholder="10-digit phone"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1 font-onest">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm text-[#e5e5e5] mb-1.5 block font-onest">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 w-4 h-4 text-[#6b6b6b]" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${inputClasses} pl-10`}
                        placeholder="your@email.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 font-onest">{errors.email}</p>
                    )}
                  </div>
                </motion.div>

                {/* USER TYPE */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <label className="text-xs sm:text-sm text-[#e5e5e5] mb-2 font-onest flex items-center gap-1.5">
                    <Users size={13} /> You are *
                  </label>
                  <div className="flex gap-3">
                    <RadioOption
                      name="userType"
                      value="Student"
                      label="Student"
                      checked={formData.userType === "Student"}
                    />
                    <RadioOption
                      name="userType"
                      value="Working"
                      label="Working"
                      checked={formData.userType === "Working"}
                    />
                  </div>
                  {errors.userType && (
                    <p className="text-red-400 text-xs mt-1 font-onest">{errors.userType}</p>
                  )}
                </motion.div>

                {/* FILM INTEREST */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                >
                  <label className="text-xs sm:text-sm text-[#e5e5e5]  mb-2 font-onest flex items-center gap-1.5">
                    <Film size={13} /> Interested in Film Making? *
                  </label>
                  <div className="flex gap-3">
                    <RadioOption
                      name="filmInterest"
                      value="Yes"
                      label="Yes"
                      checked={formData.filmInterest === "Yes"}
                    />
                    <RadioOption
                      name="filmInterest"
                      value="No"
                      label="No"
                      checked={formData.filmInterest === "No"}
                    />
                  </div>
                  {errors.filmInterest && (
                    <p className="text-red-400 text-xs mt-1 font-onest">{errors.filmInterest}</p>
                  )}
                </motion.div>

                {/* PAYMENT BUTTON */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="pt-2"
                >
                  <motion.button
                    type="button"
                    onClick={handlePayment}
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="w-full py-2.5 sm:py-3 rounded-lg font-onest font-semibold text-sm sm:text-base text-[#050505] shadow-lg shadow-[#ffac26]/10 hover:shadow-xl hover:shadow-[#ffac26]/20 transition-shadow duration-300 disabled:opacity-60"
                    style={{ backgroundColor: ACCENT }}
                  >
                    {formData.amount == 0 ?
                      <span className="flex items-center justify-center gap-2">
                        {loading ? (
                          "Processing..."
                        ) : (
                          <>
                            Submit
                          </>
                        )}
                      </span>
                      :
                      <span className="flex items-center justify-center gap-2">
                        {loading ? (
                          "Processing..."
                        ) : (
                          <>
                            <Lock size={16} />
                            Proceed to Payment
                          </>
                        )}
                      </span>
                    }
                  </motion.button>
                </motion.div>
              </motion.form>
            </div>
          </motion.div>
        </motion.div>
      )}
      <ToastContainer theme="dark" />
    </AnimatePresence>
  );
};

export default PopupForm;