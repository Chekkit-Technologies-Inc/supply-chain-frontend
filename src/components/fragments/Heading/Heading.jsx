import React from 'react';

const Heading = ({ title, size, className }) => {
  return (
    <div className={` ${className}  transition_all`}>
      <span className={`${size === 3 ? `text-lg` : size === 2 ? `text-xl` : `text-2xl`}`}>{title}</span>
    </div>
  );
};

export default Heading;
