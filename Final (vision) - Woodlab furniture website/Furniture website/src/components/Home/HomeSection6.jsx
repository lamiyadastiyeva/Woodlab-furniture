import React from 'react'
import image from "../../assets/images/homePage-sec6-img1.jpg";
import image1 from "../../assets/images/homePage-sec6-img2.jpg";
import image2 from "../../assets/images/homePage-sec6-img3.jpg";
import image3 from "../../assets/images/homePage-sec6-img4.jpg";
import { SiComma } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import "../../assets/sass/Home/HomeSection6.css"
import { useTranslation } from 'react-i18next';

function HomeSection6() {
    const { t } = useTranslation();
    return (
        <>
            <div className="image-carousel">
                <div className="image-left">
                    <img src={image} alt="" />
                </div>
                <div className="carousel-right">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0}
                                className="active" aria-current="true" aria-label="Slide 1" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1}
                                aria-label="Slide 2" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2}
                                aria-label="Slide 3" />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="slider-icons-text">
                                    <div className="big-icons">
                                        <SiComma className="comma" />
                                        <SiComma className="comma" />
                                    </div>
                                    <div className="small-icons">
                                        <FaStar className="star" />
                                        <FaStar className="star" />
                                        <FaStar className="star" />
                                        <FaStar className="star" />
                                        <FaStar className="star" />
                                    </div>
                                    <div className="slider-text">
                                        <p>{t("home-sec6.slider-text")}</p>
                                    </div>
                                    <div className="image-title">
                                        <img src={image1} />
                                        <h2>{t("home-sec6.slider-title1")}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="slider-icons-text">
                                    <div className="big-icons">
                                        <SiComma className="comma" />
                                        <SiComma className="comma" />
                                    </div>
                                    <div className="small-icons">
                                        <FaStar className="star" />
                                        <FaStar className="star" />
                                        <FaStar className="star" />
                                        <FaStar className="star" />
                                        <FaStar className="star" />
                                    </div>
                                    <div className="slider-text">
                                        <p>{t("home-sec6.slider-text")}</p>
                                    </div>
                                    <div className="image-title">
                                        <img src={image2} />
                                        <h2>{t("home-sec6.slider-title2")}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="slider-icons-text">
                                    <div className="big-icons">
                                        <SiComma className="comma" />
                                        <SiComma className="comma" />
                                    </div>
                                    <div className="small-icons">
                                        <FaStar className="star" />
                                        <FaStar className="star" />
                                        <FaStar className="star" />
                                        <FaStar className="star" />
                                        <FaStar className="star" />
                                    </div>
                                    <div className="slider-text">
                                        <p>{t("home-sec6.slider-text")}</p>
                                    </div>
                                    <div className="image-title">
                                        <img src={image3} />
                                        <h2>{t("home-sec6.slider-title3")}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSection6