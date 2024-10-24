import React from "react";
import "../CSS/login.css";
function Login() {
  async function getData() {
    const url = "#";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <div className="login-container">
        <form className="login-form">
          <h2>Login</h2>
          <div className="input-box">
            <input type="text" id="username" required />
            <label for="username">Username</label>
          </div>
          <div className="input-box">
            <input type="password" id="password" required />
            <label for="password">Password</label>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
