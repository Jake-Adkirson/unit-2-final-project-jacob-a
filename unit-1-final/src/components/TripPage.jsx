import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useAuth } from './AuthContext';

const TripPage = () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);
    const { currentUser } = useAuth();

    //works with back-end to setEvent to currently selected event
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

    //handles join event button click to work with back-end to add user to event
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


    //handles leave event button click to work with back-end to remove user from event
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

    //maps through array of attendees within the event to display attendee info
    //conditionally renders to say new event details if none available, but ideally this should never happen with how things are setup
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