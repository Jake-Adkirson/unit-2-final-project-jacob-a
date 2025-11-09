import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const CreateEvent = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        date: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //reaches out to backend to POST new event
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const res = await axios.post("http://localhost:8080/events/create", formData);
            alert("Event created successfully!");
            navigate('/events_page');
        } catch (err) {
            alert("Creation failed: " + (err.response?.data.message || err.message));
        }
    };


    return(
        <div className="MakeEvntFrm">
            <form onSubmit={handleSubmit}>
                <label>
                    Event Name: <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    Location: <input type="text" name="location" value={formData.location} onChange={handleChange}  />
                    Date: <input type="text" name="date" value={formData.date} onChange={handleChange} />
                </label>
                <br/>
                <button type="submit">Submit</button>
                <button>Clear</button>
            </form>
        </div>
    );
}

export default CreateEvent;