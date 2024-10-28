import React from 'react'
import "../../assets/sass/About/AboutSection4.css"


function MapAboutSection4({ imageCard }) {
    const { id, image, title, text, button } = imageCard;
    return (
        <>
            <div className="small-about-sec4">
                <div className="about-sec4-image">
                    <img src={image} alt="" />
                    <div className="hover"></div>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <button>{button}</button>
            </div>
        </>
    )
}

export default MapAboutSection4