import React from 'react'
import "./NavSecond.css"
import { NavSecondItem } from './NavSecondItem/NavSecondItem'

export const NavSecond = () => {
    return (
        <div className='NavSecond'>
            <div className='NavSecond__title'>Shop Your Favourite League</div>

            <ul>
                <li>
                    <NavSecondItem url='/'><img src='/assets/PremierLeague.webp' alt='PremierLeague' /></NavSecondItem>
                    <p>PremierLeague</p>
                </li>
                <li>
                    <NavSecondItem url='/'><img src='/assets/LaLiga.webp' alt='LaLiga' /></NavSecondItem>
                    <p>La Liga</p>
                </li>
                <li>
                    <NavSecondItem url='/'><img src='/assets/SeriaA.png' alt='SeriaA' /></NavSecondItem>
                    <p>Seria A</p>
                </li>
                <li>
                    <NavSecondItem url='/'><img src='/assets/Bundesliga.webp' alt='BundesLiga' /></NavSecondItem>
                    <p>Bundes Liga</p>
                </li>
                <li>

                    <NavSecondItem url='/'><img src='/assets/Liga1.webp' alt='Liga1' /></NavSecondItem>
                    <p>Liga 1</p>
                </li>
                <li>
                    <NavSecondItem url='/'><img src='/assets/Row.webp' alt='ROW' /></NavSecondItem>
                    <p>Rast of World</p>
                </li>
            </ul>
        </div>
    )
}
