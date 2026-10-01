import React, { useState } from 'react'
import FaqItems from '../Home/FaqItems'

const FAQ = () => {

    const [active, setActive] = useState(0);

    const toggle = (idx) => {
        setActive((p) => (p === idx) ? p : idx);
    }

    const qna = [
    { ques: "Who will be learning the courses?", ans: "This program combines artistic insight with technical expertise. Students are trained in screenplay development, script interpretation, storyboarding, production design, and crew management. The curriculum also covers directing actors, visual storytelling, and understanding the collaboration between the director and every department in filmmaking." },
    { ques: "Do I need prior experience to join these courses?", ans: "No prior experience is required. Our programs are designed for beginners as well as aspiring filmmakers looking to strengthen their skills. What matters most is your interest and passion for cinema." },
    { ques: "Are the courses more practical or theoretical?", ans: "No prior experience is required. Our programs are designed for beginners as well as aspiring filmmakers looking to strengthen their skills. What matters most is your interest and passion for cinema." },
    { ques: "Will I get placement support after completing the course?", ans: "No prior experience is required. Our programs are designed for beginners as well as aspiring filmmakers looking to strengthen their skills. What matters most is your interest and passion for cinema." },
    { ques: "What is the duration of the courses?", ans: "No prior experience is required. Our programs are designed for beginners as well as aspiring filmmakers looking to strengthen their skills. What matters most is your interest and passion for cinema." },
]


    return (
        <>
            <section>
                <div className="max-w-6xl mx-auto px-5 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <p className='font-onest font-semibold uppercase text-gray'> Have questions?</p>
                            <h1 className="font-bebas text-4xl">Frequently Asked Questions</h1>
                        </div>
                        <div className='col-span-2'>
                            {qna.map((q, idx) => (
                                <FaqItems key={idx} ques={q.ques} ans={q.ans} togg={()=>toggle(idx)} isActive={active === idx} />
                            ))}

                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default FAQ
