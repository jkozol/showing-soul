import React from 'react';
import Logo from '../components/Logo'


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
