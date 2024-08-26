import React, { useState } from 'react';
import './log.css';

const LoginRegister = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const register = async () => {
       
        let result = await fetch('http://localhost:5000/api/v1/sign-up', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
    };

    const login = async () => {
        
        let result = await fetch('http://localhost:5000/api/v1/sign-in', {
            method: 'post',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
    };

    return (
        <div className="lr-container">
            <div className="lr-form-container">
                {isLogin ? (
                    <div className="lr-login-form">
                        <h2>Login</h2>
                        <form onSubmit={login}>
                            <div className="lr-input-group">
                                <label>UserName</label>
                                <input type="text" required onChange={(e) => setUser(e.target.value)} />
                            </div>
                            <div className="lr-input-group">
                                <label>Password</label>
                                <input type="password" required onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="lr-submit-button" onClick={login}>Login</button>
                        </form>
                        <p>
                            Don't have an account? 
                            <span className="lr-toggle-link" onClick={toggleForm}>Register</span>
                        </p>
                    </div>
                ) : (
                    <div className="lr-register-form">
                        <h2>Register</h2>
                        <form onSubmit={register}>
                            <div className="lr-input-group">
                                <label>Name</label>
                                <input type="text" required onChange={(e) => setUser(e.target.value)} />
                            </div>
                            <div className="lr-input-group">
                                <label>Email</label>
                                <input type="email" required onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="lr-input-group">
                                <label>Password</label>
                                <input type="password" required onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="lr-submit-button" onClick={register}>Register</button>
                        </form>
                        <p>
                            Already have an account? 
                            <span className="lr-toggle-link" onClick={toggleForm}>Login</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginRegister;
