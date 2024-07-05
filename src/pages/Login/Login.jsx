// import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  return (
      <div className="login">
          <img src={logo} className="login-logo" alt="" />
          <div className="login-logo" alt=""></div>
          <form action="" className="login-form">
          <h1>Sign in </h1>
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Email" />
              <input type="text" placeholder="Your Email" />
              <button>Sign In</button>
              <div className="form-help">
                  <div className="remember">
                      <input type="checkbox" />
                      <label htmlFor="">Remember Me</label>
                  </div>
                  <p>Need Help?</p>
              </div>
          </form>
      </div>
  );
}

export default Login
