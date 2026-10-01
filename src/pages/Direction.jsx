import CourseMentors from '@/components/Direction/CourseMentors'
import FAQ from '@/components/Direction/FAQ'
import Hero from '@/components/Direction/Hero'
import Highlights from '@/components/Direction/Highlights'
import Journey from '@/components/Direction/Journey'
import MentorsFilmography from '@/components/Direction/MentorsFilmography'
import Syllabus from '@/components/Direction/Syllabus'
import Footer from '@/components/Footer'
import CTA from '@/components/Home/CTA'
import Navbar from '@/components/Navbar'
import React from 'react'

const Direction = () => {
    return (
        <>
            <div className="bg-black text-white">
                <Navbar />
                <Hero />
                <Highlights />
                <Syllabus />
                <CourseMentors />
                <MentorsFilmography />
                <Journey />
                <FAQ />
                <CTA />
                <Footer />
            </div>
        </>
    )
}

export default Direction
