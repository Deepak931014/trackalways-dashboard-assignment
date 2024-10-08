import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import StatCard from './StatCard';
import PunchInSection from './PunchInSection';
import ProjectsChart from './ProjectsChart';
import TopClientsTable from './TopClientsTable';
import TaskDetailsChart from './TaskDetailsChart';
import RecentProjectsTable from './RecentProjectsTable';
import Footer from './Footer';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen relative">
      <div className="hidden md:flex md:flex-col md:w-18">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-4 md:p-6 flex-1 overflow-y-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Welcome to Attendance Dashboard:</h1>
          <div className="flex flex-col md:flex-row mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 flex-1">
              <StatCard title="TOTAL EMPLOYEES" count={90} icon="👥" />
              <StatCard title="TOTAL DEPARTMENTS" count={18} icon="🗂️" />
              <StatCard title="TOTAL HOLIDAYS" count={3} icon="☂️" />
              <StatCard title="PAID LEAVES" count={60} icon="📄" />
              <StatCard title="ON LEAVE TODAY" count={0} icon="🗒️" />
              <StatCard title="PENDING LEAVES REQUEST" count={0} icon="💬" />
              <StatCard title="TOTAL CHECK IN TODAY" count={0} icon="⏩" />
              <StatCard title="TOTAL CHECK OUT TODAY" count={0} icon="⏪" />
            </div>
            <div className="flex-none ml-0 md:ml-6 mt-6 md:mt-0 w-full md:w-auto">
              <PunchInSection />
            </div>
          </div>

          {/* Added margin below the heading */}
          <h2 className="text-2xl font-bold mb-4">Project Management</h2>
          
          <div className="flex flex-col md:flex-row mb-10">
           <div className="flex-1 mb-6 md:mb-0 flex justify-center"> {/* Added flex and justify-center */}
            <ProjectsChart /> {/* Removed margin-bottom here */}
           </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 flex-1"> {/* Added flex-1 to make sure the StatCards use the remaining space */}
            <StatCard title="TOTAL PROJECTS" count={5} icon="📊" />
            <StatCard title="PENDING PROJECTS" count={1} icon="📊" />
            <StatCard title="ON HOLD PROJECTS" count={0} icon="📊" />
            <StatCard title="IN PROGRESS PROJECTS" count={2} icon="📊" />
            <StatCard title="FINISHED PROJECTS" count={2} icon="📊" />
            <StatCard title="CANCELLED PROJECTS" count={0} icon="📊" />
          </div>
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-10">
            <div className="lg:w-7/10 w-full">
              <TopClientsTable />
            </div>
            <div className="lg:w-3/10 w-full">
              <TaskDetailsChart />
            </div>
          </div>
          <div className="flex justify-center mb-10">
            <div className="w-full max-w-8xl">
              <RecentProjectsTable />
            </div>
          </div>
          <div className="flex justify-center mb-10">
            <div className="w-full max-w-8xl">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
