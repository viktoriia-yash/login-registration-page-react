import React, { useState } from "react";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="page">
        <div className="row-one">
          <h2>Nice to</h2>
          <h2>meet you</h2>
        </div>
        <div className="row-two">
          <form onSubmit={handleSubmit} className="login-form">
            <label htmlFor="username" className="username-header">
              Username
            </label>
            <input
              name="username"
              id="username"
              placeholder="Your username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="email" className="email-header">
              Email
            </label>
            <input
              name="email"
              id="email"
              placeholder="Your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" className="password-header">
              Password
            </label>
            <input
              name="password"
              id="password"
              placeholder="*******"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="enter-btn">Join</button>
          </form>
          <button
            onClick={() => props.onFormSwitch("login")}
            className="switch-btn"
          >
            Already have an account? Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
