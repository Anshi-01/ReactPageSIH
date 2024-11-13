import React from 'react';

const Nav2 = ({ title }) => {
  return (
    <div>
      {/* Top Search Bar */}
      <div className='w-full h-auto flex justify-between items-center px-4'>
        <div className="relative">
          <input 
            className='bg-zinc-200 w-[300px] h-[50px] p-2 pl-10 rounded-md' 
            type="text" 
            placeholder="Search" 
          />
          <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
        </div>
        <div className='flex items-center justify-center gap-6'>
          <i className="ri-notification-2-line text-xl cursor-pointer"></i>
          <i className="ri-user-3-line text-xl cursor-pointer"></i>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className='mt-5 h-10 w-full pl-5 bg-white border-y-2 border-gray-200 flex items-center gap-2'>
        <i className='ri-home-5-line'></i>
        <span className='text-gray-500'>/</span>
        <h5 className='text-[16px]'>{title}</h5> 
      </div>

      {/* Header */}
      <div className='p-2'>
        <div className='flex justify-between items-center mb-8'>
          <h2 className='text-2xl font-semibold'>{title}</h2>
          <div className='flex gap-4'>
            <button className='px-4 py-2 border rounded-md flex items-center gap-2'>
              <i className="ri-filter-3-line"></i>
              Filter
            </button>
            <button className='px-4 py-2 bg-blue-500 text-white rounded-md'>
              Export Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav2;
