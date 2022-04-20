import React from 'react'
import './Sale.css'
import { MainHeader } from '../../MainHeader/MainHeader'
import { Header } from '../../Header/Header'

export const Sale = () => {
  return (
    <div className='Sale'>
      <>
        <Header
          title="Sale to -50%."
          image='/assets/sale.jpg'>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati quasi reiciendis, facere quis, quibusdam sint optio, voluptatibus corrupti consequatur sed qui itaque cupiditate. Incidunt quibusdam dicta blanditiis dolorum in?
        </Header>
      </>
      <h1 className='activeRed'>Sale to -50%</h1>
      <MainHeader/>
    </div>
  )
}
