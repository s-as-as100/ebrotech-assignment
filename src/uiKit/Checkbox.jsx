import React from 'react'
import { Checkbox as CustomCheckbox } from "antd";


const Checkbox = ({onChange}) => {
  return (
    <CustomCheckbox onChange={onChange}>Checkbox</CustomCheckbox>
  )
}

export default Checkbox;
