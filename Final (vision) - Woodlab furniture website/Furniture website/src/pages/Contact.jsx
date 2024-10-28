import React from 'react'
import ContactSecton1 from '../components/Contact/ContactSecton1'
import ContactSecton2 from '../components/Contact/ContactSecton2'
import ContactSecton3 from '../components/Contact/ContactSecton3'
import ContactSecton4 from '../components/Contact/ContactSecton4'
import ContactSecton5 from '../components/Contact/ContactSecton5'

function Contact() {
  return (
    <div className='contact-page'>
      <ContactSecton1 />
      <ContactSecton2 />
      <ContactSecton3 />
      <ContactSecton4 />
      <ContactSecton5 />
    </div>
  )
}

export default Contact