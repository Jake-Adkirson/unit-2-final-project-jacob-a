import { useState } from "react";
import ReusableButton from './ReusableButton';
import ReusableLink from './ReusableLink';
import { useAuth } from './AuthContext';

const SignIn = () => {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const { currentUser, login } = useAuth();
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value}));

        setErrors((prev) => ({ ...prev, [name]: ""}))
    };

    //used to give UI feedback to user for required fields
    const validate = () => {
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password is required"
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    //makes use of previous validation function
    const handleSignIn = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            await login(formData.email, formData.password);
            alert("Login successful");
        } catch (err) {
            alert("Login failed. Please check your email and password")
        }
    };

    return(
        <div className="SignIn">
            {!currentUser ? (
                <div>
                <h2>Sign In</h2>
                <form onSubmit={handleSignIn} noValidate>
                    Email: <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email..." />
                    {errors.email && <p style={{ color: "red"}}>{errors.email}</p>}
                    Password: <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter password..." />
                    {errors.password && <p style={{ color: "red"}}>{errors.password}</p>}
                    <br/>
                    <button type="submit">Sign In</button>
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