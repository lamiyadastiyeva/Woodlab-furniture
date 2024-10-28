import React from 'react'
import ImageHomeSection7 from './ImageHomeSection7'
import { cards } from '../data'
import { useTranslation } from 'react-i18next'

function HomeSection7() {
    const { t } = useTranslation();
    return (
        <div>
            <div className="images-title">
                <h2>{t("home-sec7.title")}</h2>
            </div>
            <div className="images-hover">
                {
                    cards.map((card) => (
                        <ImageHomeSection7 key={card.id} card={card} />
                    ))
                }
            </div>

        </div>
    )
}

export default HomeSection7