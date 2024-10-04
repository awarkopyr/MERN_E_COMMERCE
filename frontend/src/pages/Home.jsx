import React from 'react'
import Hero from '../components/Hero/Hero'
import LatestCollection from '../components/LatesCollection/LatestCollection'
import BestSeller from '../components/bestSeller/BestSeller'
import OurPolicy from '../components/Policy/OurPolicy'

const Home = () => {
    return (
        <div>
            <Hero/>
            <LatestCollection/>
            <BestSeller/>
            <OurPolicy/>
        </div>
    )
}

export default Home