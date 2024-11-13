import React from 'react'
import Nav2 from './Nav2'

const StatCard = ({ title, value, subtitle, icon, color }) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-sm'>
      <div className='flex justify-between items-start'>
        <div>
          <h3 className='text-gray-600 mb-2'>{title}</h3>
          <div className={`text-3xl font-semibold ${color}`}>{value}</div>
          <div className='text-gray-500 mt-1'>{subtitle}</div>
        </div>
        <div className={`${color} opacity-80`}>
          {icon}
        </div>
      </div>
    </div>
  )
}

const LiveFeedItem = ({ camera, time }) => {
  return (
    <div className="flex items-center gap-3 py-3">
      <i className="ri-pulse-line text-blue-500"></i>
      <div>
        <div className="font-medium">{camera}</div>
        <div className="text-sm text-gray-500">{time}</div>
      </div>
    </div>
  );
};

const AlertItem = ({ title, time, severity }) => {
  const severityColors = {
    High: 'bg-red-100 text-red-600',
    Medium: 'bg-yellow-100 text-yellow-600',
    Low: 'bg-green-100 text-green-600'
  };

  return (
    <div className="flex items-center gap-3 py-2">
      <i className="ri-alert-line text-red-500"></i>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-gray-500">{time}</div>
      </div>
      <span className={`ml-auto px-2 py-1 rounded-full text-sm ${severityColors[severity]}`}>
        {severity}
      </span>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="h-full">
      <Nav2 title="Dashboard" />

      {/* Stats Grid */}
      <div className='px-6 grid grid-cols-4 gap-4'>
        <StatCard 
          title="Live Recognition"
          value="98.2%"
          subtitle="Accuracy Rate"
          icon={<i className="ri-camera-line text-2xl"></i>}
          color="text-green-500"
        />
        
        <StatCard 
          title="Active Alerts"
          value="24"
          subtitle="Last 24 hours"
          icon={<i className="ri-alert-line text-2xl"></i>}
          color="text-red-500"
        />

        <StatCard 
          title="Database Entries"
          value="1,234"
          subtitle="Total Records"
          icon={<i className="ri-database-2-line text-2xl"></i>}
          color="text-blue-500"
        />

        <StatCard 
          title="System Health"
          value="95%"
          subtitle="All Systems Operational"
          icon={<i className="ri-heart-pulse-line text-2xl"></i>}
          color="text-green-500"
        />
      </div>

      {/* Live Feeds and System Status */}
      <div className="grid grid-cols-3 gap-4 px-6 mt-4">
        {/* Live Feeds Section */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-medium">Live Feeds</h3>
            <a href="#" className="text-blue-500">View All</a>
          </div>
          <div className="space-y-2">
            <LiveFeedItem camera="Activity Detected - Camera 1" time="2 minutes ago" />
            <LiveFeedItem camera="Activity Detected - Camera 2" time="2 minutes ago" />
            <LiveFeedItem camera="Activity Detected - Camera 3" time="2 minutes ago" />
          </div>
        </div>

        {/* System Status and Alerts */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-4">System Status</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Server Status</span>
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                  Operational
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Database</span>
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                  Operational
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>API</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">
                  Degraded
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium">Alerts</h3>
              <a href="#" className="text-blue-500">View All</a>
            </div>
            <div className="space-y-3">
              <AlertItem 
                title="Security Alert" 
                time="5m ago" 
                severity="High" 
              />
              <AlertItem 
                title="System Update" 
                time="1h ago" 
                severity="Medium" 
              />
              <AlertItem 
                title="Maintenance" 
                time="2h ago" 
                severity="Low" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
