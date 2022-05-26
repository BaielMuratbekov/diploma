import React from 'react'
import classes from "./NavOne.module.css"
import { CartBlok } from '../../Cart-blok/Cart-blok.js'
import { BiUserCircle } from 'react-icons/bi'
import { NavItem } from '../NavItem/NavItem'
export const NavOne = () => {
    return (
        <div className={classes.NavOne}>
            <ul >
                <NavItem url="/">Home</NavItem>
                <NavItem url="/about" >About Store</NavItem>
                <NavItem url="/player" >Players</NavItem>
                <NavItem url="/sale" >Sale UP To -50%</NavItem>
            </ul>
            
            <div className={classes.wrapper}>
                <BiUserCircle className={classes.Users} size={30} />
                <CartBlok />
            </div>
            
        </div>

    )
}
