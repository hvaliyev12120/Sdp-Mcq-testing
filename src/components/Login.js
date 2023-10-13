import React from 'react';
import './Login.css'; // Import the CSS file

const Login = () => {
    return (
        <div className="login-container">
            <div className='header'>
                <h2>Login Page</h2>
            </div>
            <div className='input-container'>
                <form>
                    <label>Email:   <br></br>
                        <input type="email" className="input-field" />
                    </label>
                    <label>Password:
                        <input type="password" className="input-field" />
                    </label>    <br></br>
                    <button type="submit" className="submit-button">Login</button>
                </form>
                <div className='navigation'>
                    {/* <a href='/login'>Login</a> */}
                    <a href='/signup'>Create Account</a>
                </div>
            </div>

        </div>
    );
};

export default Login;