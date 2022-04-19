import React from 'react'
import './Layout.css'
import { Footer } from "../Footer";
import { Nav } from '../Nav/Nav';
import { NavSecond } from '../Nav/NavSecond/NavSecond';
export const Layout=({ children })=> {
    return (
        <div className='Layout'>
            <Nav/>
            {children}
            <Footer />
        </div>
    )
}
