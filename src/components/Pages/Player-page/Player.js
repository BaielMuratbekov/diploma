import React from 'react'
import { Header } from '../../Header/Header'
import { Players } from '../../Players/Players'

export const Player = () => {
    return (
        <div>
            <>
                <Header
                    title="Players."
                    image='/assets/players.webp'>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati quasi reiciendis, facere quis, quibusdam sint optio, voluptatibus corrupti consequatur sed qui itaque cupiditate. Incidunt quibusdam dicta blanditiis dolorum in?
                </Header>
            </>
            <Players/>
        
        </div>
    )
}
