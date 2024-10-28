import React from 'react'
import image from "../../assets/images/aboutPage-sec2-img.jpg"
import "../../assets/sass/About/AboutSection2.css"
import { useTranslation } from 'react-i18next'

function AboutSection2() {
    const { t } = useTranslation()
    return (
        <>
            <div className="about-sec2">
                <h2>{t("about-sec2.about-title")}</h2>
                <span>{t("about-sec2.about-span")}</span>
                <div className="about-sec2-image">
                    <img src={image} alt="" />
                    <div className="hover"></div>
                </div>
            </div>
        </>
    )
}

export default AboutSection2