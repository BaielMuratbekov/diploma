import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavItem.css'

export const NavItem = ({url,children}) => {
    return (
        <li className="NavItem">
            <NavLink to={url}>
                {children}
            </NavLink>
        </li>
    )
}
