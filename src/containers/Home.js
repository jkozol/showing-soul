import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import logo from '../../images/mePolaroid.png'

class Home extends React.Component {
  render() {
    const links = [
      {to: '/gallery', name: 'Gallery'},
      {to: '/about', name: 'About'},
      {to: '/work', name: 'Work'}
    ];

    return (
      <Link to={'/about'}>
        <div className="container">
          <div className="topbar">
          hi
          </div>
          <div className="profile">
            <figure>
              <img src={logo}/>
              <figcaption>
                <Navbar links={links}/>
              </figcaption>
            </figure>
          </div>
        </div>
      </Link>
    );
  }
};

export default Home;
