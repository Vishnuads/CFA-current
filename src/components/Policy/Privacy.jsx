import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

// ── content model ────────────────────────────────────────────────────────────
const sections = [
    {
        id: '01',
        title: 'Information We Collect',
        body: [],
        subsections: [
            {
                label: 'Personal Information',
                text: 'When you register on our site, subscribe to our newsletter, enroll in courses, or interact with us in other ways, we may collect personal information, including but not limited to your name, email address, phone number, postal address, payment information, and any other details you provide.',
            },
            {
                label: 'Non-Personal Information',
                text: 'We may collect non-personal information such as your browser type, operating system, IP address, and browsing behavior on our website.',
            },
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
        title: 'How We Use Your Information',
        body: [],
        subsections: [
            {
                label: 'To Provide Services',
                text: 'We use your information to process your enrollment, provide course materials, facilitate payment, and offer customer support.',
            },
            {
                label: 'Communication',
                text: 'We may use your information to send you newsletters, promotional materials, updates about our courses, and other information that may interest you. You can opt-out of these communications at any time.',
            },
            {
                label: 'Improvement of Services',
                text: 'We use the information to understand how our services are used, to improve our website and course offerings, and to develop new services and features.',
            },
            {
                label: 'Compliance and Protection',
                text: 'We may use your information to comply with legal obligations, resolve disputes, enforce our terms of service, and protect the rights, property, or safety of Cinema Factory Academy, our users, and others.',
            },
        ],
    },
    {
        id: '04',
        title: 'Sharing Your Information',
        body: [],
        subsections: [
            {
                label: 'Third-Party Service Providers',
                text: 'We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.',
            },
            {
                label: 'Legal Requirements',
                text: 'We may disclose your information when required by law or in response to lawful requests from government authorities or other public entities.',
            },
            {
                label: 'Business Transfers',
                text: 'In the event of a merger, acquisition, reorganization, or sale of our assets, your information may be transferred as part of the transaction.',
            },
        ],
    },
    {
        id: '05',
        title: 'Data Security',
        body: [
            'We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, misuse, or alteration. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.',
        ],
    },
    {
        id: '06',
        title: 'Your Rights',
        body: [],
        subsections: [
            {
                label: 'Access and Update',
                text: 'You have the right to access and update your personal information. You can do this by logging into your account or contacting us directly.',
            },
            {
                label: 'Opt-Out',
                text: 'You can opt-out of receiving promotional communications from us by following the unsubscribe instructions included in those communications or by contacting us.',
            },
            {
                label: 'Data Deletion',
                text: 'You can request the deletion of your personal information by contacting us. We will take reasonable steps to delete your information, except where we are required to retain it for legal or legitimate business purposes.',
            },
        ],
    },
    {
        id: '07',
        title: 'Third-Party Links',
        body: [
            'Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of these websites. We encourage you to review the privacy policies of any third-party sites you visit.',
        ],
    },
    {
        id: '08',
        title: "Children's Privacy",
        body: [
            'Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received personal information from a child under 13, we will delete such information from our records.',
        ],
    },
    {
        id: '09',
        title: 'Changes to This Privacy Policy',
        body: [
            'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes. Your continued use of our website and services after the posting of changes constitutes your acceptance of such changes.',
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

export default function Privacy() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">

            <Navbar />
            {/* ambient film-grain / vignette glow */}
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
                        Privacy &amp; Policy
                    </h1>
                    <p className="mt-5 text-white/50 text-[15px] sm:text-base leading-relaxed max-w-xl">
                        This Privacy Policy explains how we collect, use, disclose, and
                        protect your information when you visit our website, enroll in
                        our courses, or use our services.
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
                <section className="mt-8 pt-8 border-t border-white/10" id="section-10">
                    <div className="flex items-baseline gap-4 mb-5">
                        <SectionNumber id="10" />
                        <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
                            Contact Us
                        </h2>
                    </div>
                    <p className="text-white/60 text-[15px] leading-relaxed mb-6">
                        If you have any questions or concerns about this Privacy Policy
                        or our data practices, reach out to us directly.
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
                    Thank you for trusting Cinema Factory Academy with your
                    information.
                </p>
            </main>
           
            <Footer />
        </div>
    );
}