import React from 'react';
import './footer.css';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_row">
        <div className="footer_col">
          <h6>ABOUT THE SHOP</h6>
          <p>Design by a Father & run by the Sons specialising in men's shirts.</p><br />
          <div className='footer_icons'>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
        <div className="footer_col">
          <h6>CUSTOMER SERVICE</h6>
          
            <li><a href="#">Search</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Terms of Service</a></li>
          
        </div>
        <div className="footer_col">
          <h6>INFORMATION</h6>
          
            <li><a href="#">UK & AUSTRALIA RETURNS TAB</a></li>
            <li><a href="#">INTERNATION NON-UK RETURNS TAB</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Garment Care</a></li>
            <li><a href="#">Xmas Returns</a></li>
            <li><a href="#">FAQ</a></li>            
          
        </div>
        <div className="footer_col">
          <h6>NEWSLETTER</h6>
          <p>Sign up to our newsletter for exclusive discounts & earl access purchase on new arrivals </p><br />
          <br />
          <input type="email" name="email" placeholder='Enter your email'/><br />
          <br />
          <button type='button'>SUBCRIBE</button>
        </div>
      </div>
    </div>
  )
}

export default Footer