import React from "react";
import { Input as CustomInput } from "antd";
 
 const Input = ({ placeholder, value, onChange, className }) => {
   return (
    <CustomInput
       placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
   />
  );
};

export default Input;
