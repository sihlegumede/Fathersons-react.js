import React from 'react';
import './accordion.css';
 
import {Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accordions = () => {
  return (
    <div className='offcanvas_accordion'>
      <Accordion className='accordion_accordion'>
        <AccordionSummary  id='panel1-header' aria-controls='panel1-content' expandIcon={<ExpandMoreIcon />}>
          <Typography className='accordion_header'>NEW/PRE-ORDER</Typography>
        </AccordionSummary>
        <AccordionDetails className='accordion_details'>
          <Typography className='accordion_body'>
            <ul>
              <li><a href="#">NEW</a></li>
              <li><a href="#">PRE-ORDER</a></li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion_accordion'>
      <AccordionSummary id='panel2-header' aria-controls='panel2-content' expandIcon={<ExpandMoreIcon />}>
        <Typography className='accordion_header'>SHIRTS AND T SHIRTS</Typography>
      </AccordionSummary>
      <AccordionDetails className='accordion_details'>
        <Typography className='accordion_body'>
          <ul>
            <li><a href="#">SUPER SLIM SHIRTS</a></li>
            <li><a href="#">DEMIN STRETCH SHIRTS</a></li>
            <li><a href="#">SUPER SLIM OXFORD SHIRTS</a></li>
            <li><a href="#">REGULAR SLIM SATEEN SHIRTS</a></li>
            <li><a href="#">SCUBA SHIRTS</a></li>
            <li><a href="#">CLASSIC SHIRTS</a></li>
            <li><a href="#">T SHIRTS</a></li>
            <li><a href="#">OVERSIZED TEES</a></li>
            <li><a href="#">POLO SHIRTS</a></li>
          </ul>
        </Typography>
      </AccordionDetails>
      </Accordion>
      <Accordion className='accordion_accordion'>
      <AccordionSummary id='panel3-header' aria-controls='panel3-content' expandIcon={<ExpandMoreIcon />}>
        <Typography className='accordion_header'>FORMAL WEAR</Typography>
      </AccordionSummary>
      <AccordionDetails className='accordion_details'>
        <Typography className='accordion_body'>
          <ul>
            <li><a href="#">FORMAL TROUSERS</a></li>
            <li><a href="#">SUIT JACKETS</a></li>
            <li><a href="#">WAIST COATS</a></li>
          </ul>
        </Typography>
      </AccordionDetails>
      </Accordion>
      <Accordion className='accordion_accordion'>
      <AccordionSummary id='panel4-header' aria-controls='panel4-content' expandIcon={<ExpandMoreIcon />}>
        <Typography className='accordion_header'>JUMPER WEAR</Typography>
      </AccordionSummary>
      <AccordionDetails className='accordion_details'>
        <Typography className='accordion_body'>
          <ul>
            <li><a href="#">JUMPERS AND CARDIGANS</a></li>
            <li><a href="#">HOODIES</a></li>
            <li><a href="#">KNITTED ROLL NECKS</a></li>
            <li><a href="#">MERINO WOOL JUMPERS</a></li>
          </ul>
        </Typography>
      </AccordionDetails>
      </Accordion>
      <Accordion className='accordion_accordion'>
      <AccordionSummary id='panel5-header' aria-controls='panel5-content' expandIcon={<ExpandMoreIcon />}>
        <Typography className='accordion_header'>GYMWEAR</Typography>
      </AccordionSummary>
      <AccordionDetails className='accordion_details'>
        <Typography className='accordion_body'>
          <ul>
            <li><a href="#">GYM TOPS</a></li>
            <li><a href="#">TRACKSUITS</a></li>
            <li><a href="#">VESTS</a></li>
          </ul>
        </Typography>
      </AccordionDetails>
      </Accordion>
      <Accordion className='accordion_accordion'>
      <AccordionSummary id='panel6-header' aria-controls='panel6-content' expandIcon={<ExpandMoreIcon />}>
        <Typography className='accordion_header'>JACKETS AND COATS</Typography>
      </AccordionSummary>
      <AccordionDetails className='accordion_details'>
        <Typography className='accordion_body'>
          <ul>
            <li><a href="#">LEATHER JACKETS</a></li>
            <li><a href="#">COATS</a></li>
          </ul>
        </Typography>
      </AccordionDetails>
      </Accordion>
      <Accordion className='accordion_accordion'>
      <AccordionSummary id='panel7-header' aria-controls='panel7-content' expandIcon={<ExpandMoreIcon />}>
        <Typography className='accordion_header'>BOTTOMS</Typography>
      </AccordionSummary>
      <AccordionDetails className='accordion_details'>
        <Typography className='accordion_body'>
          <ul>
            <li><a href="#">TROUSERS</a></li>
            <li><a href="#">JEANS</a></li>
            <li><a href="#">SHORTS</a></li>
            <li><a href="#">SWIM SHORTS</a></li>
          </ul>
        </Typography>
      </AccordionDetails>
      </Accordion>
      <Accordion className='accordion_accordion'>
      <AccordionSummary id='panel8-header' aria-controls='panel8-content' expandIcon={<ExpandMoreIcon />}>
        <Typography className='accordion_header'>ACCESSORIES</Typography>
      </AccordionSummary>
      <AccordionDetails className='accordion_details'>
        <Typography className='accordion_body'>
          <ul>
            <li><a href="#">BELTS</a></li>
            <li><a href="#">BEANIE HATS</a></li>
          </ul>
        </Typography>
      </AccordionDetails>
      </Accordion>
  </div>
  )
}

export default Accordions