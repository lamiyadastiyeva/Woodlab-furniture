import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
import "../../assets/sass/Contact/ContactSecton1.css"
import { useTranslation } from 'react-i18next'

function ContactSecton1() {
    const { t } = useTranslation();
    return (
        <>
            <div className="contact-sec1">
                <h1>{t("header.5")}</h1>
                <ul>
                    <li>{t("header.1")}</li>
                    <li className='arrow'><IoIosArrowForward /></li>
                    <li>{t("header.5")}</li>
                </ul>
            </div>
        </>
    )
}

export default ContactSecton1