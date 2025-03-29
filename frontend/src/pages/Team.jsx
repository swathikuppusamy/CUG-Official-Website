import React, { useState, useEffect } from 'react';
import TeamMemberCard from '../components/ui/TeamMemberCard';

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Mock data - in a real app, you would fetch this from an API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTeamMembers([
        {
          id: 1,
          name: 'Swathi K',
          role: 'CEO & Founder',
          bio: 'Swathi has over 15 years of industry experience and founded the company in 2018. She leads our strategic vision and growth initiatives.',
          image: '/images/team/sarah.jpg',
          department: 'leadership',
          social: {
            linkedin: 'https://linkedin.com/in/sarah-johnson',
            twitter: 'https://twitter.com/sarahjohnson'
          }
        },
        {
          id: 2,
          name: 'Surya',
          role: 'CTO',
          bio: 'Michael oversees all technical aspects of the company, from product development to infrastructure and security.',
          image: '/images/team/michael.jpg',
          department: 'leadership',
          social: {
            linkedin: 'https://linkedin.com/in/michael-chen',
            github: 'https://github.com/michaelchen'
          }
        },
        {
          id: 3,
          name: 'Kavi',
          role: 'Head of Marketing',
          bio: 'Kavi drives our marketing strategy and brand development, with expertise in digital marketing and customer acquisition.',
          image: '/images/team/jessica.jpg',
          department: 'marketing',
          social: {
            linkedin: 'https://linkedin.com/in/jessica-williams',
            twitter: 'https://twitter.com/jessicaw'
          }
        },
        {
          id: 4,
          name: 'Vishnu',
          role: 'Lead Developer',
          bio: 'Vishnu leads our development team, focusing on creating innovative solutions and maintaining code quality.',
          image: '/images/team/david.jpg',
          department: 'engineering',
          social: {
            linkedin: 'https://linkedin.com/in/david-rodriguez',
            github: 'https://github.com/davidr'
          }
        },
        {
          id: 5,
          name: 'Sowmi',
          role: 'UX Designer',
          bio: 'Sowmi creates user-centered designs and experiences that make our products intuitive and accessible for all users.',
          image: '/images/team/emily.jpg',
          department: 'design',
          social: {
            linkedin: 'https://linkedin.com/in/emily-park',
            dribbble: 'https://dribbble.com/emilypark'
          }
        },
        {
          id: 6,
          name: 'Tamil',
          role: 'Product Manager',
          bio: 'Tamil works closely with all teams to define product strategy and ensure we deliver value to our customers.',
          image: '/images/team/alex.jpg',
          department: 'product',
          social: {
            linkedin: 'https://linkedin.com/in/alex-thompson'
          }
        },
        {
          id: 7,
          name: 'Swetha',
          role: 'Customer Success Manager',
          bio: 'Tamil ensures our customers achieve their goals using our products and have an exceptional experience.',
          image: '/images/team/olivia.jpg',
          department: 'customer-success',
          social: {
            linkedin: 'https://linkedin.com/in/olivia-martinez'
          }
        },
        {
          id: 8,
          name: 'Tharani',
          role: 'Senior Developer',
          bio: 'Tharani specializes in backend development and infrastructure, making sure our systems are robust and scalable.',
          image: '/images/team/james.jpg',
          department: 'engineering',
          social: {
            linkedin: 'https://linkedin.com/in/james-wilson',
            github: 'https://github.com/jameswilson'
          }
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredTeamMembers = activeFilter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === activeFilter);

  return (
    <div className="team-page">
      <section className="hero-section bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Team</h1>
          <p className="text-xl max-w-2xl mx-auto">Meet the passionate professionals behind our success. Our diverse team brings together expertise from across the industry.</p>
        </div>
      </section>
      
      <section className="team-values py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">We embrace creative thinking and continuously seek new solutions to complex challenges.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">We believe in the power of teamwork and open communication to achieve exceptional results.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">We conduct our business with honesty, transparency, and a commitment to ethical practices.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="team-members py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
          
          <div className="flex justify-center mb-10">
            <div className="inline-flex flex-wrap justify-center gap-2 bg-white p-2 rounded-lg shadow-sm">
              <button 
                className={`px-4 py-2 rounded-md ${activeFilter === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${activeFilter === 'leadership' ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                onClick={() => setActiveFilter('leadership')}
              >
                Leadership
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${activeFilter === 'engineering' ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                onClick={() => setActiveFilter('engineering')}
              >
                Engineering
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${activeFilter === 'design' ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                onClick={() => setActiveFilter('design')}
              >
                Design
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${activeFilter === 'marketing' ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                onClick={() => setActiveFilter('marketing')}
              >
                Marketing
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${activeFilter === 'product' ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                onClick={() => setActiveFilter('product')}
              >
                Product
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${activeFilter === 'customer-success' ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                onClick={() => setActiveFilter('customer-success')}
              >
                Customer Success
              </button>
            </div>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredTeamMembers.map(member => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      <section className="join-team py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We're always looking for talented individuals who share our values and passion for excellence. Check out our current openings below.
          </p>
          <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Current Openings</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="text-xl font-semibold">Senior Full Stack Developer</h4>
                <p className="text-gray-600">Full-time • Remote • Engineering</p>
                <button className="mt-2 text-indigo-600 hover:text-indigo-800 font-medium">View Details</button>
              </div>
              <div className="border-b pb-4">
                <h4 className="text-xl font-semibold">UI/UX Designer</h4>
                <p className="text-gray-600">Full-time • San Francisco, CA • Design</p>
                <button className="mt-2 text-indigo-600 hover:text-indigo-800 font-medium">View Details</button>
              </div>
              <div className="border-b pb-4">
                <h4 className="text-xl font-semibold">Product Marketing Manager</h4>
                <p className="text-gray-600">Full-time • New York, NY • Marketing</p>
                <button className="mt-2 text-indigo-600 hover:text-indigo-800 font-medium">View Details</button>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Customer Success Specialist</h4>
                <p className="text-gray-600">Full-time • Remote • Customer Success</p>
                <button className="mt-2 text-indigo-600 hover:text-indigo-800 font-medium">View Details</button>
              </div>
            </div>
            <div className="mt-8">
              <button className="bg-indigo-600 text-white hover:bg-indigo-700 py-3 px-6 rounded-md font-semibold transition duration-300">
                View All Openings
                
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;