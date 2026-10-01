import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Affi1 from "../../assets/network/nfdc.webp";
import Affi2 from "../../assets/network/nsdc.png";
import Affi3 from "../../assets/network/skill.png";
import Affi4 from "../../assets/network/mesc.png";

const affiliates = [
    {
        src: Affi1,
        alt: "NFDC",
    },
    {
        src: Affi2,
        alt: "NSDC",
    },
    {
        src: Affi3,
        alt: "Skill",
    },
    {
        src: Affi4,
        alt: "MESC",
    },
];

const slideUp = {
    hidden: {
        opacity: 0,
        y: 30,
    },

    visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: custom * 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    }),
};

const AffiliatedSlider = () => {
    return (
        <section>
              
        <motion.div className="w-full max-w-[320px] sm:max-w-[360px] md:absolute md:bottom-0 md:left-20 md:max-w-[400px] lg:max-w-[440px]"
            custom={1.2}
            variants={slideUp}
            initial="hidden"
            animate="visible"

        >
            <h2 className=" mb-3 text-center font-onest text-xs font-medium tracking-wide text-white/90 sm:text-sm ">
                    Affiliated By
                </h2>
            <div className="text-grayy inner-shadow rounded-xl bg-black/20 p-3 backdrop-blur-md sm:p-4 " >
                {/* Title */}
              

                {/* Slider */}
                <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
                >
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={3}
                        spaceBetween={12}
                        loop={true}
                        speed={700}
                        autoplay={{
                            delay: 1800,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        allowTouchMove={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 3,
                                spaceBetween: 8,
                            },
                            480: {
                                slidesPerView: 3,
                                spaceBetween: 12,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 16,
                            },
                        }}
                        className="affiliate-swiper"
                    >
                        {affiliates.map((affiliate, index) => (
                            <SwiperSlide key={index}>
                                <div className="  flex h-12 items-center justify-center rounded-lg px-2 transition-all duration-300 hover:bg-white/10 sm:h-22 " >
                                    <img
                                        src={affiliate.src}
                                        alt={affiliate.alt}
                                        loading="lazy"
                                        draggable={false}
                                        className=" h-8 w-auto max-w-full object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 sm:h-20 "
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </motion.div>
        </section>
    );
};

export default AffiliatedSlider;