import React from 'react'
import classes from "./NavOne.module.css"
import { CartBlok } from '../../Cart-blok/Cart-blok.js'
import { BiUserCircle } from 'react-icons/bi'
export const NavOne = () => {
    return (
        <div className={classes.NavOne}>
            <div className={classes.wrapper}>
                <BiUserCircle className={classes.users} size={30} />
                <CartBlok />
            </div>
            
        </div>

    )
}
