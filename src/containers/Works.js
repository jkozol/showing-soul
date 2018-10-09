import React from 'react';
import Navbar from '../components/Navbar'
import Logo from '../components/Logo';
import Stack from '../components/Stack';

import flowers from '../../images/flowers.png';


class Works extends React.Component {
  render() {
    return (
      <div className="works">
        <Logo />
        <div className="topbar">
          a e s t h e t i c
        </div>
        <div className="workbox">
          <div className="projects">
            <Stack name='projects'/>
          </div>
          <div className="photos">
            <Stack name='photos'/>
          </div>
          <div className="writings">
            <Stack name='writings'/>
          </div>
          <div className="inspo">
            <Stack name='inspo'/>
          </div>
          <div className="temp">
            <Stack name='temp'/>
          </div>
          <div className="temp2">
            <Stack name='temp2'/>
          </div>
        </div>
      </div>
    );
  }
};

export default Works;
