import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';


const PasswordInput = ({placeholder,value,onChange}) => {
  return (
     <Input.Password
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
     )
}

export default PasswordInput;