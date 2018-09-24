import React from 'react';

const Polaroid = ({ height }) => (
  <div className='item'>
    {title}
    <span
      className='deleteItem'
      onClick={remove(id)}
    > x </span>
  </div>
);

export default Polaroid;
