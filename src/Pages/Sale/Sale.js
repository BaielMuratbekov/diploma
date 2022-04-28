import React from 'react'
import './Sale.css'
import { MainHeader } from '../../components/MainHeader/MainHeader'
import { Header } from '../../components/Header/Header'

export const Sale = () => {
  return (
    <div className='Sale'>
      <>
        <Header
          title="Sale"
          image1='/assets/sale.jpg'
          image2='/assets/aboutfootball.jpg'
          image3='/assets/dsc.jpg'>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati quasi reiciendis, facere quis, quibusdam sint optio, voluptatibus corrupti consequatur sed qui itaque cupiditate. Incidunt quibusdam dicta blanditiis dolorum in?
        </Header>
      </>
      <h1 className='activeRed'>Sale to -50%</h1>
      <MainHeader/>
    </div>
  )
}
