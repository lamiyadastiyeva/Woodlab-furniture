import React from 'react'
import { productCards } from '../data'

function FilterButtons({ productItems, filterItems, setItems }) {
    return (
        <div className='big-filter-buttons'>
            <div className="filter-buttons">
                <button onClick={() => setItems(productCards)}>
                    All
                </button>
                {
                    productItems.map(item => (
                        <button onClick={() => filterItems(item)}>
                          {item}
                        </button>
                    ))
                }

            </div>
        </div>
    )
}

export default FilterButtons