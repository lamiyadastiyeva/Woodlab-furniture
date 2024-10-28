import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import "../../assets/sass/Blog/BlogSection1.css"
import { useTranslation } from 'react-i18next';

function BlogSection1() {
    const {t} = useTranslation();
    return (
        <>
            <div className="blog-sec1">
                <h1>{t("header.3")}</h1>
                <ul>
                    <li>{t("header.1")}</li>
                    <li className='arrow'><IoIosArrowForward /></li>
                    <li>{t("header.3")}</li>
                </ul>
            </div>
        </>
    )
}

export default BlogSection1