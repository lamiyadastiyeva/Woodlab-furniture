import React from 'react'
import "../../assets/sass/Home/HomeSection2.css"
import { useTranslation } from 'react-i18next'

function HomeSection2() {
    const { t } = useTranslation();
    return (
        <>
            <div className="generalHome">
                <div className="homeLeft">
                    <p>{t("home-sec2.card1-p")}</p>
                    <h3>{t("home-sec2.card1-title")}</h3>
                    <button className='home-btn'>{t("home-sec2.card-btn")}</button>
                </div>
                <div className="homeRight">
                    <p>{t("home-sec2.card2-p")}</p>
                    <h3>{t("home-sec2.card2-title")}</h3>
                    <button className='home-btn'>{t("home-sec2.card-btn")}</button>
                </div>
            </div>
        </>
    )
}

export default HomeSection2