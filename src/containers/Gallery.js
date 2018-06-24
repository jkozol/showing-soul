import React from 'react';
import Navbar from '../components/Navbar'
import logo from '../images/me.jpg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';


class Gallery extends React.Component {
  render() {
    const links = [
      {to: '/about', name: 'About'},
      {to: '/gallery', name: 'Gallery'},
      {to: '/work', name: 'Work'}
    ];

    return (
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
        <div className="gallery">
          <figure>
            <img src={logo}/>
            <figcaption>Me</figcaption>
          </figure>
          <figure>
            <img src={img1}/>
            <figcaption>Milkshake</figcaption>
          </figure>
          <figure>
            <img src={img2}/>
            <figcaption>Fam</figcaption>
          </figure>
          <figure>
            <img src={img3}/>
            <figcaption>House</figcaption>
          </figure>
          <figure>
            <img src={img4}/>
            <figcaption>Flowers</figcaption>
          </figure>
        </div>
      </div>
    );
  }
};

export default Gallery;
