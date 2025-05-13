import React from 'react'
import Input from '../../uiKit/Input'
import PasswordInput from '../../uiKit/PasswordInput'
import Checkbox from '../../uiKit/Checkbox'
import Button from '../../uiKit/Button';
import './LoginCard.scss';

const LoginCard = () => {
  return (
    <div  className='card-container'>
       <h2 className='poppins-font-family'>Welcome,</h2>
       <span className='poppins-font-family'>Login to continue to ENTRA</span>

       <div className="login-form">
        <span className='poppins-font-family font-size-md'>Email Address</span>
        <Input  placeholder="name@example.com"/>

        <span className='poppins-font-family font-size-md'>Password</span>
        <PasswordInput/>
        <div className="forgot-password">
          <span className='poppins-font-family font-size-small'>Forgot Password?</span>
          </div>
          <Checkbox  label="Remember me"/>

          <Button className="primary-button" label="Login"/>
       </div>
             
    </div>
  )
}

export default LoginCard
