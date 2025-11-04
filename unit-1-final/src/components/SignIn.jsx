import React, { useState } from "react";
import axios from "axios";
import ReusableButton from './ReusableButton';
import ReusableLink from './ReusableLink';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignIn = async (e) => {
        e.preventDefault();

        try{
            const res = await axios.post("http://localhost:8080/users", formData);

            setMessage("Sign in successful!")
        } catch (e) {
            setMessage("Sign in failed: " + (e.response?.data.message || err.message));
        }
    };

    return(
        <div className="SignIn">
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
    );
}

export default SignIn;