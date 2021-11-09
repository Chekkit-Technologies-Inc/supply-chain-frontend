import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { MdLock, MdEmail } from 'react-icons/md';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { ImOffice } from 'react-icons/im';
import { FiSearch } from 'react-icons/fi';
import Autocomplete from 'react-google-autocomplete';

const InputBox = ({
  className,
  type,
  placeholder,
  label,
  labelColor,
  variant,
  name,
  value,
  defaultValue,
  onValueChange,
  onPlaceSelected,
  onFocusChange,
  required,
  readOnly,
  placeType,
}) => {
  const [typex, setTypex] = useState();
  useEffect(() => {
    setTypex(type);
  }, [type]);
  return (
    <>
      {!variant && (
        <div className={`${className} space-y-2 w-full`}>
          {label && (
            <label className={`font-semibold ${labelColor}`} htmlFor={label}>
              {label}
            </label>
          )}
          <div
            className={` p-5 rounded-t-lg border-b-2 border-brand_blue_light bg-white bg-opacity-10 text-gray-300 flex items-center space-x-4 overflow-hidden`}
          >
            {placeholder === 'Company Name' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Company Address' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Company Country' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Company Type' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Attendee Name' && <FaUser className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Attendee Role' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {type === 'email' && <MdEmail className={`opacity-50 flex-shrink-0 text-lg`} />}
            {type === 'tel' && <FaPhoneAlt className={`opacity-50 flex-shrink-0 text-lg`} />}
            {type === 'password' && <MdLock className={`opacity-50 flex-shrink-0 text-lg`} />}
            <input
              id={label ? label : placeholder}
              className={` bg-transparent focus:outline-none  w-full`}
              spellCheck={false}
              type={typex}
              name={name}
              defaultValue={defaultValue ? defaultValue : ''}
              onChange={onValueChange}
              placeholder={placeholder}
              required={required}
              readOnly={readOnly || false}
              onKeyDown={
                type === 'number' ? evt => (evt.key === 'e' || evt.key === 'E' || evt.key === '+' || evt.key === '-') && evt.preventDefault() : () => {}
              }
            />
            {typex === 'password' && (
              <AiFillEyeInvisible onClick={() => setTypex('textx')} className={`cursor-pointer opacity-90 select-none flex-shrink-0 text-lg`} />
            )}
            {typex === 'textx' && <AiFillEye onClick={() => setTypex('password')} className={`cursor-pointer opacity-90 select-none flex-shrink-0 text-lg`} />}
          </div>
        </div>
      )}
      {variant === 'controlled' && (
        <div className={`${className} space-y-2 w-full`}>
          {label && (
            <label className={`font-semibold ${labelColor}`} htmlFor={label}>
              {label}
            </label>
          )}
          <div
            className={` p-5 rounded-t-lg border-b-2 border-brand_blue_light bg-white bg-opacity-10 text-gray-300 flex items-center space-x-4 overflow-hidden`}
          >
            {placeholder === 'Company Name' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Company Address' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Company Country' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Company Type' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Attendee Name' && <FaUser className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Attendee Role' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {type === 'email' && <MdEmail className={`opacity-50 flex-shrink-0 text-lg`} />}
            {type === 'tel' && <FaPhoneAlt className={`opacity-50 flex-shrink-0 text-lg`} />}
            {type === 'password' && <MdLock className={`opacity-50 flex-shrink-0 text-lg`} />}
            <input
              id={label ? label : placeholder}
              className={` bg-transparent focus:outline-none  w-full`}
              spellCheck={false}
              type={typex}
              name={name}
              value={value ? value : ''}
              onChange={onValueChange}
              placeholder={placeholder}
              required={required}
              readOnly={readOnly || false}
              onKeyDown={
                type === 'number' ? evt => (evt.key === 'e' || evt.key === 'E' || evt.key === '+' || evt.key === '-') && evt.preventDefault() : () => {}
              }
            />
            {typex === 'password' && (
              <AiFillEyeInvisible onClick={() => setTypex('textx')} className={`cursor-pointer opacity-90 select-none flex-shrink-0 text-lg`} />
            )}
            {typex === 'textx' && <AiFillEye onClick={() => setTypex('password')} className={`cursor-pointer opacity-90 select-none flex-shrink-0 text-lg`} />}
          </div>
        </div>
      )}
      {variant === 1 && (
        <div className={`${className} w-full p-6 rounded-md shadow bg-white text-gray-600 flex items-center space-x-4 overflow-hidden`}>
          <input className={`bg-transparent focus:outline-none w-full h-full`} spellCheck={false} placeholder={placeholder} required={required} />
        </div>
      )}
      {variant === 2 && (
        <div className={`${className} space-y-2 w-full`}>
          {label && (
            <label className={`font-semibold ${labelColor}`} htmlFor={label}>
              {label}
            </label>
          )}
          <div
            style={{ borderColor: '#D7EEFF' }}
            className={`p-4 rounded-t-lg border-b-2 bg-gray-400 bg-opacity-10 text-gray-700 flex items-center space-x-4 overflow-hidden`}
          >
            {placeholder === 'Company Name' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Company Address' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Company Country' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Company Type' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Attendee Name' && <FaUser className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Attendee Role' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {type === 'email' && <MdEmail className={`opacity-50 flex-shrink-0 text-lg`} />}
            {type === 'tel' && <FaPhoneAlt className={`opacity-50 flex-shrink-0 text-lg`} />}
            {type === 'password' && <MdLock className={`opacity-50 flex-shrink-0 text-lg`} />}
            <input
              id={label ? label : placeholder}
              className={` bg-transparent focus:outline-none  w-full`}
              spellCheck={false}
              type={typex}
              placeholder={placeholder}
              name={name}
              onChange={onValueChange}
              value={value ? value : ''}
              required={required}
              readOnly={readOnly || false}
              onKeyDown={
                type === 'number' ? evt => (evt.key === 'e' || evt.key === 'E' || evt.key === '+' || evt.key === '-') && evt.preventDefault() : () => {}
              }
            />
            {typex === 'password' && (
              <AiFillEyeInvisible onClick={() => setTypex('textx')} className={`cursor-pointer opacity-90 select-none flex-shrink-0 text-lg`} />
            )}
            {typex === 'textx' && <AiFillEye onClick={() => setTypex('password')} className={`cursor-pointer opacity-90 select-none flex-shrink-0 text-lg`} />}
          </div>
        </div>
      )}
      {variant === 3 && (
        <div className={`${className} space-y-2 w-full`}>
          {label && (
            <label className={`${labelColor}`} htmlFor={label}>
              {label}
            </label>
          )}
          <div className={`p-4 rounded-md border bg-white border-gray-300 text-gray-700 flex items-center space-x-4 overflow-hidden`}>
            {placeholder === 'Company Name' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Company Address' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Company Country' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Company Type' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Attendee Name' && <FaUser className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Attendee Role' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {type === 'email' && <MdEmail className={`opacity-50 flex-shrink-0 text-lg`} />}
            {type === 'tel' && <FaPhoneAlt className={`opacity-50 flex-shrink-0 text-lg`} />}
            {type === 'password' && <MdLock className={`opacity-50 flex-shrink-0 text-lg`} />}
            <input
              id={label ? label : placeholder}
              className={` bg-transparent focus:outline-none  w-full`}
              spellCheck={false}
              type={typex}
              placeholder={placeholder}
              name={name}
              onChange={onValueChange}
              value={value ? value : ''}
              required={required}
              readOnly={readOnly || false}
              onKeyDown={
                type === 'number' ? evt => (evt.key === 'e' || evt.key === 'E' || evt.key === '+' || evt.key === '-') && evt.preventDefault() : () => {}
              }
            />
            {typex === 'password' && (
              <AiFillEyeInvisible onClick={() => setTypex('textx')} className={`cursor-pointer opacity-90 select-none flex-shrink-0 text-lg`} />
            )}
            {typex === 'textx' && <AiFillEye onClick={() => setTypex('password')} className={`cursor-pointer opacity-90 select-none flex-shrink-0 text-lg`} />}
          </div>
        </div>
      )}
      {variant === 4 && (
        <div className={`${className} space-y-2 w-full`}>
          {label && (
            <label className={`${labelColor}`} htmlFor={label}>
              {label}
            </label>
          )}
          <div className={`p-4 rounded-md bg-gray-100 text-gray-700 flex items-center space-x-4 overflow-hidden`}>
            {placeholder === 'Company Name' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Company Address' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Company Country' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Company Type' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Attendee Name' && <FaUser className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Attendee Role' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {type === 'email' && <MdEmail className={`opacity-50 flex-shrink-0 text-lg`} />}
            {type === 'tel' && <FaPhoneAlt className={`opacity-50 flex-shrink-0 text-lg`} />}
            {type === 'password' && <MdLock className={`opacity-50 flex-shrink-0 text-lg`} />}
            <input
              id={label ? label : placeholder}
              className={` bg-transparent focus:outline-none  w-full`}
              spellCheck={false}
              type={typex}
              placeholder={placeholder}
              name={name}
              onChange={onValueChange}
              value={value ? value : ''}
              required={required}
              readOnly={readOnly || false}
              onKeyDown={
                type === 'number' ? evt => (evt.key === 'e' || evt.key === 'E' || evt.key === '+' || evt.key === '-') && evt.preventDefault() : () => {}
              }
            />
            {typex === 'password' && (
              <AiFillEyeInvisible onClick={() => setTypex('textx')} className={`cursor-pointer opacity-90 select-none flex-shrink-0 text-lg`} />
            )}
            {typex === 'textx' && <AiFillEye onClick={() => setTypex('password')} className={`cursor-pointer opacity-90 select-none flex-shrink-0 text-lg`} />}
            {typex === 'search' && (
              <FiSearch className={`opacity-50 select-none flex-shrink-0 text-lg`} />
            )}
          </div>
        </div>
      )}
      {variant === 5 && (
        <div className={`${className} space-y-2 w-full`}>
          {label && (
            <label className={`${labelColor}`} htmlFor={label}>
              {label}
            </label>
          )}
          <div className={`p-4 rounded-md border bg-white border-gray-300 text-gray-700 flex items-center space-x-4 overflow-hidden`}>
            {placeholder === 'Company Name' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Company Address' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Company Country' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Company Type' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Attendee Role' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Attendee Name' && <FaUser className={`opacity-50 flex-shrink-0 text-lg`} />}
            {type === 'email' && <MdEmail className={`opacity-50 flex-shrink-0 text-lg`} />}
            {type === 'tel' && <FaPhoneAlt className={`opacity-50 flex-shrink-0 text-lg`} />}
            {type === 'password' && <MdLock className={`opacity-50 flex-shrink-0 text-lg`} />}
            <input
              id={label ? label : placeholder}
              className={` bg-transparent focus:outline-none  w-full`}
              spellCheck={false}
              type={typex}
              placeholder={placeholder}
              name={name}
              onChange={onValueChange}
              required={required}
              readOnly={readOnly || false}
              onKeyDown={
                type === 'number' ? evt => (evt.key === 'e' || evt.key === 'E' || evt.key === '+' || evt.key === '-') && evt.preventDefault() : () => {}
              }
            />
            {typex === 'password' && (
              <AiFillEyeInvisible onClick={() => setTypex('textx')} className={`cursor-pointer opacity-90 select-none flex-shrink-0 text-lg`} />
            )}
            {typex === 'textx' && <AiFillEye onClick={() => setTypex('password')} className={`cursor-pointer opacity-90 select-none flex-shrink-0 text-lg`} />}
          </div>
        </div>
      )}
      {variant === 'places' && (
        <div className={`${className} space-y-2 w-full`}>
          {label && (
            <label className={`font-semibold ${labelColor}`} htmlFor={label}>
              {label}
            </label>
          )}
          <div
            className={` p-5 rounded-t-lg border-b-2 border-brand_blue_light bg-white bg-opacity-10 text-gray-300 flex items-center space-x-4 overflow-hidden`}
          >
            {placeholder === 'Company Name' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Company Address' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Company Country' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Company Type' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Attendee Name' && <FaUser className={`opacity-50 flex-shrink-0 text-lg`} />}
            {placeholder === 'Attendee Role' && <ImOffice className={`opacity-50 flex-shrink-0 text-lg`} />}
            {type === 'email' && <MdEmail className={`opacity-50 flex-shrink-0 text-lg`} />}
            {type === 'tel' && <FaPhoneAlt className={`opacity-50 flex-shrink-0 text-lg`} />}
            {type === 'password' && <MdLock className={`opacity-50 flex-shrink-0 text-lg`} />}
            <Autocomplete
              id={label ? label : placeholder}
              className={` bg-transparent focus:outline-none  w-full`}
              spellCheck={false}
              type={typex}
              name={name}
              value={value ? value : ''}
              onChange={onValueChange}
              onPlaceSelected={onPlaceSelected}
              onBlur={onFocusChange}
              placeholder={placeholder}
              required={required}
              apiKey={process.env.REACT_APP_MAP_API_KEY}
              options={{
                types: [placeType],
              }}
            />
            {typex === 'password' && (
              <AiFillEyeInvisible onClick={() => setTypex('textx')} className={`cursor-pointer opacity-90 select-none flex-shrink-0 text-lg`} />
            )}
            {typex === 'textx' && <AiFillEye onClick={() => setTypex('password')} className={`cursor-pointer opacity-90 select-none flex-shrink-0 text-lg`} />}
          </div>
        </div>
      )}
    </>
  );
};

export default InputBox;
