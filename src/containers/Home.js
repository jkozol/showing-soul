import React from 'react';
import Navbar from '../components/Navbar'
import logo from '../images/me.jpg'

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="topbar">
        hi
        </div>
        <div className="profile">
          <figure>
            <img src={logo}/>
            <figcaption>
              <Navbar />
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
};

export default Home;
