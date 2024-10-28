import React from 'react'
import login from "../../assets/images/homePage-sec7-img1.jpg"
import google from "../../assets/images/login-google.png"
import apple from "../../assets/images/login-apple.png"
import { IoIosMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import "../../assets/sass/Login/LoginSection2.css";
import { useTranslation } from 'react-i18next';

function LoginSection2() {
    const { t } = useTranslation();

    return (
        <>
            <div className="login-page">
                <div className="login-image">
                    <img src={login} alt="" />
                </div>
                <div className="login-container">
                    <h2 className="form-title">{t("login-sec1.title")}</h2>
                    <div className="social-login">
                        <button className="social-button">
                            <img src={google} alt="" className='social-icon' />
                            {t("login-sec2.text1")}
                        </button>
                        <button className="social-button">
                            <img src={apple} alt="" className='social-icon' />
                            {t("login-sec2.text2")}
                        </button>
                    </div>
                    <p className="separator"><span>{t("login-sec2.span")}</span></p>
                    <form action="" className="login-form">
                        <div className="input-wrapper">
                            <input type="email" placeholder={t("login-sec2.placeholder1")} className="input-field" required />
                            <IoIosMail className='icon' />
                        </div>

                        <div className="input-wrapper">
                            <input type="password" placeholder={t("login-sec2.placeholder2")} className="input-field" required />
                            <FaLock className='icon' />
                        </div>
                        <a href="" className="forgot-pass-link">{t("login-sec2.text3")}</a>
                        <button className="login-button">{t("login-sec1.title")}</button>
                    </form>
                    <p className="signup-text">{t("login-sec2.text4")} <a href="">{t("login-sec2.text5")}</a></p>
                </div>
            </div>
        </>
    )
}

export default LoginSection2