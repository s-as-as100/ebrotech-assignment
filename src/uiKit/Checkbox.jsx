import React from 'react'
import { Checkbox as CustomCheckbox } from "antd";


const Checkbox = ({onChange,label}) => {
  return (
    <CustomCheckbox onChange={onChange}>{label}</CustomCheckbox>
  )
}

export default Checkbox;
