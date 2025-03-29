import React, { useState, useEffect } from 'react';
import girl1 from '../../images/girl1.jpg'
import girl2 from '../../images/girl2.jpg'
import girl3 from '../../images/girl3.jpg'
const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Sample testimonial data - replace with your actual testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Sowmika A',
      role: 'Computer Science Graduate',
      image: girl1,
      quote: 'Being part of the Computing User Group has completely transformed my university experience. The workshops helped me develop skills that weren\'t covered in my regular coursework, and the networking opportunities led to my first internship!',
    },
    {
      id: 2,
      name: 'Swathi K',
      role: 'Software Engineering Graduate',
      image: girl2,
      quote: 'I joined CUG in my first year and stayed until graduation. The mentorship and technical projects we worked on gave me an edge in job interviews. I now work as a developer at a top tech company, and I regularly come back to mentor current members.',
    },
    {
      id: 3,
      name: 'Tharani G',
      role: 'Data Science Major',
      image: girl3,
      quote: 'The specialized workshops on data visualization and machine learning organized by CUG were instrumental in helping me choose my specialization. The community is incredibly supportive and collaborative.',
    },
    {
      id: 4,
      name: 'Swetha M',
      role: 'Industry Partner',
      image: girl1,
      quote: 'As an industry partner, we\'ve been impressed by the talent coming from the CUG. Their hackathon events produce innovative solutions, and we\'ve hired several graduates who were active members of this group.',
    },
  ];

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Navigate to specific testimonial
  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  // Navigate to next testimonial
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  // Navigate to previous testimonial
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Members Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our community about their experiences and how being part of CUG has impacted their academic and professional journeys.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg p-6 md:p-8">
            {/* Testimonial Content */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover rounded-full border-4 border-indigo-100"
                />
              </div>
              
              <div className="flex-1">
                <div className="text-indigo-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162C3.219 8.33 2.875 8.772 2.691 9.201c-.18.439-.301.882-.344 1.283.121-.13.293-.228.417-.35.124-.123.384-.21.607-.29C3.8 9.761 4.31 9.7 4.83 9.665c.365-.023.786.139 1.17.075.226-.045.511-.148.5-.508C6.493 10.062 6.496 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 13.875 8.772 13.691 9.201c-.18.439-.301.882-.344 1.283.121-.13.293-.228.417-.35.124-.123.384-.21.607-.29.306-.083.816-.144 1.336-.179.365-.023.786.139 1.17.075.226-.045.511-.148.5-.508C17.493 10.062 17.496 10 17.5 10z" />
                  </svg>
                </div>
                
                <blockquote className="text-gray-700 text-lg mb-6 italic">
                  {testimonials[currentTestimonial].quote}
                </blockquote>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-indigo-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-6">
              <button 
                onClick={prevTestimonial}
                className="bg-white rounded-full p-2 shadow-md text-gray-800 hover:text-indigo-600 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-6">
              <button 
                onClick={nextTestimonial}
                className="bg-white rounded-full p-2 shadow-md text-gray-800 hover:text-indigo-600 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full focus:outline-none ${
                  currentTestimonial === index ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;