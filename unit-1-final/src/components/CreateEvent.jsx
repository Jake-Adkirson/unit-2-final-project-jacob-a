import { useState } from 'react';

const CreateEvent = () => {
    const [eventName, setEventName] = useState('');
    const [orgName, setOrgName] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {  //handles form submission and pushes data to google sheets that is located in my project folder
        e.preventDefault();
        fetch('https://hooks.zapier.com/hooks/catch/23886457/u2vppas/', { 
            method: "POST",
            body: JSON.stringify({ eventName, orgName, location, date }),
        }) .then(() => window.location.reload(), alert('Thank you for uploading your event!'));
    }

    const handleNameChange = (e) => {
    setEventName(e.target.value);
}
    const handleOrgChange = (e) => {
    setOrgName(e.target.value);
}
    const handleLocationChange = (e) => {
    setLocation(e.target.value);
}
    const handleDateChange = (e) => {
    setDate(e.target.value);
}


    return(
        <div className="MakeEvntFrm">
            <form onSubmit={handleSubmit}>
                <label>
                    Event Name: <input type="text" name="eventName" value={eventName} onChange={handleNameChange} />
                    Organizer: <input type='text' name='orgName' value={orgName} onChange={handleOrgChange} />
                    Location: <input type="text" name="location" value={location} onChange={handleLocationChange}  />
                    Date: <input type="text" name="date" value={date} onChange={handleDateChange} />
                </label>
                <br/>
                <button type="submit">Submit</button>
                <button>Clear</button>
            </form>
        </div>
    );
}

export default CreateEvent;