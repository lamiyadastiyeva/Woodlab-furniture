import React from 'react'
import MapBlogSection2 from './MapBlogSection2'
import { blogCards } from '../data'

function BlogSection2() {
    return (
        <div className='blog-sec2'>
            {
                blogCards.map((blogCard) => (
                    <MapBlogSection2 key={blogCard.id} blogCard={blogCard} />
                ))
            }
        </div>
    )
}

export default BlogSection2