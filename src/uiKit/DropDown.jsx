import React from "react";
import { Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const DropDown = ({ items, value, onChange }) => {
  const handleMenuClick = (e) => {
    if (onChange) {
       const selectedItem = items.find(item => item.key === e.key);
      onChange(selectedItem ? selectedItem.label : null);
    }
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Dropdown menu={menuProps} trigger={["click"]}>
      <Button style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        {value  } <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default DropDown;