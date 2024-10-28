import React from 'react'
import LogosHomeSection5 from './LogosHomeSection5'
import { logos } from '../data'
import "../../assets/sass/Home/HomeSection5.css"


function HomeSection5() {
    return (
        <>
            <div className="logo-images">
                {
                    logos.map((logo) => (
                        <LogosHomeSection5 key={logo.id} logo={logo} />
                    ))
                }

            </div>
        </>
    )
}

export default HomeSection5