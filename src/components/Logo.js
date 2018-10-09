import React from 'react';
import Navbar from '../components/Navbar'
import logo from '../../images/mePolaroid.png'
import { Link } from 'react-router-dom'

const links = [
  {to: '/works', name: 'Works'},
  {to: '/about', name: 'About'},
  {to: '/resume', name: 'Resume'},
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
