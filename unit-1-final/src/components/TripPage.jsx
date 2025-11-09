import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { useAuth } from './AuthContext';

const TripPage = () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);
    const { currentUser } = useAuth();

    useEffect(() => {
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

    const handleClick = async () => {

        try {
            const res = await fetch(`http://localhost:8080/events/${eventId}/attendees/${currentUser.id}`, {
                method: "POST",
                credentials: "include",
            });

            alert("Successfully joined event!")
            window.location.reload(false);
        } catch (err) {
            alert("Failed to join event")
        }
    }

    const leaveEvent = async () => {

        try {
            const res = await fetch(`http://localhost:8080/events/${eventId}/attendees/${currentUser.id}`, {
                method: "DELETE"
            });

            if (res.ok) {
                alert("You've been removed from this event.");
                window.location.reload(false);
            }
        } catch (err) {
            alert("Failed to remove from event")
        }
    }

    if (!event) return <p>Loading...</p>

    return(
        <div className="TripPage">
            <h2>Event Details</h2>
            <p>{event.name} | {event.location} | {event.date} </p>
            <h2>Attendees</h2>
            <button onClick={handleClick}>Join Event</button>
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
            <button onClick={leaveEvent}>Leave Event</button>
        </div>
    );
}

export default TripPage;