import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Home/Hero'
import Courses from '../components/Home/Courses'
import Why from '../components/Home/Why'
import Footer from '../components/Footer'
import CTA from '@/components/Home/CTA'
import Connection from '@/components/Home/Connection'
import FAQ from '@/components/Home/FAQ'
import Career from '@/components/Home/Career'
import Network from '@/components/Home/Network'
import Learn from '@/components/Home/Learn'
import MentorHero from '@/components/Home/Mentor'
import Mentors from '@/components/Home/MentorsFilmography'
import Leadership from '@/components/Home/Leadership'

export default function Home() {
    return (
        <>
        <div className="bg-[#050505] text-white">
            <Navbar />
            <Hero />
            <Courses />
            <MentorHero />
            <Why />
            <Learn/>
            <Leadership/>
            <Network/>
            <Connection/>
            <CTA />
            <Footer />
            </div>
        </>
    )
}
