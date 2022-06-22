import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "./CartBlok.css"
import { BiCartAlt } from 'react-icons/bi'
import { CartMenu } from '../CartMenu/CartMenu'
import { calcTotalPrice } from '../untils'
import { ItemsInCart } from '../ItemsInCart/ItemsInCart'


export const CartBlok = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const items = useSelector((state) => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);

    return (
        <div className="cart-block">
            <ItemsInCart quantity={items.length} />
            <BiCartAlt
                size={30}
                className="cart-icon"
                onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
            />
            {totalPrice > 0 ? (
                <span className="total-price">{totalPrice} сом.</span>
            ) : null}
            {isCartMenuVisible && <CartMenu onClick={() => null} />}
        </div>
    );
};