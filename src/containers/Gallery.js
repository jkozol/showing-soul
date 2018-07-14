import React from 'react';
import Navbar from '../components/Navbar'
import Logo from '../components/Logo';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';


class Gallery extends React.Component {
  render() {
    return (
      <div className="container">
        <Logo />
        <div className="topbar">
          a e s t h e t i c
        </div>
        <div className="gallery">
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
