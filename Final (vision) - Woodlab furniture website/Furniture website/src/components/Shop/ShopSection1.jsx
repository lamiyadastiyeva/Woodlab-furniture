import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import "../../assets/sass/Shop/ShopSection1.css"
import { useTranslation } from 'react-i18next';

function ShopSection1() {
    const { t } = useTranslation();
    return (
        <div className="shop-sec1">
            <h1>{t("header.4")}</h1>
            <ul>
                <li>{t("header.1")}</li>
                <li className='arrow'><IoIosArrowForward /></li>
                <li>{t("header.4")}</li>
            </ul>
        </div>
    )
}

export default ShopSection1