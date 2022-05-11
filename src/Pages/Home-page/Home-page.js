import React from 'react'
import FootballList from '../../components/Football/FootballList/FootballList'
import { NavSecond } from '../../components/Nav/NavSecond/NavSecond'
import { PlayersHeader } from '../../components/PlayersHeader/PlayersHeader'
import { getProducts } from '../../data/products'
import { MainHeader } from '../../components/MainHeader/MainHeader'
import "./Home-page.css"

export const HomePage = () => {


    return (

        <div className='Home-page'>

            <NavSecond />
            <PlayersHeader />
            <MainHeader />
            <div className='Home-page__title'>
                All goods
            </div>
            <div className='container'>
                <div className='Home-page__item'>
                    <FootballList footballs={getProducts()} />

                </div>

            </div>
        </div>
    )
}
