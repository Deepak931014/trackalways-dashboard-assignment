import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the elements
ChartJS.register(ArcElement, Tooltip, Legend);

const TaskDetailsChart = () => {
  const data = {
    labels: ['Pending', 'On Hold', 'In Progress', 'Completed', 'Cancelled'],
    datasets: [
      {
        data: [2, 1, 3, 4, 0],
        backgroundColor: ['#00FFFF', '#FFCE56', '#36A2EB', '#22DD22', '#FF0000'],
        hoverBackgroundColor: ['#FF6384', '#FFCE56', '#36A2EB', '#4BC0C0', '#FF9F40'],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Prevents default aspect ratio
  };

  return (
    <div className="p-6 bg-white rounded shadow h-full flex flex-col justify-between">
      <h2 className="font-bold text-lg mb-4 text-center">TASK DETAILS</h2>
      <div className="flex justify-center h-80"> {/* Set height for the container */}
        <Doughnut data={data} options={options} width={200} height={200} />
      </div>
    </div>
  );
};

export default TaskDetailsChart;
