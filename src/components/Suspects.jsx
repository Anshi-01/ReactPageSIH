import React from 'react';
import Nav2 from './Nav2';

const SuspectCard = ({ id, status, lastSeen }) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-sm'>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='text-lg font-medium'>Suspect Profile</h3>
        <a href="#" className='text-blue-500 text-sm'>View Details</a>
      </div>

      <div className='bg-gray-100 h-48 rounded-lg flex items-center justify-center mb-6'>
        <i className="ri-user-3-line text-4xl text-gray-400"></i>
      </div>

      <div className='space-y-3'>
        <div className='flex justify-between items-center'>
          <span className='text-gray-500'>ID:</span>
          <span className='font-medium'>{id}</span>
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-gray-500'>Status:</span>
          <span className='px-2 py-1 bg-red-100 text-red-600 rounded-full text-sm'>
            {status}
          </span>
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-gray-500'>Last Seen:</span>
          <span className='text-gray-700'>{lastSeen}</span>
        </div>
      </div>
    </div>
  );
};

const Suspects = () => {
  const suspects = [
    { id: '#12345', status: 'Active', lastSeen: '2 hours ago' },
    { id: '#12345', status: 'Active', lastSeen: '2 hours ago' },
    { id: '#12345', status: 'Active', lastSeen: '2 hours ago' },
    { id: '#12345', status: 'Active', lastSeen: '2 hours ago' },
    { id: '#12345', status: 'Active', lastSeen: '2 hours ago' },
    { id: '#12345', status: 'Active', lastSeen: '2 hours ago' },
  ];

  return (
    <div className="h-full">
      <Nav2 title="Suspects" />

      {/* Suspects Grid */}
      <div className='px-6'>
        <div className='grid grid-cols-3 gap-6'>
          {suspects.map((suspect, index) => (
            <SuspectCard 
              key={index}
              id={suspect.id}
              status={suspect.status}
              lastSeen={suspect.lastSeen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suspects;
