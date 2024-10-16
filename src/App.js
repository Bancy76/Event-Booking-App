import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthContext from './components/AuthContext';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import Login from './components/Login';

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    // Mock fetching event data
    fetch('/events.json')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <Router>
      <div className="App">
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<EventList events={events} />} />
            {/* Route to display event details */}
            <Route path="/events/:id" element={<EventDetails events={events} />} />
          </Routes>
        ) : (
          <Login />
        )}
      </div>
    </Router>
  );
};

export default App;
