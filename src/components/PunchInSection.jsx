import React from 'react';

const PunchInSection = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center mx-auto w-64"> {/* Centering the component */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e0/AnalogClockAnimation2_2hands_1h_in_6sec.gif"
        alt="Clock"
        className="w-34 h-34 mb-4"
      />
      <h3 className="text-blue-600 text-xl font-semibold">Monday 6/7/2021</h3>
      <p className="text-2xl font-bold bg-green-500 text-white rounded-full px-6 py-2 mt-2 text-center">Punch In</p>
      <div className="flex space-x-2 mt-4 w-full">
        <button className="text-black px-4 py-2 rounded hover:bg-green-700 transition duration-200 flex-1">Check In At</button>
        <button className="text-black px-4 py-2 rounded hover:bg-red-700 transition duration-200 flex-1">Check Out At</button>
      </div>
    </div>
  );
};

export default PunchInSection;
