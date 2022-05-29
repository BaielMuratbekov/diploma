import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "./Cart-blok.css"
import { BiCartAlt } from 'react-icons/bi'
import { CartMenu } from '../Cart-menu/Cart-menu'
import { calcTotalPrice } from '../untils'
import { ItemsInCart } from '../Items-in-cart/Items-in-cart'


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
            
            {isCartMenuVisible && <CartMenu onClick={() => null} />}
        </div>
    );
};