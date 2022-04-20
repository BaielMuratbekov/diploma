import React from 'react'
import { AboutItem } from '../../AboutItem/AboutItem'
import { Header } from '../../Header/Header'
import './About.css'

export const About = () => {
    return (
        <div className='About'>
            <div className='container'>
                <>
                    <Header
                        title="About Store."
                        image='/assets/aboutfootball.jpg'>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati quasi reiciendis, facere quis, quibusdam sint optio, voluptatibus corrupti consequatur sed qui itaque cupiditate. Incidunt quibusdam dicta blanditiis dolorum in?
                    </Header>
                </>
                <AboutItem/>
            </div>
        </div>
    )
}
