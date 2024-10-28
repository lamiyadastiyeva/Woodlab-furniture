import React from 'react'
import image1 from "../../assets/images/aboutPage-sec3-img1.webp"
import image2 from "../../assets/images/aboutPage-sec3-img2.webp"
import "../../assets/sass/About/AboutSection3.css"
import { useTranslation } from 'react-i18next'

function AboutSection3() {
    const { t } = useTranslation();
    return (
        <>
            <div className="about-sec3">
                <div className="about-sec3-top">
                    <div className="about-sec3-image">
                        <img src={image1} alt="" />
                    </div>
                    <div className="about-sec3-text-right">
                        <span>{t("about-sec3.about-span")}</span>
                        <h2>{t("about-sec3.about-title1")}</h2>
                        <p>{t("about-sec3.about-text")}</p>
                        <button>{t("home-sec1.slider-btn")}</button>
                    </div>
                </div>

                <div className="about-sec3-bottom">
                    <div className="about-sec3-text">
                        <span>{t("about-sec3.about-span")}</span>
                        <h2>{t("about-sec3.about-title2")}</h2>
                        <p>{t("about-sec3.about-text")}</p>
                        <button>{t("home-sec1.slider-btn")}</button>
                    </div>
                    <div className="about-sec3-image">
                        <img src={image2} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection3