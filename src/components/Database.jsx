import React from 'react';
import Nav2 from './Nav2';

const DatabaseRow = ({ id, name, status, lastUpdated }) => {
  return (
    <tr className="border-b border-gray-100">
      <td className="py-3 px-4 text-gray-500">{id}</td>
      <td className="py-3 px-4 text-gray-500">{name}</td>
      <td className="py-3 px-4">
        <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-sm">
          {status}
        </span>
      </td>
      <td className="py-3 px-4 text-gray-500">{lastUpdated}</td>
      <td className="py-3 px-4">
        <div className="flex gap-4">
          <button className="text-blue-500 hover:underline">Edit</button>
          <button className="text-red-500 hover:underline">Delete</button>
        </div>
      </td>
    </tr>
  );
};

const Database = () => {
  const databaseRecords = [
    { id: '#00001', name: 'Sample Name', status: 'Active', lastUpdated: '2 hours ago' },
    { id: '#00002', name: 'Sample Name', status: 'Active', lastUpdated: '2 hours ago' },
    { id: '#00003', name: 'Sample Name', status: 'Active', lastUpdated: '2 hours ago' },
    { id: '#00004', name: 'Sample Name', status: 'Active', lastUpdated: '2 hours ago' },
    { id: '#00005', name: 'Sample Name', status: 'Active', lastUpdated: '2 hours ago' },
  ];

  return (
    <div className="h-full">
      <Nav2 title="Database" />

      {/* Database Records */}
      <div className="px-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-medium">Database Records</h3>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm">
                Add New
              </button>
              <button className="px-4 py-2 border rounded-md text-sm">
                Export
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-200">
                  <th className="py-3 px-4 text-gray-600 font-medium">ID</th>
                  <th className="py-3 px-4 text-gray-600 font-medium">NAME</th>
                  <th className="py-3 px-4 text-gray-600 font-medium">STATUS</th>
                  <th className="py-3 px-4 text-gray-600 font-medium">LAST UPDATED</th>
                  <th className="py-3 px-4 text-gray-600 font-medium">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {databaseRecords.map((record) => (
                  <DatabaseRow key={record.id} {...record} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Database;
