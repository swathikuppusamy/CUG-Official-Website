import React, { useState } from 'react';

const FAQ = () => {
  // Sample FAQ data - replace with your actual FAQs
  const faqItems = [
    {
      id: 1,
      question: 'What is the Computing User Group (CUG)?',
      answer: 'The Computing User Group (CUG) is a student-led organization dedicated to enhancing the educational experience of computing students through workshops, events, networking opportunities, and collaborative projects. We welcome students from all computing-related disciplines including Computer Science, Software Engineering, Data Science, and more.'
    },
    {
      id: 2,
      question: 'How can I become a member?',
      answer: 'Membership is open to all students interested in computing. You can register through our online form, attend our next general meeting, or visit our booth during orientation week. Annual membership fees are $20, which helps fund our events and provides you with exclusive benefits.'
    },
    {
      id: 3,
      question: 'What events does CUG organize?',
      answer: 'We organize a variety of events including technical workshops, hackathons, industry guest lectures, social gatherings, coding competitions, and career development sessions. Check our Events page or subscribe to our newsletter to stay updated on upcoming activities.'
    },
    {
      id: 4,
      question: 'Do I need to be a Computer Science major to join?',
      answer: 'Not at all! While many of our members are from computing-related programs, we welcome students from all disciplines who have an interest in technology. Our diverse membership enhances the learning experience and brings different perspectives to our projects.'
    },
    {
      id: 5,
      question: 'Are there leadership opportunities within CUG?',
      answer: 'Absolutely! We hold elections for executive positions at the end of each academic year. Additionally, members can lead special interest groups, organize events, or contribute to our various committees. Leadership roles are a great way to develop professional skills and enhance your resume.'
    },
    {
      id: 6,
      question: 'How can I suggest a workshop topic or event?',
      answer: 'We encourage member input! You can submit suggestions through our online form, speak with any executive member, or bring up your ideas during our monthly general meetings. If you have expertise in a particular area, you might even have the opportunity to lead a workshop yourself.'
    },
    {
      id: 7,
      question: 'Do you offer resources for beginners?',
      answer: 'Yes! We have dedicated resources for members at all skill levels. Our beginner-friendly workshops, mentorship program, and online learning resources make it easy to get started regardless of your current knowledge level.'
    },
    {
      id: 8,
      question: 'How can companies or alumni get involved with CUG?',
      answer: 'We welcome industry partnerships and alumni involvement! Companies can sponsor events, offer workshop speakers, provide mentorship, or participate in our career fair. Alumni can join as mentors, guest speakers, or advisors. Please contact us at partnerships@cug.org for more information.'
    }
  ];

  // State to track which FAQ item is open
  const [openItem, setOpenItem] = useState(null);

  // Toggle FAQ item
  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about the Computing User Group, membership, events, and more.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <div key={item.id} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 focus:outline-none"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItem === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="text-left font-medium text-gray-800">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openItem === item.id ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                id={`faq-answer-${item.id}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openItem === item.id ? 'max-h-96 mt-2' : 'max-h-0'
                }`}
              >
                <div className="p-5 bg-white rounded-lg shadow-sm">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600">
            Don't see your question? Feel free to <a href="/contact" className="text-indigo-600 hover:text-indigo-800 font-medium">contact us</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;