import React from 'react'
import { useCart } from 'react-use-cart';
import { FaRegTrashCan } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { Link } from 'react-router-dom';
import empty from "../assets/images/empty-card-img.webp"
import "../assets/sass/Basket/Basket.css"
import { useTranslation } from 'react-i18next';

function Basket() {
  const { t } = useTranslation();
  const { isEmpty,
    totalUniqueItems, items,
    totalItems, updateItemQuantity,
    cartTotal, removeItem, emptyCart
  } = useCart();
  if (isEmpty) return (
    <div className='empty'>
      <div className="empty-img">
        <img src={empty} alt="" />
      </div>
      <p>{t("basket.text4")}</p>
      <Link to="/shop">
        <button>{t("basket.btn")}</button>
      </Link>
    </div>
  )
  return (
    <>
      <div className="small-container cart-page">
        <table>
          <tr>
            <th>{t("basket.title1")}</th>
            <th>{t("basket.title2")}</th>
            <th>{t("basket.title3")}</th>
            <th colSpan="2">{t("basket.title4")}</th>
          </tr>

          {items.map((item) => {
            return (
              <tr>
                <td className='table-data'>
                  <div className="cart-info">
                    <img src={item.image} alt="" />
                  </div>
                </td>
                <td className='table-data'>{item.title}</td>
                <td className='table-data'>{item.price} $</td>
                <td className='table-data'>
                  <div className="buttons">
                    <button className="minus-button" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}><FiMinus /></button>
                    <button className='quantity'>{item.quantity}</button>
                    <button className="plus-button" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}><FiPlus /></button>
                  </div>
                </td>
                <td className='table-data'>
                  <div className="remove">
                    <button className="remove-button" onClick={() => removeItem(item.id)}><FaRegTrashCan /></button>
                  </div>
                </td>
              </tr>

            )
          })}

        </table>
        <div className="total-price">
          <table>
            <tr>
              <td>{t("basket.text1")}</td>
              <td>{totalUniqueItems}</td>
            </tr>
            <tr>
              <td>{t("basket.text2")}</td>
              <td>{totalItems}</td>
            </tr>
            <tr className='cart-total'>
              <td>{t("basket.text3")}</td>
              <td>{cartTotal} $</td>
            </tr>
            <tr>
              <td colSpan="2">
                <div className="general-remove">
                  <button className='general-remove-button' onClick={() => emptyCart()}><FaTrash /></button>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div >

    </>
  )
}

export default Basket