import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

export const Nav=()=> {
    return (
        <div className='Nav'>
            <div className='Nav__title'>Shop Your Favourite League</div>
            <section className='Nav__header'>
                <div className='Nav__item'>
                    <Link to='/'><img src='/assets/PremierLeague.webp' alt='PremierLeague' className='Nav__img' /></Link>
                    <p>PremierLeague</p>
                </div>
                <div className='Nav__item'>
                    <Link to='/'><img src='/assets/LaLiga.webp' alt='LaLiga' className='Nav__img' /></Link>
                    <p>La Liga</p>
                </div>
                <div className='Nav__item'>
                    <Link to='/'><img src='/assets/SeriaA.png' alt='SeriaA' className='Nav__img' /></Link>
                    <p>Seria A</p>
                </div>
                <div className='Nav__item'>
                    <Link to='/'><img src='/assets/Bundesliga.webp' alt='BundesLiga' className='Nav__img' /></Link>
                    <p>Bundes Liga</p>
                </div>
                <div className='Nav__item'>
                    <Link to='/'><img src='/assets/Liga1.webp' alt='Liga1' className='Nav__img' /></Link>
                    <p>Liga 1</p>
                </div>

                <div className='Nav__item'>
                    <Link to='/'><img src='/assets/Row.webp' alt='ROW' className='Nav__img' /></Link>
                    <p>Rast of World</p>
                </div>
            </section>
        </div>
    )
}
