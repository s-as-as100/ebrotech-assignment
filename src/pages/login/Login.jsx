import React from "react";
import LoginCard from "../../components/LoginCard/LoginCard";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="left-content">
        <h1 className="poppins-font-family">Start your journey with us.</h1>
        <p className="poppins-font-family font-size-md">
          It brings together your tasks,
          <br />
          projects, timelines, files and more.
        </p> 
      </div>

      <div className="right-content">
        <LoginCard />
      </div>
    </div>
  );
};

export default Login;
