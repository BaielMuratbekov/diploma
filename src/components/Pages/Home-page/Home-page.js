import React from 'react'
import { FootballItem } from '../../Football/FootballItem'
import { MainHeader } from '../../MainHeader/MainHeader'
import "./Home-page.css"

export const HomePage = () => {
    const FOOTBALLS = [
        {
            image: '/assets/realforma1.jpg',
            title: 'Real Madrid',
            price: 2343,
            id: 1,
            description: "lorem",
        },
        {
            image: '/assets/ManchesterUnited.jpg',
            title: 'ManchesterUnited',
            price: 200,
            id: 2,
            description: "lorem",
        },
        {
            image: '/assets/realforma1.jpg',
            title: 'Real Madrid',
            price: 2343,
            id: 3,
            description: "lorem",
        },
        {
            image: '/assets/ManchesterUnited.jpg',
            title: 'ManchesterUnited',
            price: 200,
            id: 4,
            description: "lorem",
        },
        {
            image: '/assets/realforma1.jpg',
            title: 'Real Madrid',
            price: 2343,
            id: 5,
            description: "lorem",
        },
        {
            image: '/assets/chelsea.jpg',
            title: 'Chelsea',
            price: 200,
            id: 6,
            description: "lorem",
        },
        {
            image: '/assets/topsport1.webp',
            title: 'Real Madrid',
            price: 2222,
            id: 7,
            description: "lorem",
        },
        {
            image: '/assets/ManchesterUnited.jpg',
            title: 'ManchesterUnited',
            price: 200,
            id: 8,
            description: "lorem",
        },
    ]
    return (

        <div className='Home-page'>
            <MainHeader />
            <div className='Home-page__title'> 
                All goods
            </div>
            <div className='container'>
                <div className='Home-page__item'>

                    {FOOTBALLS.map(football =>
                        <FootballItem football={football}
                            key={football.id} />)}
                </div>

            </div>
        </div>
    )
}
