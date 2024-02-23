import React from 'react';
import { useState } from 'react';
import './navbar.css';

import { FiAlignJustify } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

import Offcanvas from 'react-bootstrap/Offcanvas';

import NavbarLogo from './images/header-348216683_948347762961185_6938563762693246597_n.jpg';
import Accordions from '../accordion/Accordions';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="fatherson_navbar">
      <div className="fathersons_navbar_menu-icon">
        <FiAlignJustify onClick={handleShow}/>

        <Offcanvas className="fathersons_navbar_offcanvas" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton />
          <Offcanvas.Body className='fathersons_navbar_body'>
            <Accordions />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <div className="fathersons_navbar_logo">
        <img src={NavbarLogo} alt="" />
      </div>
      <div className="fathersons_navbar_search">
      <CiSearch />
      <IoBagOutline />
      </div>
    </div>
  )
}

export default Navbar