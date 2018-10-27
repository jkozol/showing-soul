import React from 'react';
import Logo from '../components/Logo'
import links from '../../images/links.json';
import flowers from '../../images/flowers.png';
// import * from '../../images/gallery'
import Polaroid from '../components/Polaroid';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../images/gallery', false, /\.(png|jpe?g|svg)$/));

class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery">
        <Logo />
        <div className="topbar">
          a e s t h e t i c
        </div>
        <div className="box">
          {images.map(image => {
            return <Polaroid image={image} />
          })}
        </div>
      </div>
    );
  }
};

export default Gallery;
