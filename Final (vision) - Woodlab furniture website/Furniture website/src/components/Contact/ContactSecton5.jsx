import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "../../assets/sass/Contact/ContactSecton5.css"
import { useTranslation } from 'react-i18next';

function ContactSecton5() {
    const { t } = useTranslation();
    return (
        <>
            <div className="contact-sec5">
                <h2>{t("contact-sec5.title")}</h2>
                <p>{t("contact-sec5.text")}</p>
                <div className="input-button-icons">
                    <form>
                        <input type="text" placeholder={t("contact-sec5.placeholder-email")} />
                        <button type='submit'>{t("contact-sec5.btn")}</button>
                    </form>
                    <div className="quick-links">
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
                </div>
            </div>
        </>
    )
}

export default ContactSecton5