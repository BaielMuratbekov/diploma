import React from 'react'
import './Players.css'
import { Header } from '../Header/Header'
import { Gallery } from '../Gallery/Gallery'
export const Players=()=> {

  return (
    <div className='Players'>
      
      <>
        <Header
          title="Players."
          image='/assets/players.webp'>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati quasi reiciendis, facere quis, quibusdam sint optio, voluptatibus corrupti consequatur sed qui itaque cupiditate. Incidunt quibusdam dicta blanditiis dolorum in?
        </Header>
      </>
      <Gallery />
      <div className='container'>
        <div className='Players__item'>
          <div className='Players__title'>Players</div>
          <div className='Players__img'><img src='/assets/players.jpg' alt='logo' /></div>
        </div>
      </div>
    </div>
  )
}
