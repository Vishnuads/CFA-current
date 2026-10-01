import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import Hero from '@/components/Workshops/Hero'
import PastWorkshops from '@/components/Workshops/PastWorkshops'
import React from 'react'

const Workshop = () => {
  return (
    <>
      <section className='text-white bg-[#050505]'>
        <Navbar />
        <Hero />
        <PastWorkshops />
        <Footer />
      </section>
    </>
  )
}

export default Workshop
