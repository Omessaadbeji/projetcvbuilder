import React from "react";

export default function PersonalDetails() {
  return (
    <div className="container">
      <div className="identity">
        <img src="" />
        <div className="main">
          <div className="name">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="family name" />
            <div className="email">
              <input type="email" placeholder="email address" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
