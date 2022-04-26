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
                    image='/assets/aboutfootball.jpg'>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati quasi reiciendis, facere quis, quibusdam sint optio, voluptatibus corrupti consequatur sed qui itaque cupiditate. Incidunt quibusdam dicta blanditiis dolorum in?
                </Header>
            </>
            <div className='container'>
                
                <AboutItem/>
            </div>
        </div>
    )
}
