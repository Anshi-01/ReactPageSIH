import React from 'react';
import Nav2 from './Nav2';

const SettingItem = ({ icon, title }) => {
  return (
    <div className='flex justify-between items-center py-4 px-6 hover:bg-gray-50'>
      <div className='flex items-center gap-4'>
        <i className={`${icon} text-xl text-gray-600`}></i>
        <span className='text-gray-800 font-medium'>{title}</span>
      </div>
      <a href="#" className='text-blue-500 hover:underline'>Configure</a>
    </div>
  );
};

const Settings = () => {
  const settingsItems = [
    { icon: 'ri-notification-2-line', title: 'Notifications' },
    { icon: 'ri-shield-line', title: 'Security' },
    { icon: 'ri-database-2-line', title: 'Backup' },
    { icon: 'ri-refresh-line', title: 'Updates' },
  ];

  return (
    <div className="h-full">
      <Nav2 title="Settings" />

      {/* Settings Content */}
      <div className='px-6'>
        <div className='bg-white rounded-lg shadow-sm'>
          <div className='p-6 border-b'>
            <h2 className='text-xl font-semibold'>System Settings</h2>
          </div>
          
          <div className='divide-y'>
            {settingsItems.map((item, index) => (
              <SettingItem 
                key={index}
                icon={item.icon}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
