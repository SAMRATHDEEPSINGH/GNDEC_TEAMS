import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Project Details</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-2">Chat Application using MERN Stack</h2>
          <p className="mb-4">
            We have developed a chat application using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application allows users to communicate with each other in real-time.
          </p>
          <p className='mb-4'>
          As part of our commitment to fostering a respectful and safe chat environment, we have implemented a toxicity detection model. This model analyzes messages in real-time and flags potentially harmful or disrespectful content. By incorporating this feature, we aim to promote teacher respect and ensure that conversations within the platform remain positive and constructive.
          </p>
          <h3 className="text-xl font-semibold mb-2">Copyright Information</h3>
          <p className="mb-4">
            All rights reserved by @Aiwebcorporate limited.
          </p>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="mb-4">
            For inquiries or support, please feel free to contact us:
          </p>
          <ul className="list-disc pl-4 mb-4">
            <li>Email: Aiweblimited@gmail.com</li>
            <li>GitHub: <a href="https://github.com/SAMRATHDEEPSINGH" target="_blank" rel="noopener noreferrer">https://github.com/SAMRATHDEEPSINGH</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;