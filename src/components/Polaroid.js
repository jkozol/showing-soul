import React from 'react';

const Polaroid = props => (
  <div className="polaroid">
    <figure>
      <div className="imagebox">
        <img src={props.image} />
      </div>
      <figcaption>
      </figcaption>
    </figure>
  </div>
);

export default Polaroid;
