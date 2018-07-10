import React from 'react';
import Navbar from '../components/Navbar'
import logo from '../images/me.jpg'
import { Link } from 'react-router-dom'

const links = [
  {to: '/gallery', name: 'Gallery'},
  {to: '/about', name: 'About'},
  {to: '/work', name: 'Work'}
];

const Logo = () => (
  <div className="logo">
    <Link to={'/'}>
      <figure>
        <img src={logo}/>
        <figcaption>
          <Navbar links={links}/>
        </figcaption>
      </figure>
    </Link>
  </div>
);

export default Logo;