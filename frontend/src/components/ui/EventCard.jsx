import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event, title, date, description, image, registrationLink }) => {
  // Handle both formats of props (from Events page and Home page)
  const eventTitle = event?.title || title;
  const eventDate = event?.date || date;
  const eventDescription = event?.description || description;
  const eventImage = event?.image || image;
  const eventId = event?.id || (registrationLink ? registrationLink.split('/').pop() : null);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {eventImage && (
        <div className="h-48 w-full overflow-hidden">
          <img 
            src={eventImage} 
            alt={eventTitle} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{eventTitle}</h3>
        <p className="text-gray-600 mb-4">{eventDate}</p>
        <p className="text-gray-700 mb-4">{eventDescription}</p>
        <Link
          to={event ? `/events/${eventId}/register` : `/register`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default EventCard;