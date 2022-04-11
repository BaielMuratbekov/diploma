import React from 'react'
import { Button } from '../../Button/Button'
import "./Football-byu.css"

export const FootballByu = ({ football }) => {
    
    return (
        <div className='Football-byu'>
            <span className='football-byu__price'>{football.price} сом.</span>
            <Button type='primary'
            onClick={()=>null}>
                <i class="fa-solid fa-cart-plus"></i>
            </Button>
        </div>
    )
}
