import React from 'react';
import Hero from '../components/sections/Hero';
import EventCard from '../components/ui/EventCard';
import Gallery from '../components/sections/Gallery';
import Testimonials from '../components/sections/Testimonials';
import micImage from '../images/mic.jpg';
import HackImage from '../images/Hack.jpg';
import down1 from '../images/worshop.jpg';

const Home = () => {
  // Sample event data
  const upcomingEvents = [
    {
      id: 1,
      title: "Cloud Architecture Workshop",
      date: "April 15, 2025",
      description: "Learn the fundamentals of cloud architecture and best practices for designing scalable solutions.",
      image: down1,
      registrationLink: "/events/1/register"
    },
    {
      id: 2,
      title: "DevOps in the Cloud",
      date: "May 20, 2025",
      description: "Explore DevOps practices and tools for efficient cloud infrastructure management.",
      image: micImage,
      registrationLink: "/events/2/register"
    },
    {
      id: 3,
      title: "Serverless Computing Summit",
      date: "June 10, 2025",
      description: "Discover the power of serverless architecture and how it can transform your applications.",
      image: HackImage,
      registrationLink: "/events/3/register"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map(event => (
              <EventCard 
                key={event.id}
                title={event.title}
                date={event.date}
                description={event.description}
                image={event.image}
                registrationLink={event.registrationLink}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <Gallery />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Quick About Section */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">About Cloud User Group</h2>
          <p className="text-lg mb-8">
            We are a community of cloud enthusiasts and professionals dedicated to sharing knowledge, best practices, and innovations in cloud computing. Join us to learn, network, and grow together!
          </p>
          <div className="flex justify-center">
            <a href="/about" className="bg-white text-blue-600 px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition">
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;