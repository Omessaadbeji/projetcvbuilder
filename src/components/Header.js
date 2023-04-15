import React from "react";
import images from "../assets/images.jpg";
export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <p className="title">
          Make Your Own <span>CV</span>. It's <span>Free</span>!
        </p>
      </div>
      <div className="header-rigth">
        <img src={images} />
      </div>
    </div>
  );
}
