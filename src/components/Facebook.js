import React from "react";
import Gallary from "../assets/gallary.jpeg"
import List from "../assets/list.jpeg"
import Avatar from "../assets/avatar.jpeg"

import "./Facebook.css";

const Facebook = () => {
  return (
    <div className="facebook">
      <div className="facebookItem">
      <img src={List} alt="dd" className="facebokIcon"  />
        <span className="facebookText">
          <p>List</p>
        </span>
      </div>
      <div className="facebookItem">
        <img src={Gallary} alt="dd" className="facebokIcons"  />
        <span className="facebookText">
          <p>Photo/Videos</p>
        </span>
      </div>
      <div className="facebookItem">
      <img src={Avatar} alt="dd" className="facebokIcon"  />
        <span className="facebookText">
          <p>Tag Friends</p>
        </span>
      </div>
      <div className="facebookItem">
        <span className="facebookText1">
          <p>...</p>
        </span>
      </div>
     
    </div>
  );
};

export default Facebook;
