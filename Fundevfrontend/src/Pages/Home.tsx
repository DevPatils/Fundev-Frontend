import React from 'react'
import TopNavbar from '../Components/TopNavbar'
import BottomNavbar from '../Components/BottomNavbar'
import Footer from '../Components/Footer'
import AutoSwipingCards from '../Components/AutoSwipingCards'
import TopFacilities from '../Components/TopFacilities'


const Home = () => {
  return (
    <div>
        <TopNavbar/>
        <BottomNavbar/>
        <div className="flex flex-row border border-gray-300 p-4 rounded-lg">
            <div className="w-4/5 pr-4">
                <AutoSwipingCards />
            </div>
            <div className="w-1/5">
                <TopFacilities />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home