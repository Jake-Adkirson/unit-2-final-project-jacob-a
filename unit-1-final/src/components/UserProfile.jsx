import { useAuth } from './AuthContext';
import { useState, useEffect } from 'react';
import ReusableInputField from './ReusableInputField';

const UserProfile = () => {
    const { currentUser, updateUser } = useAuth();
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        watercraft: "",
        age: "",
        location: ""
    });

    //presets form data on account editor to have current information populated
        useEffect(() => {
            if (currentUser) {
                setFormData({
                    name: currentUser.name,
                    email: currentUser.email,
                    password: currentUser.password,
                    watercraft: currentUser.watercraft,
                    age: currentUser.age,
                    location: currentUser.location
                });
            }
        }, [currentUser]);

        //updates formData based on user inputs
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value}));
        };

        //utilizes updateUser to send updated info to back-end and sets edit mode to false to give normal profile view back
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                await updateUser(formData);
                alert("Profile updated successfully!")
                setEditMode(false);
            } catch (err) {
                alert("Failed to update profile")
            }
        }

    //conditionally renders please sign in message if not signed in, also conditionally renders profile/updater based on state of editMode
    //populates user info based on currentUser
    return( 
        <div>
        {currentUser ? ( 
            <div className="Profile">
                {editMode ? (
                    <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" />
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name: </label>
                        <ReusableInputField type={"text"} name="name" value={formData.name} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Email: </label>
                        <ReusableInputField type={"text"} name="email" value={formData.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Password: </label>
                        <ReusableInputField type={"text"} name="password" value={formData.password} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Watercraft: </label>
                        <ReusableInputField type={"text"} name="watercraft" value={formData.watercraft} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Age: </label>
                        <ReusableInputField type={"text"} name="age" value={formData.age} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Location: </label>
                        <ReusableInputField type={"text"} name="location" value={formData.location} onChange={handleChange}/>
                    </div>
                    <button type="submit">Update Account</button>
                </form>
                </div>
                ) : (
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" />
                        <p><strong>Name:</strong> {currentUser.name}</p>
                        <p><strong>Age:</strong> {currentUser.age}</p>
                        <p><strong>Preferred Watercraft:</strong> {currentUser.watercraft}</p>
                        <p><strong>Location:</strong> {currentUser.location}</p>

                        <button onClick={() => setEditMode(true)}>Edit Account</button>
                    </div>
                )}
            </div>
        ) : (
            <div className="Profile">
                <p>Please sign up or log in to view your profile!</p>
            </div>
        )}
        </div>
    );
}

export default UserProfile;