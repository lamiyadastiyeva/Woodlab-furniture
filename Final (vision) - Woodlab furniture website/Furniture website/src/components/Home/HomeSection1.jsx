import React from 'react'
import carousel1 from "../../assets/images/homePage-img1.jpg"
import carousel2 from "../../assets/images/homePage-img2.jpg"
import carousel3 from "../../assets/images/homePage-img3.jpg"
import "../../assets/sass/Home/HomeSection1.css"
import { useTranslation } from 'react-i18next'


function HomeSection1() {
  const { t } = useTranslation();

  return (
    <div className="home-sec1">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active"
            aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1}
            aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2}
            aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <p>{t("home-sec1.slider-p")}</p>
              <h2>{t("home-sec1.slider1-title")}</h2>
              <button className='slider-btn'>{t("home-sec1.slider-btn")}</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <p>{t("home-sec1.slider-p")}</p>
              <h2>{t("home-sec1.slider2-title")}</h2>
              <button className='slider-btn'>{t("home-sec1.slider-btn")}</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <p>{t("home-sec1.slider-p")}</p>
              <h2>{t("home-sec1.slider3-title")}</h2>
              <button className='slider-btn'>{t("home-sec1.slider-btn")}</button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default HomeSection1