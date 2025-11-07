import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';


const TripPage = () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        console.log("Fetching event with id: ", eventId)
        fetch(`http://localhost:8080/events/${eventId}`).then(res => {
            if (!res.ok) throw new Error("Item not found.");
            return res.json();
        })
        .then(data => {;
            setEvent(data);
        })
        .catch(err => {
            console.error("Fetch error:", err);
            setError(err.message);
        });
    }, [eventId]);

    if (!event) return <p>Loading...</p>

    return(
        <div className="TripPage">
            <h2>Event Details</h2>
            <p>{event.name} | {event.location} | {event.date} </p>
            <h2>Attendees</h2>
            <button>
                <Link to="/join_event">Join Event</Link>
            </button>
            <br/>
            <table className="Data" border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>Attendee Name</th>
                        <th>Preferred Watercraft</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {event.attendees && event.attendees.length > 0 ? (
                        event.attendees.map((attendee) => (
                            <tr key={`${event.id}-${attendee.id}`}>
                                <td>{attendee.name}</td>
                                <td>{attendee.watercraft}</td>
                                <td>{attendee.age}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No details found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TripPage;