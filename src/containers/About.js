import React from 'react';
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'
import flowers from '../../images/flowers.png';
import lilly from '../../images/lillyPolaroid.png';

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <Logo/>
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
              Most of the time I'm thinking about leaves, or the moon, or bunnies.
              My bun's name is Lilly :)
              I like the idea of writing poetry but the pen always seems to get stuck.
              I love music.
              Don't you hate people who skip songs halfway through?
              I am that person.
              So, who am I?

              I'm Jacob. Nice to meet you. `}
            </div>
            <figcaption>
              Who
            </figcaption>
          </figure>
        </div>
        <div className="why">
          <figure>
            <div className="textbox">
              {`Why do I make websites?

                Because you are reading this.`}
            </div>
            <figcaption>
              Why
            </figcaption>
          </figure>
        </div>
        <div className="what">
          <figure>
            <div className="textbox">
              {`Jacob Kozol
                Physics, Computer Science
                Boston
                21`}
            </div>
            <figcaption>
              What
            </figcaption>
          </figure>
        </div>
        <div className="aesthetic flowers">
          <figure>
            <img src={flowers}/>
            <figcaption>
            </figcaption>
          </figure>
        </div>
        <div className="aesthetic lilly">
          <figure>
            <img src={lilly}/>
            <figcaption>
            </figcaption>
          </figure>
        </div>

      </div>
    );
  }
};

export default About;
