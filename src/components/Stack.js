import React from 'react';

const Stack = (props) => (
  <div className="stack">
    <div className="photoTop">
      <figure>
        <div className="colorbox"></div>
        <figcaption>
        {props.name}
        </figcaption>
      </figure>
    </div>
    <div className="photoLeft">
      <figure>
        <div className="colorbox"></div>
        <figcaption>
        First
        </figcaption>
      </figure>
    </div>
    <div className="photoRight">
      <figure>
        <div className="colorbox"></div>
        <figcaption>
        First
        </figcaption>
      </figure>
    </div>
  </div>
);

export default Stack;
