import React from 'react';
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'
import flowers from '../../images/flowers.png';
import lilly from '../../images/lillyPolaroid.png';

class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        <Logo/>
        <div className="topbar">
          b o r i n g
        </div>
        <figure>
          <div className="textbox">
          </div>
          <figcaption>
            Jacob Kozol
          </figcaption>
        </figure>
      </div>
    );
  }
};

export default Resume;
