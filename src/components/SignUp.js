import React from 'react';
import './SignUp.css'; // Import the CSS file

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="header">
        <h2>Sign Up</h2>
      </div>
      <form>
        <label>Name:<br></br>            
          <input type="text" className="input-field" />
        </label><br></br>
        <label>Email:<br></br>
          <input type="email" className="input-field" />
        </label>
        <label>Password:<br></br>
          <input type="password" className="input-field" />
        </label>
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
      <div className="navigation">
        <a href="/login">Already Registered? Login</a>
        {/* <a href="/signup">Sign Up</a> */}
      </div>
    </div>
  );
};

export default SignUp;