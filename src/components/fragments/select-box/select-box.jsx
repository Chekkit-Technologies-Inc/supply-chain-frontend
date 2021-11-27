import React from 'react';

const SelectBox = ({ className, options, placeholder, label, labelColor, name, variant, value, onValueChange, table }) => {
  return (
    <>
      {!variant && (
        <div className={`${className} w-full space-y-2`}>
          {label && (
            <label className={`font-semibold ${labelColor}`} htmlFor={label}>
              {label}
            </label>
          )}
          <div
            className={` w-full p-5 rounded-t-lg border-b-2 border-brand_blue_light bg-white bg-opacity-10 text-gray-300 flex items-center space-x-4 overflow-hidden`}
          >
            <select
              id={label ? label : ''}
              className={`flex-1 h-full bg-transparent focus:bg-transparent focus-within:bg-transparent focus:outline-none cursor-pointer`}
              spellCheck={false}
              placeholder={placeholder}
              onChange={onValueChange}
              defaultValue={placeholder ? placeholder : `Select option`}
            >
              <option disabled>Select option</option>
              {options.map((option, idx) => {
                return (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      )}
      {variant === 2 && (
        <div className={`${className} w-full space-y-2`}>
          {label && (
            <label className={`font-semibold ${labelColor}`} htmlFor={label}>
              {label}
            </label>
          )}
          <div
            style={{ borderColor: '#D7EEFF' }}
            className={`p-4 rounded-t-lg border-b-2 bg-gray-400 bg-opacity-10 text-gray-700 flex items-center space-x-4 overflow-hidden`}
          >
            <select
              id={label ? label : ''}
              className={`flex-1 h-full bg-transparent focus:bg-transparent focus-within:bg-transparent focus:outline-none cursor-pointer`}
              spellCheck={false}
              placeholder={placeholder}
              name={name}
              onChange={onValueChange}
              value={value}
              defaultValue={placeholder ? placeholder : `Select option`}
            >
              <option disabled>Select option</option>
              {options.map((option, idx) => {
                return (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      )}
      {variant === 3 && (
        <div className={`${className} w-full space-y-2`}>
          {label && (
            <label className={`${labelColor}`} htmlFor={label}>
              {label}
            </label>
          )}
          <div className={`p-4 rounded-md border border-gray-400 text-gray-700 flex items-center space-x-4 overflow-hidden`}>
            <select
              id={label ? label : ''}
              className={`flex-1 h-full bg-transparent focus:bg-transparent focus-within:bg-transparent focus:outline-none cursor-pointer pr-2`}
              spellCheck={false}
              placeholder={placeholder}
              name={name}
              onChange={onValueChange}
              value={value}
              defaultValue={placeholder ? placeholder : `Select option`}
            >
              <option disabled>{placeholder ? placeholder : `Select option`}</option>
              {options.map((option, idx) => {
                return (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectBox;
