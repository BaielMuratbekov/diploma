import React from 'react'
import "./Cart-blok.css"
import { BiCartAlt } from 'react-icons/bi'
export const CartBlok = () => {
    return (
        <div className='Cart-blok'>
            <BiCartAlt size={25} className='cart-blok__icons' />
            <span className='cart-blok__price'>9999 сом.</span>
        </div>
    )
}
