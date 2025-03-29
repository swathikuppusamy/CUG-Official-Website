import React, { useState } from 'react';
import micImage from '../../images/mic.jpg';
import HackImage from '../../images/Hack.jpg';
import down1 from '../../images/download1.jpg';
import down2 from '../../images/download2.jpg';
import down from '../../images/download.jpg';
import work from '../../images/worshop.jpg'
const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);
  
  // Sample gallery images - replace with your actual images
  const galleryImages = [
    {
      id: 1,
      src: down,
      alt: 'CUG Annual Conference 2024',
      description: 'Participants at our annual conference sharing ideas and networking'
    },
    {
      id: 2,
      src: work,
      alt: 'Technical Workshop',
      description: 'Hands-on learning at our technical skills workshop'
    },
    {
      id: 3,
      src: HackImage,
      alt: 'CUG Hackathon',
      description: 'Students collaborating during our 24-hour hackathon event'
    },
    {
      id: 4,
      src: down1,
      alt: 'Social Gathering',
      description: 'Members enjoying our end-of-semester social gathering'
    },
    {
      id: 5,
      src: down2,
      alt: 'Industry Visit',
      description: 'CUG members touring a leading tech company'
    },
    {
      id: 6,
      src: micImage,
      alt: 'Excellence Awards',
      description: 'Recognizing outstanding contributions from our members'
    },
  ];

  // Open image modal
  const openModal = (image) => {
    setActiveImage(image);
    document.body.style.overflow = 'hidden';
  };

  // Close image modal
  const closeModal = () => {
    setActiveImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at the moments we've captured during our events, workshops, and gatherings.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <div className="relative h-64">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-30 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox Modal */}
        {activeImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button 
                className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 hover:text-gray-600 focus:outline-none"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="bg-white rounded-lg overflow-hidden">
                <img 
                  src={activeImage.src} 
                  alt={activeImage.alt} 
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">{activeImage.alt}</h3>
                  <p className="text-gray-600 mt-2">{activeImage.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;