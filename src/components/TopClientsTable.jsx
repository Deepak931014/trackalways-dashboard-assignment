import React from 'react';
// Import icons from an icon library or use SVG directly
import { FaUser } from 'react-icons/fa'; // Example using React Icons

const TopClientsTable = () => {
  const clients = [
    { name: 'New Hussein Client', email: 'client@hussein.com', contact: '3213412789', projects: 2 },
    { name: 'ISRAAC 1', email: 'john@john.com', contact: '23456', projects: 1 },
    { name: 'HORUMAR 2', email: 'test@test.com', contact: '98263547892', projects: 1 },
    { name: 'GARSOOR 1', email: 'rich@gmail.com', contact: '9800981969', projects: 1 },
    { name: 'BARWAAQO', email: 'tata@gmail.com', contact: '9800000000', projects: 1 },
    { name: 'GOBALKA MDUUG', email: 'mdg@gmail.com', contact: '078554444', projects: 1 },
  ];

  return (
    <div className="p-6 bg-white rounded shadow h-full flex flex-col justify-between">
      <h2 className="font-bold text-lg mb-4">TOP CLIENTS</h2>
      <div className="overflow-x-auto"> {/* Wrapper for horizontal scrolling */}
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2">NAME</th>
              <th className="px-4 py-2">EMAIL</th>
              <th className="px-4 py-2">CONTACT</th>
              <th className="px-4 py-2">PROJECTS</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 flex items-center">
                  <FaUser className="mr-2" /> {/* Add icon here */}
                  <span className="text-red-500">{client.name}</span> {/* Customize text here */}
                </td>
                <td className="px-4 py-2">{client.email}</td>
                <td className="px-4 py-2">{client.contact}</td>
                <td className="px-4 py-2">{client.projects}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopClientsTable;
