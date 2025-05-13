import React from 'react'
import { Checkbox as CustomCheckbox } from "antd";


const Checkbox = ({onChange,label,value}) => {
  return (
    <CustomCheckbox value={value} onChange={onChange}>{label}</CustomCheckbox>
  )
}

export default Checkbox;
