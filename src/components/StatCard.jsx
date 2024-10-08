import React from 'react';

const StatCard = ({ title, count, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* Title at the top */}
      <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>

      {/* Flex container for value and icon */}
      <div className="flex items-center justify-between">
        {/* Value on the left side */}
        <p className="text-2xl font-bold">{count}</p>

        {/* Icon on the right side inside a circle with light pink background */}
        <div className="bg-pink-100 rounded-full p-4">
          <div className="text-pink-500 text-3xl">{icon}</div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
