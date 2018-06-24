import React from 'react';
import Navbar from '../components/Navbar'
import logo from '../images/me.jpg'

class Home extends React.Component {
  render() {
    const links = [
      {to: '/gallery', name: 'Gallery'},
      {to: '/about', name: 'About'},
      {to: '/work', name: 'Work'}
    ];

    return (
      <div className="container-home">
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
    );
  }
};

export default Home;
