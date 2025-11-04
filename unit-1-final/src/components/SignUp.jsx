import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        prefWatercraft: "",
        age: "",
        state: ""
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:8080/users", formData);
            setMessage("Account created successfully!");
            setIsSignedIn(true);
        } catch (e) {
            setMessage("Signup failed: " + (e.response?.data.message || err.message));
        }
    };

    return (
        <div className="SignUp">
        <h2>Sign Up</h2>
            <form>
                Name: <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter name..." />
                <br/>
                Age: <input required type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Enter age..." />
                <br/>
                Preferred Watercraft: <input required type="text" name="prefWatercraft" value={formData.prefWatercraft} onChange={handleChange} placeholder="Enter watercraft..." />
                <br/>
                Location: <input required type="text" name="state" value={formData.state} onChange={handleChange} placeholder="Enter location..." />
                <br/>
                Email: <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email..." />
                <br/>
                Password: <input required type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter password..." />
                <br/>
                <button onClick={handleSignUp}>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;