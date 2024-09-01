import React from 'react'
import TopNavbar from '../Components/TopNavbar'
import BottomNavbar from '../Components/BottomNavbar'
import Footer from '../Components/Footer'
import AutoSwipingCards from '../Components/AutoSwipingCards'


const Home = () => {
  return (
    <div>
        <TopNavbar/>
        <BottomNavbar/>
        <AutoSwipingCards />
        <Footer />
    </div>
  )
}

export default Home