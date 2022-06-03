import React from 'react';
import gpt3logo from '../../Assets/logo.svg'
import './Footer.css';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links-logo'>
          <img src={gpt3logo} alt='logo'/>
          <p>Charles Street, westShire Winchester, Colorado Random address</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Lorem ipsum</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contacts</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contacts</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in Touch</h4>
          <p>Lorem Ipsum</p>
          <p>088345912</p>
          <p>dnabatwa9@gmail.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>2022 GPT3. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer