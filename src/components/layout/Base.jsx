import React from 'react';

const Base = ({ className, children }) => {
  return <div className={`${className} min-h-screen`}>{children}</div>;
};

export default Base;
