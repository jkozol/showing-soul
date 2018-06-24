import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <nav>
    <ul>
      <li><NavLink to='/' activeClassName="active">Home</NavLink></li>
      <li><NavLink to='/gallery' activeClassName="active">Gallery</NavLink></li>
      <li><NavLink to='/about' activeClassName="active">About</NavLink></li>
      <li><NavLink to='/work' activeClassName="active">Work</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
