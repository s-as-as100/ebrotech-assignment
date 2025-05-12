import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';


const PasswordInput = ({placeholder}) => {
  return (
     <Input.Password
        placeholder={placeholder}
        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
     )
}

export default PasswordInput;