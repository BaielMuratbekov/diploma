
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Header.css'
export const Header= ({ image1, image2, image3, title, children })=> {
    return (
        < Carousel className='Carousel' >
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>{title}</h1>
                    <p>{children}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h1>{title}</h1>
                    <p>{children}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h1>{title}</h1>
                    <p>{children}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </ Carousel >

    );
}