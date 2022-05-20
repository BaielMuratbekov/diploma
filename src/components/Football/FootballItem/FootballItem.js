import React from 'react'
import "./FootballItem.css"
import { FootballByu } from '../Football-byu';
import { FootballCover } from '../Football-cover';
import { Link } from 'react-router-dom';
export const FootballItem = ({ product  }) => {
    return (

        <div className='FootballItem'>
            <FootballCover image={product.image} />
            <div className='footballitem__detalis'>
                <Link to={"/" + product.productId} className='footballitem__title'>{product.title}</Link>
                <div className='footballitem__buy'><FootballByu product={product}/></div>
            </div>
        </div>

    );


}
