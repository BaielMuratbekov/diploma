import React from 'react'
import './Players.css'
import { Header } from '../Header/Header'
export const Players=()=> {

  return (
    <div className='Players'>
      
      <>
        <Header
          title="Players"
          image1='/assets/players1.jpg'
          image2='/assets/players2.jpg'
          image3='/assets/players3.jpg'>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati quasi reiciendis, facere quis, quibusdam sint optio, voluptatibus corrupti consequatur sed qui itaque cupiditate. Incidunt quibusdam dicta blanditiis dolorum in?
        </Header>
      </>
      <div className='container'>
        <div className='Players__item'>
          <div className='Players__title'>Players</div>
          <div className='Players__img'><img src='/assets/players.jpg' alt='logo' /></div>
        </div>
      </div>
    </div>
  )
}
