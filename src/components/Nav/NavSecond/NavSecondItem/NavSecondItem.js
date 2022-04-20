import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavSecondItem.css'

export const NavSecondItem = ({ children, url}) => {
    return (
            <NavLink className='NavLink' to={url}>
                {children}
            </NavLink>

    )
}
