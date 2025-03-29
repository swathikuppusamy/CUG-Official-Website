import React from 'react';
import cug from '../images/cug.jpg';
const About = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-indigo-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Cloud User Group</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering cloud enthusiasts and professionals through knowledge sharing, networking, and collaborative innovation.
          </p>
        </div>
      </section>
      
      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
              <p className="text-gray-700">
                To foster a vibrant community that promotes learning, collaboration, and innovation in cloud computing technologies, making them accessible to everyone.
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h2>
              <p className="text-gray-700">
                To become the leading community for cloud technology enthusiasts, driving the future of cloud computing through knowledge sharing and collaborative innovation.
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Values</h2>
              <ul className="text-gray-700 space-y-2">
                <li>• Community-driven learning</li>
                <li>• Inclusivity and diversity</li>
                <li>• Innovation and experimentation</li>
                <li>• Open knowledge sharing</li>
                <li>• Collaboration over competition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* History */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our History</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8">
              <img src={cug} alt="CUG History" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                Founded in 2023 by a group of passionate cloud engineers, Cloud User Group started as small meetups at local coffee shops discussing the latest trends in cloud computing.
              </p>
              <p className="text-gray-700 mb-4">
                As interest grew, so did our community. By 2024, we were hosting regular workshops, webinars, and hackathons, bringing together professionals from various industries.
              </p>
              <p className="text-gray-700 mb-4">
                Today, CUG has evolved into a thriving community with thousands of members worldwide, dedicated to advancing cloud technologies and supporting each other's growth in this rapidly evolving field.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Activities */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Workshops</h3>
              <p className="text-gray-700">Hands-on sessions to learn new cloud technologies and practices</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Networking</h3>
              <p className="text-gray-700">Connect with industry professionals and build valuable relationships</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Hackathons</h3>
              <p className="text-gray-700">Collaborative coding events to solve real-world problems using cloud technology</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Webinars</h3>
              <p className="text-gray-700">Online sessions featuring expert speakers on cloud computing topics</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Community Growth</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Expanded to 5,000+ members across 20+ countries</li>
                <li>• Organized 100+ events with an average attendance of 200+</li>
                <li>• Built an active online community with daily discussions</li>
              </ul>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Industry Impact</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Partnered with leading cloud providers for technical workshops</li>
                <li>• Contributed to open-source cloud projects</li>
                <li>• Developed free learning resources used by thousands</li>
              </ul>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Education Initiatives</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Launched a mentorship program for aspiring cloud professionals</li>
                <li>• Awarded 50+ scholarships for cloud certification programs</li>
                <li>• Created a comprehensive cloud learning path for beginners</li>
              </ul>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Launched CloudHack, our annual cloud innovation hackathon</li>
                <li>• Incubated 10+ successful cloud startups through our network</li>
                <li>• Published research papers on emerging cloud technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join CTA */}
      <section className="py-16 bg-indigo-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg mb-8">
            Become part of a thriving community of cloud enthusiasts and professionals. Expand your knowledge, network with peers, and grow your career in cloud computing.
          </p>
          <div className="flex justify-center">
            <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;