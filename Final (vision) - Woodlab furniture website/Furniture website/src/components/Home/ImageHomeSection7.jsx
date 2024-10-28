import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import "../../assets/sass/Home/HomeSection7.css"


function ImageHomeSection7({ card }) {
    const { id, image } = card
    return (
        <div>
            <div className="image-hover">
                <img src={image} alt="" />
                <div className="hover"></div>
                <FaInstagram className='instagram' />
            </div>
        </div>
    )
}

export default ImageHomeSection7