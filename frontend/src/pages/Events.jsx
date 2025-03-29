import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/ui/EventCard';
import CountdownTimer from '../components/ui/CountdownTimer';
import FAQ from '../components/sections/FAQ';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Mock data - in a real app, you would fetch this from an API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setEvents([
        {
          id: 1,
          title: 'Annual Conference 2025',
          date: 'May 15-17, 2025',
          location: 'San Francisco Convention Center',
          description: 'Join us for our flagship event featuring industry leaders, workshops, and networking opportunities.',
          image: '/images/conference.jpg',
          registrationDeadline: new Date('2025-04-30')
        },
        {
          id: 2,
          title: 'Summer Workshop Series',
          date: 'June 5-26, 2025',
          location: 'Virtual Event',
          description: 'Four consecutive Thursday workshops covering the latest trends and techniques in the industry.',
          image: '/images/workshop.jpg',
          registrationDeadline: new Date('2025-05-20')
        },
        {
          id: 3,
          title: 'Networking Mixer',
          date: 'April 12, 2025',
          location: 'Downtown Lounge, Seattle',
          description: 'An evening of casual networking with professionals from across the industry.',
          image: '/images/mixer.jpg',
          registrationDeadline: new Date('2025-04-05')
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const upcomingEvent = events.length > 0 ? events[0] : null;

  return (
    <div className="events-page">
      <section className="hero-section bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-xl max-w-2xl mb-8">Join us at our upcoming events to learn, connect, and grow with like-minded professionals.</p>
        </div>
      </section>

      <section className="events-list py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">All Events</h2>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="past-events py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Winter Summit 2024</h3>
              <p className="text-gray-600 mb-4">December 10-12, 2024 | Denver, CO</p>
              <button className="text-blue-600 hover:text-blue-800">View Recordings →</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Fall Symposium</h3>
              <p className="text-gray-600 mb-4">October 5, 2024 | Chicago, IL</p>
              <button className="text-blue-600 hover:text-blue-800">View Recordings →</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Tech Conference 2024</h3>
              <p className="text-gray-600 mb-4">August 22-24, 2024 | Virtual Event</p>
              <button className="text-blue-600 hover:text-blue-800">View Recordings →</button>
            </div>
          </div>
        </div>
      </section>
      <FAQ/>
    </div>
  );
};

export default Events;