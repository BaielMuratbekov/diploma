import React from 'react'
import classes from "./NavOne.module.css"
import { CartBlok } from '../../CartBlok/CartBlok.js'
import { BiUserCircle } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
export const NavOne = () => {
    return (
        <div className={classes.NavOne}>
            <div className={classes.wrapper}>
                <NavLink to='/auth'><BiUserCircle className={classes.users} size={30} /></NavLink>
                <CartBlok />
            </div>
            
        </div>

    )
}
