import React from 'react'
import TopNavbar from '../Components/TopNavbar'
import BottomNavbar from '../Components/BottomNavbar'
import Footer from '../Components/Footer'
import OnboardForm from '../Components/startuponboarding'
const Funding = () => {
  return (
    <div>
                <TopNavbar/>
                <BottomNavbar/>
                <OnboardForm onClose={() => {}}/>
                <Footer/>
    </div>
  )
}

export default Funding