import React from 'react';

const Container = ({ className, children }) => {
  return <div className={`${className} p-6`}>{children}</div>;
};

export default Container;
