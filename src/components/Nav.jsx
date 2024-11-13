import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='min-h-screen w-full flex relative bg-white'>
      <div className='fixed left-0 h-full min-h-screen w-[25%] bg-blue-900 p-10'>
        <h1 className='text-white font-bold text-3xl mb-20'>Security Dashboard</h1>

        <ul className='list-none list-inside text-white text-x mb-3 p-3'>
          <NavLink to={'/'}> <li className='mb-5 flex items-start gap-1'><i className="ri-home-5-line"></i> Dashboard</li> </NavLink>
          <NavLink to={'/surveillance'}><li className='mb-5 flex items-start gap-1'><i className="ri-camera-line"></i>Surveillance</li></NavLink>
          <NavLink to={'/database'}> <li className='mb-5 flex items-start gap-1'><i className="ri-database-2-line"></i>Database</li></NavLink>
          <NavLink to={'/suspects'}> <li className='mb-5 flex items-start gap-1'><i className="ri-group-line"></i>Suspects</li></NavLink>
          <NavLink to={'/mapview'}> <li className='mb-5 flex items-start gap-1'><i className="ri-map-pin-line"></i>Map View</li></NavLink>
          <NavLink to={'/accesscontrol'}> <li className='mb-5 flex items-start gap-1'><i className="ri-shield-line"></i>Access Control</li></NavLink>
          <NavLink to={'/settings'}> <li className='mb-5 flex items-start gap-1'><i className="ri-settings-2-line"></i>Settings</li></NavLink>
        </ul>
      </div>

      <div className='p-5 ml-[25%] min-h-screen w-[75%] bg-white'>
        <Outlet />
      </div>      
    </div>
  )
}

export default App
