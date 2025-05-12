import { Button as CustomButton } from "antd";
import React from "react";

const Button = ({ label, handleClick , className }) => {
  return <CustomButton className={className} onClick={handleClick}>{label}</CustomButton>;
};

export default Button;
