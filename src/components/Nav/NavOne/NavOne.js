import React from 'react'
import "./NavOne.css"
import { CartBlok } from '../../Cart-blok/Cart-blok.js'
import { BiUserCircle } from 'react-icons/bi'
import { NavItem } from '../NavItem/NavItem'
import { Logo } from '../Logo/Logo'
export const NavOne = () => {
    return (
        <nav className="NavOne">
            <Logo />
            <ul>
                <NavItem url="/">Home</NavItem>
                <NavItem url="/about" >About Store</NavItem>
                <NavItem url="/player" >Players</NavItem>
                <NavItem url="/sale" >Sale UP To -50%</NavItem>
            </ul>
            <div className='wrapper'>
                <BiUserCircle className='Users' size={30} />
                <CartBlok />
            </div>
        </nav>

    )
}
