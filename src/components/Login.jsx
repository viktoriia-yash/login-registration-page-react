import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    email.preventDefault();
    console.log(email);
  };

  return (
    <>
      <div className="page">
        <div className="row-one">
          <h1></h1>
        </div>
        <div className="row-two">
          <form onSubmit={handleSubmit}>
            <label for="email">Email</label>
            <input
              type="email"
              placeholder="Your email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="password">Password</label>
            <input
              type="password"
              placeholder="*******"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Login</button>
          </form>
          <button>New here? Register</button>
        </div>
      </div>
    </>
  );
};

export default Login;
