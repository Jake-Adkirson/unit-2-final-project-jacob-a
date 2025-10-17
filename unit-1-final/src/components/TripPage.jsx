import { Link } from 'react-router';

const TripPage = () => {
    return(
        <div className="TripPage">
            <h2>Event Details</h2>
            <p>Event Name: Super Float Event Organizer: Jake A. Event Date: 8/15/25 - 8/17/25 Event Location: Bass River Resort</p>
            <h2>Attendees</h2>
            <button>
                <Link to="/join_event">Join Event</Link>
            </button>
            <br/>
            <ul>
                <li>Name: Jake A. Age: 13+yrs Watercraft: Kayak Floating and/or Camping: Floating and Camping</li>
                <li>Name: Brittany A. Age: 13+yrs Watercraft: Kayak Floating and/or Camping: Floating and Camping</li>
                <li>Name: Jon H. Age: 13+yrs Watercraft: Raft Floating and/or Camping: Floating and Camping</li>
                <li>Name: Shawnna H. Age: 13+yrs Watercraft: Raft Floating and/or Camping: Floating and Camping</li>
                <li>Name: Roman H. Age: 0 - 7yrs Watercraft: Raft Floating and/or Camping: Floating and Camping</li>
                <li>Name: Kaleb S. Age: 13+yrs Watercraft: Kayak Floating and/or Camping: Floating and Camping</li>
                <li>Name: Carly A. Age: 13+yrs Watercraft: Raft Floating and/or Camping: Floating and Camping</li>
            </ul>
                <h2>Pricing</h2>
            <ul>
                <li>Name: Jake A. Camping: 35.98 Floating: 46 Total: 81.98</li>
                <li>Name: Brittany A. Camping: 35.98 Floating: 46 Total: 81.98</li>
                <li>Name: Jon H. Camping: 35.98 Floating: 55.2 Total: 91.18</li>
                <li>Name: Shawnna H. Camping: 35.98 Floating: 55.2 Total: 91.18</li>
                <li>Name: Roman H. Camping: 0 Floating: 0 Total: 0</li>
                <li>Name: Kaleb S. Camping: 35.98 Floating: 46 Total: 81.98</li>
                <li>Name: Carly A. Camping: 35.98 Floating: 55.2 Total: 91.18</li>
            </ul>
        </div>
    );
}

export default TripPage;