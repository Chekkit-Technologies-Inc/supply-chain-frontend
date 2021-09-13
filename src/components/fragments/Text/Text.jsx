import React from 'react';

const Text = ({ className, value }) => {
  return (
    <div className={`${className} transition_all`}>
      <span>{value}</span>
    </div>
  );
};

export default Text;
