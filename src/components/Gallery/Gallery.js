import React from 'react'
import './Gallery.css'
export const Gallery = () => {
    
    return (
        <div>
            <div className='Gallery'>
                <div
                    className="slide ranaldo" 
                >
                    <h3>MACBOOK AIR</h3>
                </div>
                <div
                    className="slide active mbappe"
                >
                    <h3>MACBOOK PRO (16-INCH)</h3>
                </div>
                <div
                    className="slide messi"
                >
                    <h3>MACBOOK PRO (14-INCH)</h3>
                </div>
                <div
                    className="slide neimary"
                >
                    <h3>HP SPECTRE X360 14</h3>
                </div>
                <div
                    className="slide holond"
                >
                    <h3>ASUS ROG ZEPHYRUS G15</h3>
                </div>
            </div>
        </div>
    )
}
