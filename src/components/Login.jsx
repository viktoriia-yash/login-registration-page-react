import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="page">
        <div className="row-one">
          <h2>Welcome</h2>
          <h2>back!</h2>
        </div>
        <div className="row-two">
          <form onSubmit={handleSubmit} className="login-form">
            <label htmlFor="email" className="email-header">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" className="password-header">
              Password
            </label>
            <input
              type="password"
              placeholder="*******"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="enter-btn">Login</button>
          </form>
          <button
            onClick={() => props.onFormSwitch("register")}
            className="switch-btn"
          >
            New here? Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
