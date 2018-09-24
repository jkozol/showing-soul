import React from 'react';

const Stack = (props) => (
  <div className="stack">
    <div className="photoTop">
      <figure>
        <img src={props.image}/>
        <figcaption>
        First
        </figcaption>
      </figure>
    </div>
    <div className="photoLeft">
      <figure>
        <div className="textbox"></div>
        <figcaption>
        Second
        </figcaption>
      </figure>
    </div>
    <div className="photoRight">
      <figure>
        <div className="textbox"></div>
        <figcaption>
        Third
        </figcaption>
      </figure>
    </div>
  </div>
);

export default Stack;
