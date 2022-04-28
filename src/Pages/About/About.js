import React from 'react'
import { AboutItem } from '../../components/AboutItem/AboutItem'
import { Header } from '../../components/Header/Header'
import './About.css'

export const About = () => {
    
    return (
        <div className='About'>
            <>
                <Header
                    title="About Store."
                    image1='/assets/about1.jpg'
                    image2='/assets/about2.jpg'
                    image3='/assets/about3.webp'>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati quasi reiciendis, facere quis, quibusdam sint optio, voluptatibus corrupti consequatur sed qui itaque cupiditate. Incidunt quibusdam dicta blanditiis dolorum in?
                </Header>
            </>
            <div className='container'>
                
                <AboutItem/>
            </div>
        </div>
    )
}
