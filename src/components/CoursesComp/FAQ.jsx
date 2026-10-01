import React, { useState } from "react";
import FaqItems from "../Home/FaqItems";

const FAQ = ({ course }) => {
    const [active, setActive] = useState(0);

    const qna = course?.faq || [];

    const toggle = (idx) => {
        setActive((prev) => (prev === idx ? -1 : idx));
    };

    // Don't render empty FAQ section
    if (!qna.length) {
        return null;
    }

    return (
        <section className="w-full bg-black">
            <div className="mx-auto max-w-6xl px-5 py-20">

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

                    {/* LEFT CONTENT */}
                    <div>
                        <p className="font-onest font-semibold uppercase text-gray">
                            Have questions?
                        </p>

                        <h1 className="font-bebas text-4xl">
                            Frequently Asked Questions
                        </h1>
                    </div>

                    {/* FAQ ITEMS */}
                    <div className="col-span-2">
                        {qna.map((q, idx) => (
                            <FaqItems
                                key={idx}
                                ques={q.ques}
                                ans={q.ans}
                                togg={() => toggle(idx)}
                                isActive={active === idx}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;