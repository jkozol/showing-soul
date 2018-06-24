import React from 'react';
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'
import logo from '../images/me.jpg'

class About extends React.Component {
  render() {
    const links = [
      {to: '/gallery', name: 'Gallery'},
      {to: '/about', name: 'About'},
      {to: '/work', name: 'Work'}
    ];

    return (
      <div className="container">
        <Logo />
        <div className="topbar">
        hi
        </div>
        <div className="content">
          <figure>
            <img src={logo}/>
            <figcaption>
              <Navbar links={links}/>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
};

export default About;
