import React, { useState } from 'react';
import Button from './Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

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
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all fields'
      });
      return;
    }
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
      
      {formStatus.submitted && !formStatus.error ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {formStatus.message}
        </div>
      ) : null}
      
      {formStatus.error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {formStatus.message}
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your name"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your email"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            placeholder="Your message"
          />
        </div>
        
        <div className="flex items-center justify-center">
          <Button 
            text="Send Message" 
            primary={true} 
            onClick={handleSubmit} 
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;