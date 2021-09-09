import React from 'react';

const InputBox = ({ className, type, placeholder }) => {
  return <input spellCheck={false} className={`${className}`} type={type} placeholder={placeholder} />;
};

export default InputBox;
