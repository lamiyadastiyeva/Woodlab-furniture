import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import "../../assets/sass/About/AboutSection1.css"
import { useTranslation } from 'react-i18next';

function AboutSection1() {
    const { t } = useTranslation();
    return (
        <>
            <div className="about-sec1">
                <h1>{t("about-sec1.about-title")}</h1>
                <ul>
                    <li>{t("header.1")}</li>
                    <li className='arrow'><IoIosArrowForward /></li>
                    <li>{t("about-sec1.about-title")}</li>
                </ul>
            </div>
        </>
    )
}

export default AboutSection1