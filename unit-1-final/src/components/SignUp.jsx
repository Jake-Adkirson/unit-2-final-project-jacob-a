import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext';

const SignUp = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        watercraft: "",
        age: "",
        location: ""
    });
    const [message, setMessage] = useState("");
    const { currentUser } = useAuth();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    //reaches out to back-end to register user, also redirects to sign in page, would like to refactor to auto sign in later
    const handleSignUp = async (e) => {
        e.preventDefault();
        
        try{
            const res = await axios.post("http://localhost:8080/users/register", formData);
            alert("Account created successfully!");
            navigate('/sign_in');
        } catch (err) {
            alert("Signup failed: " + (err.response?.data.message || err.message));
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
                    Preferred Watercraft: <input required type="text" name="watercraft" value={formData.watercraft} onChange={handleChange}placeholder="Enter watercraft..." />
                    <br/>
                    Location: <input required type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Enter location..." />
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