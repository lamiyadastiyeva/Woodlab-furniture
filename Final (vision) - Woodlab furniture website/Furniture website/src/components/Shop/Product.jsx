import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { RiShoppingBagLine } from "react-icons/ri";
import { useCart } from 'react-use-cart';
import "../../assets/sass/Shop/ShopSection2.css"

function Product({ item }) {
    const { addItem } = useCart();
    return (
        <div className='big-product-box'>
            {
                item.map((item) => (
                    <div key={item.id} className="product-box">
                        <div className="product-inner-box">
                            <div className="is-hover">
                                <div className="icons">
                                    <Link className='icon'><FaRegHeart /></Link>
                                    <Link className='icon'><FiEye /></Link>
                                </div>
                                <div className="product-image">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="product-btn">
                                    <button onClick={() => addItem(item)} className='shopping'><RiShoppingBagLine className='icon' /> Add to cart</button>
                                    <button className='eye'><FiEye className='icon' /> Buy now</button>
                                </div>
                            </div>
                        </div>
                        <div className="product-info">
                            <div className="product-text">
                                <h2>{item.title}</h2>
                                <p>{item.price} $</p>
                            </div>
                            <div className="big-stars">
                                <div className="star">
                                    {item.star1}
                                    {item.star2}
                                    {item.star3}
                                    {item.star4}
                                    {item.star5}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Product