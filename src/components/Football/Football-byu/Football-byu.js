import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../Button'
import { deletItemFromCart, setItemInCart } from '../../redux/cart/reducer';
import "./Football-byu.css"
import { BsFillCartXFill } from 'react-icons/bs'
import { BsFillCartPlusFill } from 'react-icons/bs'

export const FootballByu = ({ football }) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.itemsInCart);
    const isItemInCart = items.some((item) => item.id === football.id);
    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {
            dispatch(deletItemFromCart(football.id));
        } else {
            dispatch(setItemInCart(football));
        }
    };

    return (
        <div className='Football-byu'>
            <span className='football-byu__price'>{football.price} сом.</span>
            <Button
                type={isItemInCart ? "secondary" : "primary"}
                onClick={handleClick}
            >
                {isItemInCart ? <BsFillCartXFill size={23} color='tomato' /> : <BsFillCartPlusFill color='rgb(255, 255, 255)' size={23}/>}
            </Button>

        </div>
    )
}
