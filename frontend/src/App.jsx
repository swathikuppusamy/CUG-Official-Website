import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Events from './pages/Events';
import Contact from './pages/Contact';
import RegistrationForm from './components/ui/RegistrationForm';

function App() {
  // Sample events data to pass to the registration form
  const events = [
    {
      id: 1,
      title: "Cloud Architecture Workshop",
      date: "April 15, 2025",
    },
    {
      id: 2,
      title: "DevOps in the Cloud",
      date: "May 20, 2025",
    },
    {
      id: 3,
      title: "Serverless Computing Summit",
      date: "June 10, 2025",
    }
  ];

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<RegistrationForm events={events} />} />
            <Route path="/events/:eventId/register" element={<RegistrationForm events={events} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;