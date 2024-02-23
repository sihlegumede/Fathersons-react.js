import React, {useEffect} from 'react';
import './feature.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

import Card from 'react-bootstrap/Card';

const Feature = () => {
  useEffect(() => {
    AOS.init({duration:2000})
  }, []);
  return (
    <div className='feature'>
      <h3>PRODUCTS</h3>
      <div className="feature_grid">
        <div className="feature_cards" data-aos="zoom-out">
          <Card className='feature_super-slim-shirts'>
            <Card.Body className='feature_card_body'>
              <Card.Title className='feature_card_title'>SUPER SLIM SHIRTS</Card.Title> 
              <button type='button'>VIEW PRODUCTS</button>
            </Card.Body>
          </Card>
        </div>
        <div className="feature_cards" data-aos="zoom-out">
          <Card className='feature_polo-shirts'>
            <Card.Body className='feature_card_body'>
              <Card.Title className='feature_card_title'>POLO SHIRTS</Card.Title> 
              <button type='button'>VIEW PRODUCTS</button>
            </Card.Body>
          </Card>
        </div>
        <div className="feature_cards" data-aos="zoom-out">
          <Card className='feature_jumpers-and-cardigans'>
            <Card.Body className='feature_card_body'>
              <Card.Title className='feature_card_title'>JUMPERS AND CARDIGANS</Card.Title> 
              <button type='button'>VIEW PRODUCTS</button>
            </Card.Body>
          </Card>
        </div>
        <div className="feature_cards" data-aos="zoom-out">
          <Card className='feature_leather-jackets'>
            <Card.Body className='feature_card_body'>
              <Card.Title className='feature_card_title'>LEATHER JACKETS</Card.Title> 
              <button type='button'>VIEW PRODUCTS</button>
            </Card.Body>
          </Card>
        </div>
        <div className="feature_cards" data-aos="zoom-out">
          <Card className='feature_tracksuits'>
            <Card.Body className='feature_card_body'>
              <Card.Title className='feature_card_title'>TRACKSUITS</Card.Title> 
              <button type='button'>VIEW PRODUCTS</button>
            </Card.Body>
          </Card>
        </div>
        <div className="feature_cards" data-aos="zoom-out">
          <Card className='feature_trousers'>
            <Card.Body className='feature_card_body'>
              <Card.Title className='feature_card_title'>TROUSERS</Card.Title> 
              <button type='button'>VIEW PRODUCTS</button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Feature