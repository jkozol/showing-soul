import React from 'react';
import Navbar from '../components/Navbar'
import logo from '../images/me.jpg'
import { Link } from 'react-router-dom'

const Logo = () => (
  <div className="logo">
    <Link to={'/'}>
      <figure>
        <img src={logo}/>
        <figcaption>
          Jacob Kozol
        </figcaption>
      </figure>
    </Link>
  </div>
);

export default Logo;
