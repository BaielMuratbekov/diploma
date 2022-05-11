import React from 'react'
import { Link } from 'react-router-dom'
import './PlayersHeader.css'
export const PlayersHeader = () => {
    return (
        <div className='PlayersHeader'>
            <div className='PlayersHeader__item'>
                <Link to='/'>
                    <img src='/assets/ronaldo.webp' alt='ronaldo' />
                </Link>
            </div>
            <div className='PlayersHeader__item'>
                <Link to='/'>
                    <img src='/assets/benzema.jpg' alt='ronaldo' />
                </Link>
            </div><div className='PlayersHeader__item'>
                <Link to='/'>
                    <img src='/assets/dibala.jpg' alt='ronaldo' />
                </Link>
            </div>
            <div className='PlayersHeader__item'>
                <Link to='/'>
                    <img src='/assets/images.jpg' alt='ronaldo' />
                </Link>
            </div><div className='PlayersHeader__item'>
                <Link to='/'>
                    <img src='/assets/mbappe.jpg' alt='ronaldo' />
                </Link>
            </div>
            <div className='PlayersHeader__item'>
                <Link to='/'>
                    <img src='/assets/kross.jpg' alt='ronaldo' />
                </Link>
            </div>
        </div>
    )
}
