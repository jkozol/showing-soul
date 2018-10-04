import React from 'react';
import Navbar from '../components/Navbar'
import Logo from '../components/Logo';
import Stack from '../components/Stack';

import flowers from '../../images/flowers.png';


class Gallery extends React.Component {
  render() {
    const Images = [
      {
        last: flowers,
        image: flowers,
        next: flowers,
      }, {
        last: flowers,
        image: flowers,
        next: flowers,
      }, {
        last: flowers,
        image: flowers,
        next: flowers,
      }
    ]

    return (
      <div className="gallery">
        <Logo />
        <div className="topbar">
          a e s t h e t i c
        </div>
        <div className="box">
          {Images.map(image => {
            return <Stack image={image} />
          })}
        </div>
      </div>
    );
  }
};

export default Gallery;
