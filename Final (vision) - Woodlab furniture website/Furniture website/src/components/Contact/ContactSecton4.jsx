import React from 'react'
import "../../assets/sass/Contact/ContactSecton4.css"
import { useTranslation } from 'react-i18next'

function ContactSecton4() {
    const { t } = useTranslation();
    return (
        <>
            <div className="contact-sec4">
                <h2>{t("contact-sec4.title")}</h2>
                <form>
                    <input type="text" placeholder={t("contact-sec4.placeholder-name")} />
                    <input type="email" placeholder={t("contact-sec4.placeholder-email")} />
                    <input type="tel" placeholder={t("contact-sec4.placeholder-phone")} />
                </form>
                <textarea placeholder={t("contact-sec4.placeholder-message")}></textarea>
                <button type="submit">{t("contact-sec4.btn")}</button>
            </div>
        </>
    )
}

export default ContactSecton4