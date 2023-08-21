import React from 'react';
import img1 from "../assets/logo_brush.png";
import img2 from "../assets/logo_css.png";
import img3 from "../assets/logo_html.png";

const Card = () => {
  return (
    <div className="cont">
      <div className="cart">
        <img className="img" src={img1} alt="" />
        <h3>Graphic Design</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates...</p>
        <a href="/logo" className="buton">Learn More</a>
      </div>
      <div className="cart">
        <img className="img" src={img2} alt="" />
        <h3>CSS3 Styling</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates...</p>
        <a href="/css" className="buton">Learn More</a>
      </div>
      <div className="cart">
        <img className="img" src={img3} alt="" />
        <h3>HTML5 Markup</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates...</p>
        <a href="/html" className="buton">Learn More</a>
      </div>
    </div>
  );
}

export default Card;
