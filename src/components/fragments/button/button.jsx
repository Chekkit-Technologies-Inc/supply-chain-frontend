import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CgSpinner } from 'react-icons/cg';

const Button = ({ text, type, variant, light, cx, size, className, icon, placement, onClick }) => {
  const [clicked, setClicked] = useState(false);
  const response = useSelector(state => state.response);

  useEffect(() => {
    if (!response.loading && clicked) {
      setClicked(false);
    } // eslint-disable-next-line
  }, [response]);

  const handleClick = () => {
    setClicked(true);
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      {!cx && (
        <button
          onClick={handleClick}
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
          } transition_all border-2 border-transparent ${size && size === 2 ? `px-2 py-3 text-sm` : `px-6 py-4 text-lg`} ${
            response.loading ? `opacity-50 pointer-events-none` : ``
          } rounded-lg flex justify-center items-center hover:shadow-lg`}
        >
          {!response.loading && (
            <div>
              {icon && placement === 'left' && icon}
              <span className={`px-2 font-semibold`}>{text}</span>
              {icon && placement === 'right' && icon}
            </div>
          )}
          {response.loading && !clicked && (
            <div>
              {icon && placement === 'left' && icon}
              <span className={`px-2 font-semibold`}>{text}</span>
              {icon && placement === 'right' && icon}
            </div>
          )}
          {response.loading && clicked && <CgSpinner className={`font-semibold animate-spin`} size={20} />}
        </button>
      )}
      {cx === 2 && (
        <button
          onClick={handleClick}
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
          } transition_all border-2 border-transparent ${size && size === 2 ? `px-2 py-3 text-sm` : `px-6 py-4 text-lg`} ${
            response.loading ? `opacity-50 pointer-events-none` : ``
          } rounded-lg flex justify-center items-center hover:shadow-lg`}
        >
          {!response.loading && (
            <div>
              {icon && placement === 'left' && icon}
              <span className={`px-2 font-semibold`}>{text}</span>
              {icon && placement === 'right' && icon}
            </div>
          )}
          {response.loading && !clicked && (
            <div>
              {icon && placement === 'left' && icon}
              <span className={`px-2 font-semibold`}>{text}</span>
              {icon && placement === 'right' && icon}
            </div>
          )}
          {response.loading && clicked && <CgSpinner className={`font-semibold animate-spin`} size={20} />}
        </button>
      )}
    </>
  );
};

export default Button;
