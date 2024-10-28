import React from 'react'
import MapAboutSection4 from '../About/MapAboutSection4'
import { imageCards } from '../data'

function AboutSection4() {
    return (
        <div className='about-sec4'>
            {
                imageCards.map((imageCard) => (
                    <MapAboutSection4 key={imageCard.id} imageCard={imageCard} />
                ))
            }
        </div>
    )
}

export default AboutSection4