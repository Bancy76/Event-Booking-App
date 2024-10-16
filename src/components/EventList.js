import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EventList.css'; // Import the CSS file

const EventList = ({ events }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Function to handle the category filter
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Function to handle the search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter events based on the selected category and search term
  const filteredEvents = events.filter((event) => {
    const matchesCategory = selectedCategory
      ? event.category === selectedCategory
      : true;
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="event-list">
      <h2>Event List</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />

      {/* Category Filter Dropdown */}
      <select value={selectedCategory} onChange={handleCategoryChange} className="category-select">
        <option value="">All Categories</option>
        <option value="Music">Music</option>
        <option value="Art">Art</option>
        <option value="Technology">Technology</option>
        <option value="Food">Food</option>
      </select>

      {/* Display Filtered Events */}
      <div className="event-cards">
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-card">
            <Link to={`/events/${event.id}`} className="event-title">
              {event.title}
            </Link>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
