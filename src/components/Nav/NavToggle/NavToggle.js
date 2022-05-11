import React from 'react'
import classes from './NavToggle.module.css'
export const NavToggle = ({callback}) => {
    return (
        <button onClick={callback} className={classes.NavToggle}>
            &nbsp;
        </button>
    )
}
