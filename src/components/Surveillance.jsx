import React from 'react';
import Nav2 from './Nav2';

const CameraCard = ({ number, status, lastMotion }) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-sm'>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='text-lg font-medium'>Camera {number}</h3>
        <div className='flex gap-2'>
          <button className='text-gray-500 hover:text-gray-700'>
            <i className="ri-upload-line"></i>
          </button>
          <button className='text-gray-500 hover:text-gray-700'>
            <i className="ri-download-line"></i>
          </button>
        </div>
      </div>

      <div className='bg-gray-100 h-48 rounded-lg flex items-center justify-center mb-4'>
        <i className="ri-camera-line text-4xl text-gray-400"></i>
      </div>

      <div className='text-sm text-gray-500'>
        <span>Status: {status}</span>
        <span className='mx-2'>•</span>
        <span>Last Motion: {lastMotion}</span>
      </div>
    </div>
  );
};

const Surveillance = () => {
  const cameras = [
    { number: 1, status: 'Active', lastMotion: '2m ago' },
    { number: 2, status: 'Active', lastMotion: '2m ago' },
    { number: 3, status: 'Active', lastMotion: '2m ago' },
    { number: 4, status: 'Active', lastMotion: '2m ago' },
    { number: 5, status: 'Active', lastMotion: '2m ago' },
    { number: 6, status: 'Active', lastMotion: '2m ago' },
  ];

  return (
    <div className="h-full">
      <Nav2 title="Surveillance" />

      {/* Camera Grid */}
      <div className='px-6'>
        <div className='grid grid-cols-3 gap-6'>
          {cameras.map((camera) => (
            <CameraCard 
              key={camera.number}
              number={camera.number}
              status={camera.status}
              lastMotion={camera.lastMotion}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Surveillance;
