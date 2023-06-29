import React, { useState } from "react";

const Register = () => {
  return (
    <>
      <div className="page">
        <div className="row-one">
          <h1></h1>
        </div>
        <div className="row-two">
          <form>
            <label for="username">Username</label>
            <input name="username" id="username" placeholder="Your username" />
            <label for="email">Email</label>
            <input
              name="email"
              id="email"
              placeholder="Your email"
              type="email"
            />
            <label for="password">Password</label>
            <input
              name="password"
              id="password"
              placeholder="*******"
              type="password"
            />
            <button>Join</button>
          </form>
          <button>Already have an account? Login</button>
        </div>
      </div>
    </>
  );
};

export default Register;
