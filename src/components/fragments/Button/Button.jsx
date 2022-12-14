import React from 'react';

const Button = ({ text, type, variant, light, size, className, icon, placement, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ minWidth: '150px' }}
      className={`${className} ${
        variant !== 1
          ? type === 'secondary'
            ? `bg-transparent text-brand_blue border-brand_blue hover:text-white hover:bg-brand_blue`
            : light
            ? `bg-white text-brand_blue hover:bg-brand_blue hover:text-white hover:border-brand_blue`
            : `bg-brand_blue text-white border-brand_blue`
          : type === 'secondary'
          ? `bg-transparent text-brand_green border-brand_green hover:text-white hover:bg-brand_green`
          : `bg-brand_green border-brand_green text-brand_blue`
      } transition_all border-2 border-transparent ${
        size && size === 2 ? `px-2 py-3 text-sm` : `px-6 py-4 text-lg`
      } rounded-lg flex justify-center items-center`}
    >
      {icon && placement === 'left' && icon}
      <span className={`px-2 font-semibold`}>{text}</span>
      {icon && placement === 'right' && icon}
    </button>
  );
};

export default Button;
