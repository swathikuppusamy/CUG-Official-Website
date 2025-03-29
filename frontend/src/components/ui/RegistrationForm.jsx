import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from './Button';

const RegistrationForm = ({ events = [] }) => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentId: '',
    major: '',
    year: 'Freshman',
    event: events.length > 0 ? events[0].id : ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  // Set the selected event based on URL parameter if available
  useEffect(() => {
    if (eventId && events.some(event => event.id.toString() === eventId)) {
      setFormData(prev => ({
        ...prev,
        event: parseInt(eventId)
      }));
    }
  }, [eventId, events]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.studentId) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all required fields'
      });
      return;
    }
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Registration successful! Check your college email for confirmation details.'
    });
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        studentId: '',
        major: '',
        year: 'Freshman',
        event: events.length > 0 ? events[0].id : ''
      });
    }, 500);
  };

  // Find the selected event
  const selectedEvent = events.find(event => event.id.toString() === formData.event.toString());

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header with college-themed banner */}
          <div className="bg-blue-700 p-6 text-white">
            <h2 className="text-3xl font-bold">Cloud User Group - Event Registration</h2>
            <p className="mt-2 opacity-90">Register to participate in our cloud computing workshops and events</p>
            {selectedEvent && (
              <div className="mt-4 py-2 px-4  bg-opacity-20 inline-block rounded-lg">
                Event: <span className="font-semibold">{selectedEvent.title}</span>
              </div>
            )}
          </div>
          
          <div className="p-8">
            {/* Success message */}
            {formStatus.submitted && !formStatus.error ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="font-bold">{formStatus.message}</p>
                </div>
                <p className="mt-2 text-sm">We've sent the details to your email address. See you at the event!</p>
              </div>
            ) : null}
            
            {/* Error message */}
            {formStatus.error ? (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="font-bold">{formStatus.message}</p>
                </div>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Swathi K"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">College Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.name@kongu.edu"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="studentId" className="block text-gray-700 font-medium mb-2">Student ID*</label>
                  <input
                    type="text"
                    id="studentId"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 22CSR216"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+91 9360459887"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="major" className="block text-gray-700 font-medium mb-2">Major/Department</label>
                  <input
                    type="text"
                    id="major"
                    name="major"
                    value={formData.major}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Computer Science"
                  />
                </div>
                
                <div>
                  <label htmlFor="year" className="block text-gray-700 font-medium mb-2">Year</label>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="I year">I year</option>
                    <option value="II year">II year</option>
                    <option value="III year">III year</option>
                    <option value="IV year">IV year</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Faculty">Faculty</option>
                  </select>
                </div>
              </div>
              
              {events.length > 0 && (
                <div className="mb-8">
                  <label htmlFor="event" className="block text-gray-700 font-medium mb-2">Select Event</label>
                  <select
                    id="event"
                    name="event"
                    value={formData.event}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {events.map(event => (
                      <option key={event.id} value={event.id}>
                        {event.title}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="mb-6">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" required />
                    <span className="ml-2 text-gray-700">I agree to receive email notifications about this and future events</span>
                  </label>
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    text="Register for Event" 
                    primary={true} 
                    onClick={handleSubmit}
                    className="px-8 py-3" 
                  />
                </div>
                <p className="text-center text-gray-500 text-sm mt-4">
                  After registration, you'll receive a confirmation email with event details.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;