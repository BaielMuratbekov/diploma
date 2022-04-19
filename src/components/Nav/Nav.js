import React from 'react'
import './Nav.css'
import { NavOne } from './NavOne/NavOne'
import { NavSecond } from './NavSecond/NavSecond' 
export const Nav = () => {
    return (
        <div>
            <NavOne />
            <NavSecond />
        </div>
    )
}
