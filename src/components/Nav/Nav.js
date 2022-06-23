import React from 'react'
import classes from "./Nav.module.css"
import { NavItem } from './NavItem/NavItem'
export const Nav = () => {
    return (
        <div className={classes.Nav}>
            <ul >
                <NavItem url="/">Home</NavItem>
                <NavItem url="/about" >About Store</NavItem>
                <NavItem url="/player" >Players</NavItem>
                <NavItem url="/sale" >Sale UP To -50%</NavItem>
            </ul>
            
            
        </div>

    )
}
