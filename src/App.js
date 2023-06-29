import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  return (
    <div className="App">
      {currentForm === "login" ? <Login /> : <Register />}
    </div>
  );
}

export default App;
