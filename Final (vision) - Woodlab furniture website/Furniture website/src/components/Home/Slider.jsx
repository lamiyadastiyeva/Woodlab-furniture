import React from 'react'
import img1 from "../../assets/images/homePage-img-card1.jpg";
import img2 from "../../assets/images/homePage-img-card2.jpg";
import img3 from "../../assets/images/homePage-img-card3.jpg";
import img4 from "../../assets/images/homePage-img-card4.jpg";
import img5 from "../../assets/images/homePage-img-card5.jpg";
import img6 from "../../assets/images/homePage-img-card6.jpg";
import img7 from "../../assets/images/homePage-img-card7.jpg";
import img8 from "../../assets/images/homePage-img-card8.jpg";
import "../../assets/sass/Home/Slider.css"
import { useTranslation } from 'react-i18next';

function Slider() {
    const { t } = useTranslation();
    return (
        <div className="home-slider">
            <div className="slider-title">
                <h2>{t("slider.slider-title")}</h2>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex justify-content-evenly">
                            <div className="card d-flex flex-column">
                                <div className="card-image">
                                    <img src={img1} />
                                </div>
                                <span>{t("slider.slider1-span")}</span>
                                <h2>{t("slider.slider1-title")}</h2>
                                <p>{t("slider.slider-p")}</p>
                            </div>
                            <div className="card d-flex flex-column">
                                <div className="card-image">
                                    <img src={img2} />
                                </div>
                                <span>{t("slider.slider2-span")}</span>
                                <h2>{t("slider.slider2-title")}</h2>
                                <p>{t("slider.slider-p")}</p>
                            </div>
                            <div className="card card1 d-flex flex-column">
                                <div className="card-image">
                                    <img src={img3} />
                                </div>
                                <span>{t("slider.slider3-span")}</span>
                                <h2>{t("slider.slider3-title")}</h2>
                                <p>{t("slider.slider-p")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-evenly">
                            <div className="card d-flex flex-column">
                                <div className="card-image">
                                    <img src={img4} />
                                </div>
                                <span>{t("slider.slider4-span")}</span>
                                <h2>{t("slider.slider2-title")}</h2>
                                <p>{t("slider.slider-p")}</p>
                            </div>
                            <div className="card d-flex flex-column">
                                <div className="card-image">
                                    <img src={img5} />
                                </div>
                                <span>{t("slider.slider1-span")}</span>
                                <h2>{t("slider.slider1-title")}</h2>
                                <p>{t("slider.slider-p")}</p>
                            </div>
                            <div className="card card1 d-flex flex-column">
                                <div className="card-image">
                                    <img src={img6} />
                                </div>
                                <span>{t("slider.slider2-span")}</span>
                                <h2>{t("slider.slider2-title")}</h2>
                                <p>{t("slider.slider-p")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-evenly">
                            <div className="card d-flex flex-column">
                                <div className="card-image">
                                    <img src={img7} />
                                </div>
                                <span>{t("slider.slider3-span")}</span>
                                <h2>{t("slider.slider3-title")}</h2>
                                <p>{t("slider.slider-p")}</p>
                            </div>
                            <div className="card d-flex flex-column">
                                <div className="card-image">
                                    <img src={img8} />
                                </div>
                                <span>{t("slider.slider4-span")}</span>
                                <h2>{t("slider.slider2-title")}</h2>
                                <p>{t("slider.slider-p")}</p>
                            </div>
                            <div className="card card1 d-flex flex-column">
                                <div className="card-image">
                                    <img src={img5} />
                                </div>
                                <span>{t("slider.slider1-span")}</span>
                                <h2>{t("slider.slider1-title")}</h2>
                                <p>{t("slider.slider-p")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Slider