import React from 'react'
import HomeSection1 from '../components/Home/HomeSection1'
import HomeSection2 from '../components/Home/HomeSection2'
import HomeSection3 from '../components/Home/HomeSection3'
import Slider from '../components/Home/Slider'
import HomeSection5 from '../components/Home/HomeSection5'
import HomeSection6 from '../components/Home/HomeSection6'
import HomeSection7 from '../components/Home/HomeSection7'

function Home() {
  return (
    <>
      <div className="home">
        <HomeSection1 />
        <HomeSection2 />
        <Slider />
        <HomeSection3 />
        <HomeSection6 />
        <HomeSection5 />
        <HomeSection7 />
      </div>
    </>
  )
}

export default Home