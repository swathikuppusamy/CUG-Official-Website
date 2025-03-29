import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import work from '../../images/worshop.jpg';

const Hero = () => {
  const navigate = useNavigate();
  
  const handleRegisterClick = () => {
    navigate('/register');
  };
  
  const handleLearnMoreClick = () => {
    navigate('/about');
  };

  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Cloud User Group</span>
                <span className="block text-blue-500">Kongu engineeering College</span>
                
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Join our community of cloud enthusiasts and professionals. Learn, share, and grow together with the latest cloud technologies and best practices.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button 
                    text="Register Now" 
                    primary={true} 
                    onClick={handleRegisterClick} 
                  />
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button 
                    text="Learn More" 
                    primary={false} 
                    onClick={handleLearnMoreClick} 
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={work}
          alt="Cloud computing illustration"
        />
      </div>
    </div>
  );
};

export default Hero;