import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Trusted from './components/Trusted/Trusted'
import Hero from './components/Hero/Hero'
import WhyChoose from './components/WhyChoose/WhyChoose'
import UnlockSection from './components/UnlockSection/UnlockSection'
import Journey from './components/journey/journey'
import MeetLeaders from './components/MeetLeaders/MeetLeaders'
import TestimonialSection from './components/TestimonialSection/TestimonialSection'
import ConsultationSection from './components/ConsultationSection.jsx'
import AppFooter from './components/AppFooter/AppFooter'
import StatsSection from './components/StatsSection/StatsSection'
import MissionVisionSection from './components/MissionVisionSection/MissionVisionSection'


const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Trusted />
    <MissionVisionSection />
    <StatsSection />
    <UnlockSection />
    <WhyChoose />
    <Journey />
    <MeetLeaders />
    
    <TestimonialSection />
    <ConsultationSection />
    
    
    <AppFooter />
    </>
  )
}

export default App