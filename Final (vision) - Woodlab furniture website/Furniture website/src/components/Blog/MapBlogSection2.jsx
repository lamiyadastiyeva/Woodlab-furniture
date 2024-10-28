import React from 'react'
import "../../assets/sass/Blog/BlogSection2.css"

function MapBlogSection2({ blogCard }) {
  const { id, image, span, title, text, button } = blogCard
  return (
    <div>
      <div className="blog-card">
        <div className="blog-sec2-image">
          <img src={image} alt="" />
        </div>
        <div className='span'>{span}</div>
        <h2>{title}</h2>
        <p>{text}</p>
        <button>{button}</button>
      </div>
    </div>
  )
}

export default MapBlogSection2