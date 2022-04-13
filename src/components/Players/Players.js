import React from 'react'
import './Players.css'

export const Players=()=> {
  return (
    <div className='Players'>
      <div className='container'>
        <div className='Players__item'>
          <div className='Players__title'>Players</div>
          <div className='Players__img'><img src='/assets/players.jpg' alt='logo' /></div>
        </div>
      </div>
    </div>
  )
}
