import React from 'react'

export const FootballCover = ({ image = "" }) => {
    return (
        // <div className='Football-cover' style={{ backgroundImage: `url(${image})` }} />
        <img className='Football-cover' width={200} src={image} alt="football"/>
    )
}
