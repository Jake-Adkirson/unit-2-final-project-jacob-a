import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import axios from 'axios';

const EventsPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const rows = data.filter(row => row.length > 0);

    useEffect(() => { //uses google sheets API to load data from google sheet in project folder
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://sheets.googleapis.com/v4/spreadsheets/1XGZyeeLtsE3gUdgYZOBrXmymrHSWkzP9dFEiNwv5dBo/values/Sheet1!A2:D500?key=AIzaSyATPhbEPCa76G2XT63QCG0mpk4Q_BYYimI`);
                    setData(response.data.values);
                    setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    
    if(loading) {
        return <p className="EventsPage">Loading events...</p>
    }

    if (error) {
        alert(error.message);
    }

    return(
        <div className="EventsPage">
            <h2>Events</h2>
            <motion.button animate={{ x: 0, scale: 1 }} initial={{ x: 100, scale: 0 }}>
                <Link to="/events_page/create_event">Create Event</Link>
            </motion.button>
            <table className="Data" border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Organizer</th>
                        <th>Location</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (  //maps through array pulled from google sheet to display in table and make column 1 links, will be important in Unit 2 project
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => {
                                if (cellIndex === 0) {;
                                    return ( //Link to below redirects to /trip_page/ and adds event name from link clicked after last slash
                                        <td key={cellIndex}>
                                            <Link to={'/trip_page/'+ row[0]}>{cell}</Link> 
                                        </td>
                                    );
                                } else {
                                    return <td key={cellIndex}>{cell}</td>
                                }
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EventsPage;