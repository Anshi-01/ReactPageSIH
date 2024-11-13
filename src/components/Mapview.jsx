import React from 'react';
import Nav2 from './Nav2';

const Mapview = () => {
  return (
    <div className="h-full">
      <Nav2 title="Map View" />

      {/* Map Images Container */}
      <div className='px-6 grid grid-cols-2 gap-6'>
        <div className='h-[400px] bg-white rounded-lg overflow-hidden shadow-sm'>
          <img 
            src="/fc9ab95a072026c82819962c54bf871d.jpg" 
            alt="London City Center Map"
            className='w-full h-full object-cover'
          />
        </div>

        <div className='h-[400px] bg-white rounded-lg overflow-hidden shadow-sm'>
          <img 
            src="/tube.jpg" 
            alt="Shoreditch Area Map"
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Mapview;
