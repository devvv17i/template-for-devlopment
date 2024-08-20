import React from "react";
import "./Form.css";

const Signup = () => {
  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" required />
        </div>
        <div className="form-group">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
