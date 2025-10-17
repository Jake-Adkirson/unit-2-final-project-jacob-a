import { useState } from "react";

const JoinEvent = () => {
    const [formData, setFormData] = useState({
        name:"",
        age:"",
        watercraft:"",
        camping:"",
    });
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    return(
        <div className="MakeEvntFrm">
            <form>
                <label>
                    Name: <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    Age:
                    <select name="age" value={formData.age} onChange={handleChange}>
                        <option disabled value="">Choose Age...</option>
                        <option value="child">0 - 7yrs</option>
                        <option value="youth">8 - 12yrs</option>
                        <option value="adult">13+yrs</option>
                    </select>
                    Watercraft:
                    <select name="watercraft" value={formData.watercraft} onChange={handleChange}>
                        <option disabled value="">Choose Watercraft...</option>
                        <option value="raft">Raft</option>
                        <option value="kayak">Kayak</option>
                        <option value="canoe">Canoe</option>
                    </select>
                    Camping and/or Floating: 
                    <select name="camping" value={formData.camping} onChange={handleChange}>
                        <option disabled value="">Choose Selection...</option>
                        <option value="camping">Camping</option>
                        <option value="floating">Floating</option>
                        <option value="both">Camping and Floating</option>
                    </select>
                </label>
                <br/>
                <button>Submit</button>
                <button>Clear</button>
            </form>
        </div>
    );
}

export default JoinEvent;