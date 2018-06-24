import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = props => (
  <nav>
    <ul>
      {props.links.map((link =>
        <li><NavLink to={link.to} activeClassName="active">{link.name}</NavLink></li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
