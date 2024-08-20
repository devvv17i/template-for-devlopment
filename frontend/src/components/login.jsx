
import React from "react";
import "./Form.css";

const Login = () => {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" required />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
        
      </form>
    </div>
  );
};

export default Login;
