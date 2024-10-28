import React from 'react'
import "../../assets/sass/Contact/ContactSecton2.css"
import { useTranslation } from 'react-i18next'

function ContactSecton2() {
    const { t } = useTranslation();
    return (
        <>
            <div className="contact-sec2">
                <div className="contact-container">
                    <div className="contact-left">
                        <p>{t("header.5")}</p>
                        <h2>{t("contact-sec2.title")}</h2>
                    </div>
                    <div className="contact-right">
                        <div className="contact-right-title">
                            <p>{t("contact-sec2.text")}</p>
                            <p>{t("contact-sec2.phone")}</p>
                            <p>{t("contact-sec2.mail")}</p>
                        </div>
                        <div className="contact-right-text">
                            <p>{t("footer.footer-map")}</p>
                            <p>(+91)7-723-4608</p>
                            <p>furniture@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactSecton2