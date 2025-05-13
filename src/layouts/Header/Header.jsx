import React from "react";
import profileIcon from "../../assets/icons/profileIcon.svg";
import bellIcon from "../../assets/icons/bell.png";

import "./header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <img className="icon-small" src={bellIcon} alt="icon" />
        <img className="icon-small" src={profileIcon} alt="icon" />
      </div>
    </div>
  );
};

export default Header;
