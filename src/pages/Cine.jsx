import FAQ from '@/components/Cinematography/FAQ'
import Hero from '@/components/Cinematography/Hero'
import Highlights from '@/components/Cinematography/Highlights'
import Journey from '@/components/Cinematography/Journey'
import Syllabus from '@/components/Cinematography/Syllabus'
import Footer from '@/components/Footer'
import CTA from '@/components/Home/CTA'
import Navbar from '@/components/Navbar'
import React from 'react'

const Cine = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Highlights/>
    <Syllabus/>
    <Journey/>
    <FAQ/>
    <CTA/>
    <Footer/>
    </>
  )
}

export default Cine
