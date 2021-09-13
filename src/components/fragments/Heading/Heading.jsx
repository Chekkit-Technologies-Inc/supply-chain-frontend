import React from 'react';

const Heading = ({ title, size, className }) => {
  return (
    <div className={`${className} transition_all`}>
      <span className={`${size === 3 ? `text-sm sm:text-base` : size === 2 ? `text-lg sm:text-xl` : `text-2xl sm:text-3xl`}`}>{title}</span>
    </div>
  );
};

export default Heading;
