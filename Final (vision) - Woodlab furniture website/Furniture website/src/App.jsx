import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Basket from './pages/Basket'
import Login from './pages/Login'
import Footer from './components/Footer'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import ScrollTop from './components/ScrollTop'
import { BallTriangle } from 'react-loader-spinner'


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ru'],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false },


  });


function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <>
      {
        loading ?
          <div className="load">
            <BallTriangle
               height={100}
               width={100}
               radius={5}
               color="#a68d6f"
               ariaLabel="ball-triangle-loading"
               wrapperStyle={{}}
               wrapperClass=""
               visible={true}
            />
            
          </div>
          :
          <div>
            <ScrollTop />
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/basket' element={<Basket />} />
              <Route path='/login' element={<Login />} />
            </Routes>
            <Footer />
          </div>
      }
    </>
  )
}

export default App
