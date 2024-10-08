import React from 'react';
import { FaBell, FaMoon, FaSearch } from 'react-icons/fa';
import Select from 'react-select';

const options = [
  {
    value: 'en',
    label: (
      <div className="flex items-center">
        <img
          src="https://flagcdn.com/w20/us.png"
          alt="US flag"
          className="mr-2"
        />
        English
      </div>
    ),
  },
  {
    value: 'es',
    label: (
      <div className="flex items-center">
        <img
          src="https://flagcdn.com/w20/es.png"
          alt="Spanish flag"
          className="mr-2"
        />
        Spanish
      </div>
    ),
  },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: 'none', 
    minHeight: 'auto', 
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    display: 'none',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0, 
  }),
  input: (provided) => ({
    ...provided,
    margin: 0, 
  }),
  menu: (provided) => ({
    ...provided,
    border: 'none', 
    boxShadow: 'none', 
  }),
};

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow-lg p-4">
       <div className="relative w-1/2">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search Menu(ctrl+q)"
          className="w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none"
        />
      </div>

      <div className="flex items-center space-x-2"> 
        <div className="relative w-34">
          <Select
            options={options}
            defaultValue={options[0]}
            styles={customStyles}
            classNamePrefix="react-select"
            components={{ IndicatorSeparator: () => null }} 
          />
        </div>

        {/* Dark Mode Toggle */}
        <button className="p-2">
          <FaMoon />
        </button>

        {/* Notification Icon */}
        <button className="p-2">
          <FaBell />
        </button>
      </div>
    </div>
  );
};

export default Header;
