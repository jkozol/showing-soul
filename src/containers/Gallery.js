import React from 'react';
import Navbar from '../components/Navbar'
import Logo from '../components/Logo';
import Stack from '../components/Stack';
import flowers from '../../images/flowers.png';


class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery">
        <Logo />
        <div className="topbar">
          a e s t h e t i c
        </div>
        <div className="box">
          <Stack image={flowers} />
          <Stack image={flowers} />
          <Stack image={flowers} />
          <Stack image={flowers} />
          <Stack image={flowers} />
          <Stack image={flowers} />
          <Stack image={flowers} />
          <Stack image={flowers} />
          <Stack image={flowers} />
          <Stack image={flowers} />
          <Stack image={flowers} />
        </div>
      </div>
    );
  }
};

export default Gallery;
