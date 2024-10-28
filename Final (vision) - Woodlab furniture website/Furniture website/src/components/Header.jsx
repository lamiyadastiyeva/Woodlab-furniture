// import React, { useContext } from 'react'
// import logo from "../assets/images/homePage-sec5-img3.png"


// const languages = [
//     {
//         code: 'ru',
//         name: 'Pусский',
//         country_code: 'ru'
//     },
//     {
//         code: 'en',
//         name: 'English',
//         country_code: 'gb'
//     },
// ]


// const GlobeIcon = ({ width = 24, height = 24 }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
//         <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
//     </svg>
// )


// function Header() {
//     const { t } = useTranslation();
//     const { totalItems } = useCart();
//     const useThemeSwitcher = ThemeSwitcher();

//     return (
//         <>
//             <header className='header'>
//                 <nav className='nav-items'>
//                     <div className="logo">
//                         <img src={logo} alt="" />
//                     </div>
//                     <div className="links-icons">
//                         <div className="ul-link">
//                             <ul>
//                                 <li className='link'>
//                                     <Link to="/">{t("header.1")}</Link>
//                                 </li>
//                                 <li className='link'>
//                                     <Link to="/about">{t("header.2")}</Link>
//                                 </li>
//                                 <li className='link'>
//                                     <Link to="/blog">{t("header.3")}</Link>
//                                 </li>
//                                 <li className='link'>
//                                     <Link to="/shop">{t("header.4")}</Link>
//                                 </li>
//                                 <li className='link'>
//                                     <Link to="/contact">{t("header.5")}</Link>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="nav-icons">
//                             <ul>
//                                 <li>
//                                     <Link to="/basket">
//                                         <div className="basket-icon">
//                                             <FaBasketShopping className='shopping' /><div>{totalItems}</div>
//                                         </div>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/login">
//                                         <FaUser />
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <div className="dropdown">
//                                         <button
//                                             className="btn dropdown-toggle"
//                                             type="button"
//                                             id="dropdownMenu2"
//                                             data-bs-toggle="dropdown"
//                                             aria-expanded="false"
//                                         >
//                                             <FaGlobe className='globe' />
//                                         </button>
//                                         <ul className="dropdown-menu show" aria-labelledby="dropdownMenu2" >
//                                             {languages.map(({ code, name, country_code }) => (
//                                                 <li key={country_code}>
//                                                     <button
//                                                         className="dropdown-item"
//                                                         onClick={() => i18next.changeLanguage(code)} >
//                                                         <span className={`flag-icon flag-icon-${country_code} me-2`}></span>
//                                                         {name}
//                                                     </button>

//                                                 </li>

//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     {useThemeSwitcher}
//                                 </li>

//                             </ul>
//                         </div>
//                     </div>
//                     <div className="nav-toggle">
//                         <div className="bar"></div>
//                     </div>
//                 </nav>

//             </header>
//         </>
//     )
// }

// export default Header


import React from 'react'
import logo from "../assets/images/woodlab-logo.png"
import { Link } from "react-router-dom"
import { FaBasketShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useCart } from 'react-use-cart';
import { FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import 'flag-icon-css/css/flag-icons.min.css';
import i18next from "i18next";
import ThemeSwitcher from '../components/Theme/ThemeSwitcher';
import "../assets/sass/Header.css"


const languages = [
    {
        code: 'ru',
        name: 'Pусский',
        country_code: 'ru'
    },
    {
        code: 'en',
        name: 'English',
        country_code: 'gb'
    },
]


const GlobeIcon = ({ width = 24, height = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
    </svg>
)


function Header() {
    const { t } = useTranslation();
    const { totalItems } = useCart();
    const useThemeSwitcher = ThemeSwitcher();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <div className="logo" >
                        <img src={logo} alt="" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <div className="links-icons">
                            <div className="ul-link">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link active" aria-current="page" >
                                            {t("header.1")}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link active" aria-current="page" >
                                            {t("header.2")}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/blog" className="nav-link active" aria-current="page" >
                                            {t("header.3")}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/shop" className="nav-link active" aria-current="page" >
                                            {t("header.4")}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link active" aria-current="page" >
                                            {t("header.5")}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="nav-icons">
                                <ul>
                                    <li>
                                        <Link to="/basket" className="nav-link active">
                                            <div className="basket-icon">
                                                <FaBasketShopping className='shopping' /><div>{totalItems}</div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/login" className="nav-link active">
                                            <FaUser />
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="dropdown">
                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenu2"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <FaGlobe className='globe' />
                                            </button>
                                            <ul className="dropdown-menu show" aria-labelledby="dropdownMenu2" >
                                                {languages.map(({ code, name, country_code }) => (
                                                    <li key={country_code}>
                                                        <button
                                                            className="dropdown-item"
                                                            onClick={() => i18next.changeLanguage(code)} >
                                                            <span className={`flag-icon flag-icon-${country_code} me-2`}></span>
                                                            {name}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-link active">
                                        {useThemeSwitcher}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Header