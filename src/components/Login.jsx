import React from "react";

const Login = () => {
  return (
    <>
      <div className="page">
        <div className="row-one">
          <h1></h1>
        </div>
        <div className="row-two">
          <form>
            <label for="email">Email</label>
            <input
              type="email"
              placeholder="Your email"
              id="email"
              name="email"
            />
            <label for="password">Password</label>
            <input
              type="password"
              placeholder="*******"
              id="password"
              name="password"
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
