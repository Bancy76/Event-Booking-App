import React from 'react';
import { useParams } from 'react-router-dom';
import './EventDetails.css'; // Import the CSS file for details

const EventDetails = ({ events }) => {
  const { id } = useParams();
  const event = events.find((event) => event.id === parseInt(id));

  if (!event) {
    return <p>Event not found.</p>;
  }

  return (
    <div className="event-details">
      <h2 className="event-title">{event.title}</h2>
      <p className="event-description"><strong>Description:</strong> {event.description}</p>
      <p><strong>Category:</strong> {event.category}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Available Seats:</strong> {event.availableSeats}</p>
      <p><strong>Price:</strong> ${event.price}</p>
      {event.availableSeats > 0 ? (
        <button>Book Ticket</button>
      ) : (
        <p>This event is fully booked.</p>
      )}
    </div>
  );
};

export default EventDetails;
