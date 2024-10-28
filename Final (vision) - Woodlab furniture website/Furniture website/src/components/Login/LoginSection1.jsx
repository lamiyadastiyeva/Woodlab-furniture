import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
import "../../assets/sass/Login/LoginSection1.css"
import { useTranslation } from 'react-i18next'


function LoginSection1() {
    const { t } = useTranslation();
    return (
        <div className='login'>
            <div className="login-sec1">
                <h1>{t("login-sec1.title")}</h1>
                <ul>
                    <li>{t("header.1")}</li>
                    <li className='arrow'><IoIosArrowForward /></li>
                    <li>{t("login-sec1.title")}</li>
                </ul>
            </div>
        </div>
    )
}

export default LoginSection1