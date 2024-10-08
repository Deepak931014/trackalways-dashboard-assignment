
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ProjectsChart = () => {
  const data = {
    labels: ['Pending', 'On Hold', 'In Progress', 'Completed', 'Cancelled'],
    datasets: [
      {
        label: '', // Removed the label to avoid showing it on the chart
        data: [1, 0, 2, 2, 0], // Sample data
        backgroundColor: [
          'rgba(0, 255, 255)', // Pending (aqua)
          'rgba(54, 162, 235, 0.6)', // On Hold (primary blue)
          'rgba(46,103,248)', // On Hold (primary blue)
          'rgb(60, 179, 113)', // In Progress (green)
          'rgba(255, 99, 132, 0.6)', // Cancelled (red)
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to adapt better to the container size
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl mx-auto"> {/* Responsive container */}
      <h3 className="text-xl font-semibold mb-4">PROJECTS DETAIL</h3>
      <div className="h-64"> {/* Set a specific height for the chart */}
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ProjectsChart;
