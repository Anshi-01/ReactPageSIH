import React from 'react'
import Nav2 from './Nav2'

const Accesscontrol = () => {
  return (
    <div className="h-full ">
      <Nav2 title="Access Control" />

      <div>


        {/* Roles Section */}
        <div className='bg-white rounded-lg p-6 shadow-sm'>
          <div className='flex justify-between items-center mb-6'>
            <h3 className='text-xl font-medium'>User Roles & Permissions</h3>
            <button className='px-4 py-2 bg-blue-500 text-white rounded-md'>
              Add Role
            </button>
          </div>

          {/* Role List */}
          <div className='space-y-4'>
            {/* Administrator Role */}
            <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
              <div className='flex items-center gap-4'>
                <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
                  <i className="ri-shield-user-line text-blue-500"></i>
                </div>
                <div>
                  <h4 className='font-medium'>Administrator</h4>
                  <p className='text-sm text-gray-500'>3 users</p>
                </div>
              </div>
              <button className='text-blue-500'>Edit</button>
            </div>

            {/* Operator Role */}
            <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
              <div className='flex items-center gap-4'>
                <div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center'>
                  <i className="ri-shield-user-line text-green-500"></i>
                </div>
                <div>
                  <h4 className='font-medium'>Operator</h4>
                  <p className='text-sm text-gray-500'>8 users</p>
                </div>
              </div>
              <button className='text-blue-500'>Edit</button>
            </div>

            {/* Viewer Role */}
            <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
              <div className='flex items-center gap-4'>
                <div className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center'>
                  <i className="ri-shield-user-line text-gray-500"></i>
                </div>
                <div>
                  <h4 className='font-medium'>Viewer</h4>
                  <p className='text-sm text-gray-500'>12 users</p>
                </div>
              </div>
              <button className='text-blue-500'>Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accesscontrol
