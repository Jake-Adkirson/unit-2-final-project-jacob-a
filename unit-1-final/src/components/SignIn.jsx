import React, { useState } from "react";
import axios from "axios";
import ReusableButton from './ReusableButton';
import ReusableLink from './ReusableLink';
import { useAuth } from './AuthContext';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [message, setMessage] = useState("");
    const { currentUser, logout, login } = useAuth();
    const [error, setError] = useState("");
 
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignIn = async (e) => {
        e.preventDefault();

        try{
            const res = await fetch("http://localhost:8080/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(formData),
            });

            if (res.ok) {
                const user = await res.json();
                login(user);
            } else {
                setError("Invalid credentials");
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong")
        }
    };

    return(
        <div className="SignIn">
            {!currentUser ? (
                <div>
                <h2>Sign In</h2>
                <form>
                    Email: <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email..." />
                    Password: <input required type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter password..." />
                    <br/>
                    <button onClick={handleSignIn}>Sign In</button>
                    <ReusableButton>
                        <ReusableLink to={"/sign_up"}>Sign Up</ReusableLink>
                    </ReusableButton>
                </form>
                </div>
            ) : (
                <div>
                    <h2>Welcome, {currentUser.name}!</h2>
                    <p>You are now logged in.</p>
                </div>
        )}
        </div>
    );
}

export default SignIn;