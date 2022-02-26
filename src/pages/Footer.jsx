import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='social'>
          <a href='#'>
            <i className='icon ion-social-instagram'></i>
          </a>
          <a href='#'>
            <i className='icon ion-social-snapchat'></i>
          </a>
          <a href='#'>
            <i className='icon ion-social-twitter'></i>
          </a>
          <a href='#'>
            <i className='icon ion-social-facebook'></i>
          </a>
        </div>
        <ul className='list-inline'>
          <li className='list-inline-item'>
            <Link to='/'>Home</Link>
          </li>

          <li className='list-inline-item'>
            <Link to='/about'>About</Link>
          </li>
        </ul>
        <p className='copyright'>Phil Greene - 2022</p>
      </div>
    </footer>
  );
}

export default Footer;
