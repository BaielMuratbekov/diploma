import React from 'react'
import './Header.css'
export const Header = ({ image, title, children }) => {
    return (
        <div className='container'>
            <header className='Header'>
                <img src={image} alt="" />
                <section>
                    <h1>{title}</h1>
                    <p>{children}</p>
                </section>
            </header>
        </div>
    )
}
