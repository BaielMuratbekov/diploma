import React from 'react'
import { Link } from 'react-router-dom'
import './MainHeader.css'

export const MainHeader = () => {
    return (
        <div className='MainHeader'>
            <div className='MainHeader__left'>
                <h1>Spring looks</h1>
                <span>Upgrate your collection</span>
                <Link to='/' className='MainHeader__link'>shop now</Link>
                
            </div>
            <div className='MainHeader__right'>
                <img src='/assets/Mainheader.jpg' alt='MainHeader'/>
            </div>
        </div>
    )
}
