import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  document.title = "Login | Viktoriia Yash Project";

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
          <p className="credit">
            <a
              href="https://github.com/viktoriia-yash/login-registration-page-react"
              className="github"
              rel="noopener noreferrer"
              target="_blank"
            >
              Open-source code
            </a>{" "}
            by Viktoriia Yashkina
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
