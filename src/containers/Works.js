import React from 'react';
import Navbar from '../components/Navbar'
import Logo from '../components/Logo';
import Stack from '../components/Stack';
import { Link } from 'react-router-dom';


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
            <Link to={'/about'}>
              <Stack name='projects'/>
            </Link>
          </div>
          <div className="photos">
            <Link to={'/gallery'}>
              <Stack name='photos'/>
            </Link>
          </div>
          <div className="writings">
            <Link to={'/about'}>
              <Stack name='writings'/>
            </Link>
          </div>
          <div className="inspo">
            <Link to={'/about'}>
              <Stack name='inspo'/>
            </Link>
          </div>
          <div className="temp">
            <Link to={'/about'}>
              <Stack name='temp'/>
            </Link>
          </div>
          <div className="temp2">
            <Link to={'/about'}>
              <Stack name='temp2'/>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default Works;
