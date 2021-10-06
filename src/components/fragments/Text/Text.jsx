import React from 'react';

const Text = ({ className, value, onClick }) => {
  return (
    <div onClick={onClick} className={`${className} transition_all`}>
      <span>{value}</span>
    </div>
  );
};

export default Text;
