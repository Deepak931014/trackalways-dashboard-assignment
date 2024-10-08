import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaBox,
  FaAlignJustify,
  FaUsers,
  FaHeart,
  FaCube,
  FaGift,
  FaCreditCard,
  FaCalendarAlt,
  FaBookmark,
  FaGlobe,
  FaFileAlt,
  FaLightbulb,
} from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`flex flex-col bg-white text-gray-800 ${
        isOpen ? 'w-64' : 'w-20'
      } h-screen transition-all duration-300 shadow-md`}
    >
      <div className="flex justify-between p-4">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div className="mt-10 flex flex-col items-center">
        {/* Icons */}
        <div className="flex items-center w-full justify-center p-2 hover:bg-gray-200 rounded">
          <FaBox size={24} />
          {isOpen && <span className="ml-4 text-sm md:text-base">Option 1</span>}
        </div>
        <div className="flex items-center w-full justify-center p-2 hover:bg-gray-200 rounded">
          <FaAlignJustify size={24} />
          {isOpen && <span className="ml-4 text-sm md:text-base">Option 2</span>}
        </div>
        <div className="flex items-center w-full justify-center p-2 hover:bg-gray-200 rounded">
          <FaUsers size={24} />
          {isOpen && <span className="ml-4 text-sm md:text-base">Option 3</span>}
        </div>
        <div className="flex items-center w-full justify-center p-2 hover:bg-gray-200 rounded">
          <FaHeart size={24} />
          {isOpen && <span className="ml-4 text-sm md:text-base">Option 4</span>}
        </div>
        <div className="flex items-center w-full justify-center p-2 hover:bg-gray-200 rounded">
          <FaCube size={24} />
          {isOpen && <span className="ml-4 text-sm md:text-base">Option 5</span>}
        </div>
        <div className="flex items-center w-full justify-center p-2 hover:bg-gray-200 rounded">
          <FaGift size={24} />
          {isOpen && <span className="ml-4 text-sm md:text-base">Option 6</span>}
        </div>
        <div className="flex items-center w-full justify-center p-2 hover:bg-gray-200 rounded">
          <FaCreditCard size={24} />
          {isOpen && <span className="ml-4 text-sm md:text-base">Option 7</span>}
        </div>
        <div className="flex items-center w-full justify-center p-2 hover:bg-gray-200 rounded">
          <FaCalendarAlt size={24} />
          {isOpen && <span className="ml-4 text-sm md:text-base">Option 8</span>}
        </div>
        <div className="flex items-center w-full justify-center p-2 hover:bg-gray-200 rounded">
          <FaBookmark size={24} />
          {isOpen && <span className="ml-4 text-sm md:text-base">Option 9</span>}
        </div>
        <div className="flex items-center w-full justify-center p-2 hover:bg-gray-200 rounded">
          <FaGlobe size={24} />
          {isOpen && <span className="ml-4 text-sm md:text-base">Option 10</span>}
        </div>
        <div className="flex items-center w-full justify-center p-2 hover:bg-gray-200 rounded">
          <FaFileAlt size={24} />
          {isOpen && <span className="ml-4 text-sm md:text-base">Option 11</span>}
        </div>
        <div className="flex items-center w-full justify-center p-2 hover:bg-gray-200 rounded">
          <FaLightbulb size={24} />
          {isOpen && <span className="ml-4 text-sm md:text-base">Option 12</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
