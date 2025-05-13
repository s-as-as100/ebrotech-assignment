import React, { useState } from "react";
import { SideContentData } from "../../constant/SideContentData";
import logo from "../../assets/icons/logo.png";
import "./sideBar.scss";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState(SideContentData[0].id); 

  const handleTabClick = (id) => {
    setActiveTab(id);
   };

  return (
    <div className="side-container">
      <div className="sidebar-header">
        <img src={logo} alt="logo" />
        <h2 className="poppins-font-family">Entra</h2>
      </div>

      <div className="sidebar-content">
        {SideContentData.map((item) => (
          <div
            key={item.id}
            className={`sidebar-item poppins-font-family ${activeTab === item.id && "active" }`}
            onClick={() => handleTabClick(item.id)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
