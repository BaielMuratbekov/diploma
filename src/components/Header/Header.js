import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { CartBlok } from '../Cart-blok/Cart-blok.js'
export const Header = () => {
    return (
        <div className='Header'>
            <div className='wrapper'>
                <Link to="/" className='header__title'>Footbal Store</Link>
            </div>
            <div className='wrapper '>

                <Link to="/" className='header__link '>Home</Link>
                <Link to="/about" className='header__link'>About Store</Link>
                <Link to="/player" className='header__link'>Players</Link>
                <Link to="/sale" className='header__link activeRed'>Sale UP To -50%</Link>

            </div>
            <div className='wrapper header__cart-btn'>
                <CartBlok />
            </div>
        </div>
    )
}
