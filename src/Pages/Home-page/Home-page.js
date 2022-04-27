import React from 'react'
import FootballList from '../../components/Football/FootballList/FootballList'

import { Header } from '../../components/Header/Header'
import { MainHeader } from '../../components/MainHeader/MainHeader'
import { getProducts } from '../../data/products'
import "./Home-page.css"

export const HomePage = () => {
    console.log(getProducts());
    
    
    return (

        <div className='Home-page'>
            <>
                <Header
                    title="Football Store."
                    image='/assets/header.jpeg'>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati quasi reiciendis, facere quis, quibusdam sint optio, voluptatibus corrupti consequatur sed qui itaque cupiditate. Incidunt quibusdam dicta blanditiis dolorum in?
                </Header>
            </>
            
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