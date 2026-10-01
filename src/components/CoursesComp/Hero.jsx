import React, { useEffect, useState } from "react";
import { DownloadIcon } from "lucide-react";

const Hero = ({ course }) => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!course) return null;

  return (
    <>

      <style>{`

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .hero-title {
          animation: ${isVisible
          ? "fadeInDown 0.8s ease-out 0.2s forwards"
          : "none"};
          opacity: 0;
        }

        .hero-subtitle {
          animation: ${isVisible
          ? "fadeInUp 0.8s ease-out 0.4s forwards"
          : "none"};
          opacity: 0;
        }

        .hero-buttons {
          animation: ${isVisible
          ? "fadeInScale 0.8s ease-out 0.6s forwards"
          : "none"};
          opacity: 0;
        }

        .hero-image {
          animation: ${isVisible
          ? "zoomIn 1.2s ease-out forwards"
          : "none"};
          opacity: 0;
        }

        .button-hover {
          transition: all 0.3s ease;
        }

        .button-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }

      `}</style>


      <section className="w-full">

        <div className="relative flex h-screen min-h-screen w-full items-center justify-center overflow-hidden pt-20 bg-black">

          {/* Background */}

          <div className="absolute inset-0 overflow-hidden">

            <img
              src={course.hero.image}
              alt={`${course.name} course`}
              className="hero-image h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

          </div>


          {/* Content */}

          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">

            {/* <h1 className="hero-title font-akira text-4xl uppercase leading-tight tracking-wider text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {course.hero.title}
            </h1> */}


            <h1
              className=" hero-title w-full max-w-full break-words px-2 font-akira text-3xl uppercase leading-[1.15] tracking-normal text-white sm:px-0 sm:text-4xl sm:leading-tight sm:tracking-wide md:text-5xl lg:text-6xl"
            >
              {course.hero.title}
            </h1>

            <p className="hero-subtitle mt-4 mb-6 max-w-2xl font-onest text-xs font-light leading-relaxed text-gray-100 sm:mb-8 sm:text-sm md:text-base lg:text-lg">
              {course.hero.description}
            </p>

            <div className="hero-buttons flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">

              {/* <button
                className=" button-hover w-full rounded-full border border-white/80 bg-white/5 px-6 py-3 font-onest text-xs font-medium text-white backdrop-blur-md transition-all hover:border-white hover:bg-white/10 sm:w-auto sm:px-8 sm:text-sm"
              >
                Explore Curriculum
              </button> */}


              <a
                href={course.brochurePdf}
                download
                className=" button-hover flex w-full items-center justify-center gap-2 rounded-full border border-white bg-white px-6 py-3 font-onest text-xs font-medium text-black transition-all hover:bg-gray-100 sm:w-auto sm:px-8 sm:text-sm"
              >
                <span>Download Brochure</span>

                <DownloadIcon
                  size={16}
                  className="shrink-0"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;















