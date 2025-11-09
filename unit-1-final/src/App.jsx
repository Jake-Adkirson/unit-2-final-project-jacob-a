import {BrowserRouter, Route, Routes, Navigate } from 'react-router';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomePage from './components/WelcomePage';
import EventsPage from './components/EventsPage';
import UserProfile from './components/UserProfile';
import About from './components/About';
import CreateEvent from './components/CreateEvent';
import TripPage from './components/TripPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';


function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<Navigate to="/welcome" />} />
              <Route path="/sign_in" element={<SignIn />} />
              <Route path="/sign_up" element={<SignUp />} />
              <Route path="/welcome" element={<WelcomePage />} />
              <Route path="/events_page" element={<EventsPage />} />
                <Route path="/events_page/create_event" element={<CreateEvent />} />
              <Route path="/events/:eventId" element={<TripPage />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/about" element={<About />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  )
}

export default App