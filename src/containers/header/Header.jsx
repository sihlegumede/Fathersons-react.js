import React from 'react';
import './header.css';

import { Navbar } from '../../components';

import Carousel from 'react-bootstrap/Carousel';

import StretchShirt from './images/slideshow_images/crop-IMG_5950_x800-slim.jpg';
import ShortShirt from './images/slideshow_images/crop-image_9c2abc39-5f31-40b3-8478-455f120acca1_600x-slim.jpg';
import PoloShirt from './images/slideshow_images/crop-image_12b1605a-7a50-4e71-936c-4452b8c8b8da_600x-slim.jpg';
import Shirt from './images/slideshow_images/crop-image_1b5b2a98-898c-4a37-9cff-33675f0271a0_600x-slim.jpg';
import Trousers from './images/slideshow_images/crop-image_580c0153-27ed-4630-80b5-5a458b7af172_1214x1800.jpg'

const Header = () => {
  return (
    <div className='header'>
      <Navbar />
      <div className="ticker">
        <ul>
          <li>R 2500 x 4 GIVEAWAY</li>
          <li>|</li>
          <li>ORDER VIA THE APP TO WIN</li>
        </ul>
      </div>
      <Carousel className='carousel'>
        <Carousel.Item interval={5000} className='carousel_item'>
          <img src={StretchShirt} alt="" />
            <Carousel.Caption className='carousel_item_caption'>
              <h7>ULTRA STRECTH SHIRT</h7>
              <h4>SUPER SLIM STRETCH SHIRTS</h4>
              <button type='button'>SHOP NOW</button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000} className='carousel_item'>
          <img src={ShortShirt} alt="" />
            <Carousel.Caption className='carousel_item_caption'>
              <h7>JUST ARRIVED</h7>
              <h4>NEW ARRIVALS</h4>
              <button type='button'>SHOP NOW</button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000} className='carousel_item'>
          <img src={PoloShirt} alt="" />
            <Carousel.Caption className='carousel_item_caption'>
              <h7>NEW</h7>
              <h4>POLO SHIRTS</h4>
              <button type='button'>SHOP NOW</button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000} className='carousel_item'>
          <img src={Shirt} alt="" />
            <Carousel.Caption className='carousel_item_caption'>
              <h7>NEW</h7>
              <h4>T-SHIRTS</h4>
              <button type='button'>SHOP NOW</button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000} className='carousel_item'>
          <img src={Trousers} alt="" />
            <Carousel.Caption className='carousel_item_caption'>
              <h7>NEW</h7>
              <h4>FORMAL TROUSERS</h4>
              <button type='button'>SHOP NOW</button>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Header