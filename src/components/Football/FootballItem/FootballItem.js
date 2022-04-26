import React from 'react'
import "./FootballItem.css"
import { FootballByu } from '../Football-byu';
import { FootballCover } from '../Football-cover';
import { Link } from 'react-router-dom';
export const FootballItem = ({ football }) => {
    return (

        <div className='FootballItem'>
            <FootballCover image={football.image} />
            <div className='footballitem__detalis'>
                <Link to={"/" + football.id} className='footballitem__title'>{football.title}</Link>
                <div className='footballitem__buy'><FootballByu football={football}/></div>
            </div>
        </div>

    );


}
