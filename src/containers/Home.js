import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import logo from '../../images/mePolaroid.png'

class Home extends React.Component {
  render() {

    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    console.log(w);
    console.log(h);
    const links = [
      {to: '/gallery', name: 'Gallery'},
      {to: '/about', name: 'About'},
      {to: '/projects', name: 'Projects'}
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
