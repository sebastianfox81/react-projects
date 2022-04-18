import React from 'react';

const Menu = ({ id, title, price, img, desc } ) => {
  
  return (
    <div className="menu-item">
      <h5>{title}</h5>
      <img src={img} alt={title} className="photo"/>
      <h5>{price}</h5>
      <h5>{desc}</h5>

    </div>
  )
};

export default Menu;
