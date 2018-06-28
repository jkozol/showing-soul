import React from 'react';
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'
import logo from '../images/me.jpg'

class About extends React.Component {
  render() {
    const links = [
      {to: '/gallery', name: 'Gallery'},
      {to: '/about', name: 'About'},
      {to: '/work', name: 'Work'}
    ];

    return (
      <div className="container">
        <Logo />
        <div className="topbar">
          lies
        </div>
        <div className="who">
          <figure>
            <div className="textbox">
              hi
              <br />
              My Name is Jacob.
              <br />
              Im sorry you have to see this shit.
            </div>
            <figcaption>
              <Navbar links={links}/>
            </figcaption>
          </figure>
        </div>
        <div className="why">
          <figure>
            <div className="textbox">
              about about about
            </div>
            <figcaption>
              <Navbar links={links}/>
            </figcaption>
          </figure>
        </div>
        <div className="what">
          <figure>
            <div className="textbox">
              what what what
            </div>
            <figcaption>
              <Navbar links={links}/>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
};

export default About;
