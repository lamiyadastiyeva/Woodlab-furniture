import React from 'react'
import logo from "../assets/images/woodlab-logo.png"
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "../assets/sass/Footer.css"
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();
    return (
        <div>
            <footer className='footer'>
                <div className="footer-container">
                    <div className="logo-text-icons">
                        <img src={logo} alt="" />
                        <p className='logo-text'>{t("slider.slider-p")}</p>
                        <div className="footer-icons">
                            <div className="icon">
                                <FaFacebookF />
                            </div>
                            <div className="icon">
                                <BsTwitterX />
                            </div>
                            <div className="icon">
                                <FaTiktok />
                            </div>
                            <div className="icon">
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                    <div className="quick-links">
                        <h5 className='links-title'>{t("footer.footer-title1")}</h5>
                        <div className="links">
                            <Link to="/"><IoIosArrowForward className='me-1' />{t("header.1")}</Link>
                            <Link to="/about"><IoIosArrowForward className='me-1' />{t("header.2")}</Link>
                            <Link to="/blog"><IoIosArrowForward className='me-1' />{t("header.3")}</Link>
                            <Link to="/shop"><IoIosArrowForward className='me-1' />{t("header.4")}</Link>
                            <Link to="/contact"><IoIosArrowForward className='me-1' />{t("header.5")}</Link>
                        </div>
                    </div>
                    <div className="map-phone-mail">
                        <h5>{t("footer.footer-title2")}</h5>
                        <div className="address-icon">
                            <p><FaMapMarkerAlt className='me-1' />{t("footer.footer-map")}</p>
                            <p><FaPhone className='me-3' />(+91)7-723-4608</p>
                            <p><IoMdMail className='me-3' />furnifurniture@domain.vn</p>
                        </div>
                    </div>
                    <div className="footer-title-text-btn">
                        <h5>{t("footer.footer-title3")}</h5>
                        <p>{t("footer.footer-text")}</p>
                        <div className='footer-input'>
                            <input type="text" className="input" placeholder={t("footer.placeholder")} />
                            <button type="submit" className='signbtn'>{t("footer.footer-btn")}</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer