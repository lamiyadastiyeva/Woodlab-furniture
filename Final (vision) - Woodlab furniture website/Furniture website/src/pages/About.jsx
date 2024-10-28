import React from 'react'
import AboutSection1 from '../components/About/AboutSection1'
import AboutSection2 from '../components/About/AboutSection2'
import AboutSection3 from '../components/About/AboutSection3'
import AboutSection4 from '../components/About/AboutSection4'

function About() {
  return (
    <div className='about'>
      <AboutSection1 />
      <AboutSection3 />
      <AboutSection2 />
      <AboutSection4 />
    </div>
  )
}

export default About