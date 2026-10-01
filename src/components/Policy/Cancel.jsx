import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

// ── content model ────────────────────────────────────────────────────────────
const sections = [
  {
    id: '01',
    title: 'Non-Refundable Policy',
    body: [
      'All payments made for courses, workshops, and other programs at Cinema Factory Academy are non-refundable. This includes tuition fees, registration fees, and any other associated costs.',
    ],
  },
  {
    id: '02',
    title: 'Fee Structure and Confirmation Policy',
    body: [
      'The fee structure will be finalized and confirmed at the time of admission. It is subject to variation based on the course or program selected and shall be determined by the Management or the Admission Committee.',
    ],
  },
  {
    id: '03',
    title: 'Transfer of Enrollment',
    body: [
      'Students cannot transfer their enrollment to another course or defer their start date once the fee is paid.',
    ],
  },
  {
    id: '04',
    title: 'Missed Classes',
    body: [
      'No refunds or credits will be given for missed classes. By enrolling in a course at Cinema Factory Academy, students agree to adhere to the terms of this non-refundable policy.',
    ],
  },
];

const contact = {
  company: 'BigBay Cinema Factory Private Limited',
  address: 'No.271A, 3rd Floor, Maan Sarovar Tower, Scheme Road, Teynampet, Chennai - 600018 India',
  email: 'operations@cinemafactory.co.in',
  phone: '+91 9884683888',
};

// ── small building blocks ────────────────────────────────────────────────────

const SectionNumber = ({ id }) => (
  <span
    className="font-mono text-[13px] tracking-[0.2em] text-[#ffac26]/70 select-none"
    aria-hidden="true"
  >
    {id}
  </span>
);

const Section = ({ id, title, body }) => (
  <section className="scroll-mt-24" id={`section-${id}`}>
    <div className="flex items-baseline gap-4 mb-5">
      <SectionNumber id={id} />
      <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
        {title}
      </h2>
    </div>

    <div className="space-y-4">
      {body.map((p, i) => (
        <p key={i} className="text-white/60 text-[15px] leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  </section>
);

// ── page ─────────────────────────────────────────────────────────────────────

export default function Cancel() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      <Navbar/>
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        className="pointer-events-none fixed -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[140px] opacity-20"
        style={{ background: '#ffac26' }}
      />

      {/* ── header / hero ── */}
      <header className="relative border-b border-white/10">

        <div className="max-w-4xl mx-auto px-6 pt-6 pb-8 sm:pt-24 sm:pb-10">
          {/* <div className="flex items-center gap-2 text-[#ffac26] text-xs font-semibold tracking-[0.25em] uppercase mb-5">
            <span className="inline-block w-6 h-px bg-[#ffac26]" />
            Cinema Factory Academy
          </div> */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            Cancellation &amp; Refund Policy
          </h1>
          <p className="mt-5 text-white/50 text-[15px] sm:text-base leading-relaxed max-w-xl">
            Please read this policy carefully before enrolling. It governs
            how fees, transfers, and missed classes are handled across all
            courses, workshops, and programs.
          </p>
        </div>
      </header>

      {/* ── body ── */}
      <main className="max-w-4xl mx-auto px-6 py-14 sm:py-16">
        <div className="space-y-14">
          {sections.map((s) => (
            <Section key={s.id} {...s} />
          ))}
        </div>

        {/* ── contact card ── */}
        <section className="mt-16 pt-10 border-t border-white/10" id="section-05">
          <div className="flex items-baseline gap-4 mb-5">
            <SectionNumber id="05" />
            <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
              Questions?
            </h2>
          </div>
          <p className="text-white/60 text-[15px] leading-relaxed mb-6">
            If you have any questions about this policy before enrolling,
            reach out to us directly.
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
            <p className="text-white font-semibold text-[15px]">
              {contact.company}
            </p>
            <p className="text-white/50 text-sm mt-2 leading-relaxed max-w-sm">
              {contact.address}
            </p>

            <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-8">
              <a
                href={`mailto:${contact.email}`}
                className="text-[#ffac26] text-sm font-medium hover:underline underline-offset-4"
              >
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="text-[#ffac26] text-sm font-medium hover:underline underline-offset-4"
              >
                {contact.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

    <Footer/>
    </div>
  );
}