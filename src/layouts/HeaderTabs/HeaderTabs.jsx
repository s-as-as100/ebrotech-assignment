import React, { useState } from "react";
import "./headerTabs.scss";
import { TabData } from "../../constant/TabData";

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("single-invite");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="header-tabs">
      {TabData.map((tab) => (
        <div
          key={tab.id}
          className={`tab ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default HeaderTabs;
