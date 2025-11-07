import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router';
import axios from 'axios';

const EventsPage = () => {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    


    useEffect(() => { 
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8080/events");
                setRows(res.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
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
                        <th>Location</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {rows && rows.length > 0 ? (
                        rows.map((event) => (
                            <tr key={event.id}>
                                <td>
                                    <Link to={`/events/${event.id}`}>{event.name}</Link>
                                </td>
                                <td>
                                    {event.location}
                                </td>
                                <td>
                                    {event.date}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No events found</td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default EventsPage;