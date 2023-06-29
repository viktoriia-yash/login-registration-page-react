import React, { useState } from "react";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

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
            <label htmlFor="username">Username</label>
            <input
              name="username"
              id="username"
              placeholder="Your username"
              value={username}
            />
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              placeholder="Your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              placeholder="*******"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Join</button>
          </form>
          <button onClick={() => props.onFormSwitch("login")}>
            Already have an account? Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
