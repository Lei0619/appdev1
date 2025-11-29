import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const correctPassword = process.env.REACT_APP_LOGIN_PASSWORD;
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (password !== correctPassword) {
            alert("Incorrect password. Please try again.");
            return;
        }

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}`);

            if (response.data.length > 0) {
                alert("Login successful!");

                localStorage.setItem('isAuthenticated', 'true');

                navigate('/todos');
            }
            else {
                alert("Username not found. Please try again.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred during login. Please try again later.");
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <div className="login-field">
                    <label className="login-label">Username</label>
                    <input
                        className="login-input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="login-field">
                    <label className="login-label">Password</label>
                    <input
                        className="login-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="login-button" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;