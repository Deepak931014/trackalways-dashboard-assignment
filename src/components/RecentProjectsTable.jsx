import React from 'react';

// Sample Data
const recentProjects = [
  { title: 'Web Admin', dateStart: '7 Ashwin 2081', deadline: '9 Ashwin 2081', leader: '👨‍💼', completion: 100, priority: 'Medium' },
  { title: 'Test Project', dateStart: '1 Ashwin 2081', deadline: '14 Ashwin 2081', leader: '👩‍💼', completion: 0, priority: 'Urgent' },
  { title: 'MAAMUL', dateStart: '22 Bhadra 2081', deadline: '14 Ashwin 2081', leader: '👨‍💼', completion: 100, priority: 'Urgent' },
  { title: 'MASHRUUC2', dateStart: '3 Shrawan 2081', deadline: '10 Shrawan 2081', leader: '👩‍💼', completion: 0, priority: 'High' },
  { title: 'MASHRUUC3', dateStart: '1 Shrawan 2081', deadline: '1 Bhadra 2081', leader: '👨‍💼', completion: 0, priority: 'High' },
];

const RecentProjectsTable = () => {
  return (
    <div className="p-6 bg-white rounded shadow w-full">
      <h2 className="font-bold text-lg mb-4">RECENT PROJECTS</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border">
          <thead>
            <tr>
              <th className="px-4 py-2">TITLE</th>
              <th className="px-4 py-2">DATE START</th>
              <th className="px-4 py-2">DEADLINE</th>
              <th className="px-4 py-2">LEADER</th>
              <th className="px-4 py-2">COMPLETION</th>
              <th className="px-4 py-2">PRIORITY</th>
            </tr>
          </thead>
          <tbody>
            {recentProjects.map((project, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 text-red-500">{project.title}</td>
                <td className="px-4 py-2">{project.dateStart}</td>
                <td className="px-4 py-2">{project.deadline}</td>
                <td className="px-4 py-2">{project.leader}</td>
                <td className="px-4 py-2">
                  <div className="relative w-full h-4 bg-gray-200 rounded-full">
                    <div
                      className="absolute top-0 left-0 h-full bg-green-500 text-white text-xs flex items-center justify-center rounded-full"
                      style={{ width: `${project.completion}%` }}
                    >
                      {project.completion}%
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`inline-block w-20 text-center px-3 py-1 rounded text-white ${
                      project.priority === 'Urgent' ? 'bg-red-500' :
                      project.priority === 'High' ? 'bg-red-500' :
                      project.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                  >
                    {project.priority}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentProjectsTable;
