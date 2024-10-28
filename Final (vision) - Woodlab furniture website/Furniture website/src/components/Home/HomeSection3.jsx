import React from 'react'
import "../../assets/sass/Home/HomeSection3.css"
import { useTranslation } from 'react-i18next'

function HomeSection3() {
  const { t } = useTranslation()
  return (
    <>
      <div className="home-bg">
        <div className="bg-left"></div>
        <div className="bg-right">
          <span>{t("home-sec3.bg-span")}</span>
          <h2>{t("home-sec3.bg-title")}</h2>
          <p>{t("home-sec3.bg-p")}</p>
          <button className="home-btn">{t("home-sec3.bg-btn")}</button>
        </div>
      </div>
    </>
  )
}

export default HomeSection3