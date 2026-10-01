import Footer from '@/components/Footer'
import AwardsShowcase from '@/components/GlobalRecognization/AwardsShowcase'
import EquipmentShowcase from '@/components/GlobalRecognization/EquipmentShowcase'
import GlobalRecognitionHero from '@/components/GlobalRecognization/GlobalRecognitionHero'
import MilestonesCarousel from '@/components/GlobalRecognization/MilestonesCarousel'
import TrainingGrid from '@/components/GlobalRecognization/TrainingGrid'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function GlobalRecog() {
  return (
    <div className="bg-[#050505] text-white">
      <Navbar />
      <GlobalRecognitionHero />
      <AwardsShowcase />
      <MilestonesCarousel />
      <EquipmentShowcase />
      <TrainingGrid />
      <Footer />
    </div>
  )
}
