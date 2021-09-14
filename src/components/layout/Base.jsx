import React from 'react';

const Base = ({ className, children }) => {
  return <div className={`${className} h-full`}>{children}</div>;
};

export default Base;
