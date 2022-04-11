import React from 'react'
import "./FootballItem.css"
import { FootballByu } from '../Football-byu';
import { FootballCover } from '../Football-cover';
export const FootballItem = ({ football }) => {
    return (

        <div className='FootballItem'>
            <FootballCover image={football.image} />
            <div className='footballitem__detalis'>
                <span className='footballitem__title'>{football.title}</span>
                <div className='footballitem__buy'><FootballByu football={football}/></div>
            </div>
        </div>

    );


}
