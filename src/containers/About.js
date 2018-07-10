import React from 'react';
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'
import logo from '../images/me.jpg'
import flowers from '../images/flowers.jpg';

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
              {` Who am I?
              I'm a mess.
              No really I am.
              More impetuous than spontaneous.
              I mean look at this site`} &mdash; {`clutter.
              They say a messy desk is a sign of genius.
              I sure hope so; my desk isn't too messy but please don't look at my code.
              Most of the time I'm thinking about leaves, or the moon, or bunnies (mine's name is Lilly).
              I like the idea of writing poetry but the pen always seems to get stuck.
              I love music.
              Don't you hate people who skip songs halfway through?
              I am that person.
              So, who am I?
              I'm Jacob. Nice to meet you. `}
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
        <div className="aesthetic">
          <figure>
            <img src={flowers}/>
            <figcaption>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
};

export default About;
