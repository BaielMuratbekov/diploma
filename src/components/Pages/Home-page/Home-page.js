import React from 'react'
import { FootballItem } from '../../Football/FootballItem'
import { Nav } from '../../Header/Nav'
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
            id: 1,
            description: "lorem",
        },
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
            id: 1,
            description: "lorem",
        },
        {
            image: '/assets/realforma1.jpg',
            title: 'Real Madrid',
            price: 2343,
            id: 1,
            description: "lorem",
        },
        {
            image: '/assets/chelsea.jpg',
            title: 'Chelsea',
            price: 200,
            id: 1,
            description: "lorem",
        },
        {
            image: '/assets/topsport1.webp',
            title: 'Real Madrid',
            price: 2222,
            id: 1,
            description: "lorem",
        },
        {
            image: '/assets/ManchesterUnited.jpg',
            title: 'ManchesterUnited',
            price: 200,
            id: 1,
            description: "lorem",
        },
    ]
    return (
        <div className='container'>
            <div className='Home-page'>
                <Nav/>
                <div className='Home-page__item'>
                    {FOOTBALLS.map(football =>
                        <FootballItem football={football}
                            key={football.id} />)}
                </div>
                
            </div>
        </div>
    )
}
