import React from "react";
import { Camera, Aperture, Bot } from "lucide-react";
import img1 from "../../assets/global/camera1.webp"
import img2 from "../../assets/global/camera2.webp"
import img3 from "../../assets/global/camera3.webp"

const pedestalItems = [
  { id: "camera-body", Icon: img1 },
  { id: "cinema-rig", Icon: img2 },
  { id: "robotic-arm", Icon: img3 },
];

function Pedestal({ image }) {
  return (
    <div className="group relative flex justify-center">
      {/* Orange Glow */}
      <div className="absolute inset-0 rounded-3xl bg-[#ffac26]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Card */}
      <div className=" relative flex items-center justify-center overflow-hidden rounded-3xl borde border-white/10 bg-gradient-to- from-neutral-900 via-neutral-950 to-black p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:-translate-y-3 group-hover:border-[#ffac26]/50 group-hover:shadow-[0_20px_70px_rgba(255,172,38,0.25)  "
      >
        {/* Bottom Light */}
     

        {/* Image */}
        <img
          src={image}
          alt="Cinema Camera"
          draggable={false}
          className=" relative z-10  object-conver transition-all duration-500 group-hover:scale-110  "
        />
      </div>
         {/* <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#ffac26]/20 to-transparent" /> */}
    </div>
  );
}

export default function EquipmentShowcase({
  eyebrow = "Academic Excellence",
  title = "Beyond training. We build industry-ready filmmakers.",
  productName = "RED KOMODO CINEMA CAMERA",
  subheading = "Hands-On with RED KOMODO Cinema Cameras",
  description = "Students train extensively with the latest-generation RED KOMODO digital cinema cameras, mastering real-world production workflows, high dynamic range capture, and professional on-set camera operations.",
  ctaLabel = "Explore Cinematography",
}) {
  return (
    <section className="bg-black px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-onest text-xs font-semibold uppercase tracking-[0.3em] text-gray">
          {eyebrow}
        </p>
        <h2 className="font-bebas mt-2 text-3xl tracking-wide text-white sm:text-5xl">
          {title}
        </h2>

        <div className="mt-20 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
          {pedestalItems.map((item) => (
            <Pedestal key={item.id} image={item.Icon} />
          ))}
        </div>

        {/* <h3 className="font-bebas mt-16 whitespace-pre-line text-4xl leading-tight tracking-wide text-white sm:text-5xl">
          {productName}
        </h3> */}
        <p className="font-onest mt-14 text-lg font-semibold text-white">
          {subheading}
        </p>
        <p className="font-onest mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-sec">
          {description}
        </p>

        {/* <button
          type="button"
          className="font-onest mt-8 cursor-pointer rounded-md bg-[#ffac26] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#ffac26]"
        >
          {ctaLabel}
        </button> */}
      </div>
    </section>
  );
}
