import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import logo from '../../images/mePolaroid.png'

class Home extends React.Component {
  render() {
    console.log('here');
    console.log(this.props);
    return (
      <div className="home">
        <Logo />
        <div className="topbar">
        hi
        </div>
        <LastArrow last={this.props.image.last}/>
        <div className="image">
          <figure>
            <img src={this.props.image.image}/>
            <figcaption
            </figcaption>
          </figure>
        </div>
        <NextArrow next={this.props.image.next}/>
      </div>
    );
  }
};

export default Home;
