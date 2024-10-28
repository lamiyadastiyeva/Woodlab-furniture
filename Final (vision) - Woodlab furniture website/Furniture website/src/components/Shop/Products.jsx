import React, { useState } from 'react'
import Product from './Product'
import { productCards } from '../data'
import FilterButtons from './FilterButtons'
import { useTranslation } from 'react-i18next'

function Products() {
    const [item, setItems] = useState(productCards)
    const productItems = [...new Set(productCards.map((val) => val.title))]

    const filterItems = (cat) => {
        const newItems = productCards.filter((newval) => newval.title === cat)
        setItems(newItems)
    }
    const { t } = useTranslation();
    return (
        <div className="products-filter">
            <h1>{t("shop.title")}</h1>
            <FilterButtons
                productItems={productItems}
                filterItems={filterItems}
                setItems={setItems}
            />

            <Product item={item} />
        </div>
    )
}

export default Products