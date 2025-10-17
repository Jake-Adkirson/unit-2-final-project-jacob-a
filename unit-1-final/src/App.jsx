import {BrowserRouter, Route, Routes, Navigate } from 'react-router';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomePage from './components/WelcomePage';
import EventsPage from './components/EventsPage';
import UserProfile from './components/UserProfile';
import About from './components/About';
import CreateEvent from './components/CreateEvent';
import JoinEvent from './components/JoinEvent';
import TripPage from './components/TripPage';
import SignInSignUp from './components/SignInSignUp';

function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<Navigate to="/sign_in_sign_up" />} />
              <Route path="/sign_in_sign_up" element={<SignInSignUp />} />
              <Route path="/welcome" element={<WelcomePage />} />
              <Route path="/events_page" element={<EventsPage />} />
                <Route path="/events_page/create_event" element={<CreateEvent />} />
              <Route path="/trip_page/:eventName" element={<TripPage />} />
              <Route path="/join_event" element={<JoinEvent />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/about" element={<About />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  )
}

export default App