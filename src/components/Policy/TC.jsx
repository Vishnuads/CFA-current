import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

// ── content model ────────────────────────────────────────────────────────────
// Keeping the copy as data (not hard-coded JSX repetition) makes the page easy
// to update later without touching the layout markup.
const sections = [
  {
    id: '01',
    title: 'Acceptance of Terms',
    body: [
      'By accessing or using our website, you agree to these Terms and any additional terms and conditions that may apply to specific sections of the website or to products and services available through the website.',
    ],
  },
  {
    id: '02',
    title: 'Use of Our Services',
    body: [],
    subsections: [
      {
        label: 'Eligibility',
        text: 'You must be at least 13 years old to use our website and services. By using our website, you represent and warrant that you meet this age requirement.',
      },
      {
        label: 'Account Registration',
        text: 'To access certain features of our website, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.',
      },
      {
        label: 'User Responsibilities',
        text: 'You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.',
      },
      {
        label: 'Prohibited Conduct',
        text: 'You agree not to use our website for any unlawful purpose or in any way that could harm, disable, overburden, or impair the website. You also agree not to use any automated means to access the website, including robots, spiders, or similar tools.',
      },
    ],
  },
  {
    id: '03',
    title: 'Course Enrollment and Payments',
    body: [],
    subsections: [
      {
        label: 'Enrollment',
        text: 'By enrolling in a course, you agree to pay the applicable fees and to comply with any additional terms and conditions that may apply to the course.',
      },
      {
        label: 'Payments',
        text: 'All payments must be made through our authorized payment methods. You agree to provide accurate and complete payment information and to keep your payment information up to date.',
      },
      {
        label: 'Refunds',
        text: 'Our refund policy is detailed on our website. Please review it carefully before enrolling in a course.',
      },
    ],
  },
  {
    id: '04',
    title: 'Intellectual Property',
    body: [],
    subsections: [
      {
        label: 'Ownership',
        text: 'All content on our website, including text, graphics, logos, images, and software, is the property of Cinema Factory Academy or its licensors and is protected by copyright, trademark, and other intellectual property laws.',
      },
      {
        label: 'Limited License',
        text: 'You are granted a limited, non-exclusive, non-transferable, and revocable license to access and use the website for your personal, non-commercial use. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website, except as permitted by these Terms.',
      },
    ],
  },
  {
    id: '05',
    title: 'Disclaimers and Limitation of Liability',
    body: [],
    subsections: [
      {
        label: 'No Warranty',
        text: 'Our website and services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. Cinema Factory Academy disclaims all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
      },
      {
        label: 'Limitation of Liability',
        text: 'To the fullest extent permitted by law, Cinema Factory Academy shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use or inability to use the website, unauthorized access to our servers, interruption of transmission, bugs or viruses transmitted through the website, errors or omissions in content, and/or any other matters relating to the website — whether based on warranty, contract, tort, or any other legal theory, and whether or not Cinema Factory Academy has been advised of the possibility of such damages.',
      },
    ],
  },
  {
    id: '06',
    title: 'Indemnification',
    body: [
      'You agree to indemnify, defend, and hold harmless Cinema Factory Academy, its affiliates, and their respective officers, directors, employees, agents, licensors, and suppliers from and against any claims, actions, demands, liabilities, and settlements, including reasonable legal and accounting fees, arising out of or resulting from your violation of these Terms or your use of the website — including, but not limited to, any use of the website\u2019s content, services, and products other than as expressly authorized in these Terms.',
    ],
  },
  {
    id: '07',
    title: 'Changes to Terms',
    body: [
      'We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on our website. You are advised to review these Terms periodically for any changes. Your continued use of our website and services after the posting of changes constitutes your acceptance of such changes.',
    ],
  },
  {
    id: '08',
    title: 'Governing Law',
    body: [
      'These Terms and your use of our website shall be governed by and construed in accordance with the laws of the jurisdiction in which Cinema Factory Academy operates, without regard to its conflict of law principles.',
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

const SubBlock = ({ label, text }) => (
  <div className="pl-5 border-l border-white/10 hover:border-[#ffac26]/50 transition-colors duration-200">
    <h3 className="text-white font-semibold text-[15px] mb-1.5 tracking-tight">
      {label}
    </h3>
    <p className="text-white/60 text-[15px] leading-relaxed">{text}</p>
  </div>
);

const Section = ({ id, title, body, subsections }) => (
  <section className="scroll-mt-24" id={`section-${id}`}>
    <div className="flex items-baseline gap-4 mb-5">
      <SectionNumber id={id} />
      <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
        {title}
      </h2>
    </div>

    {body.length > 0 && (
      <div className="space-y-4 mb-2">
        {body.map((p, i) => (
          <p key={i} className="text-white/60 text-[15px] leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    )}

    {subsections && (
      <div className="space-y-6 mt-2">
        {subsections.map((s) => (
          <SubBlock key={s.label} {...s} />
        ))}
      </div>
    )}
  </section>
);

// ── page ─────────────────────────────────────────────────────────────────────

export default function TC() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-onest text-white">
      
      
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
          <h1 className="text-4xl sm:text-5xl font-bold  leading-[1.1]">
            Terms &amp; Conditions
          </h1>
          {/* <p className="mt-4 text-white/50 text-[15px] sm:text-base leading-relaxed max-w-xl">
            Welcome to Cinema Factory Academy. These Terms govern your use of
            our website and services. By accessing or using them, you agree
            to be bound by what follows below — please read it carefully.
          </p> */}
        </div>
      </header>

      {/* ── body ── */}
      <main className="max-w-4xl mx-auto px-6 py-6 sm:py-10">
        <div className="space-y-14">
          {sections.map((s) => (
            <Section key={s.id} {...s} />
          ))}
        </div>

        {/* ── contact card ── */}
        <section className="mt-16 pt-10 border-t border-white/10" id="section-09">
          <div className="flex items-baseline gap-4 mb-5">
            <SectionNumber id="09" />
            <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
              Contact Us
            </h2>
          </div>
          <p className="text-white/60 text-[15px] leading-relaxed mb-6">
            If you have any questions or concerns about these Terms or our
            services, reach out to us directly.
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

        <p className="mt-10 text-white/30 text-xs leading-relaxed">
          This website is operated by BigBay Cinema Factory. Thank you for
          using Cinema Factory Academy — we hope you enjoy your experience
          with us.
        </p>
      </main>

      <Footer/>
    </div>
  );
}