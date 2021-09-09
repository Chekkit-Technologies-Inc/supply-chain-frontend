import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { MdLock, MdEmail } from 'react-icons/md';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

const InputBox = ({ className, type, placeholder }) => {
  const [typex, setTypex] = useState();
  useEffect(() => {
    setTypex(type);
  }, [type]);
  return (
    <div className={`${className} w-full p-5 rounded-t-lg border-b-2 border-brand_blue_light bg-white bg-opacity-10 text-gray-300 flex items-center space-x-4`}>
      {placeholder === 'Full Name' && <FaUser className={`opacity-50`} size={22} />}
      {type === 'email' && <MdEmail className={`opacity-50`} size={22} />}
      {type === 'tel' && <FaPhoneAlt className={`opacity-50`} size={22} />}
      {type === 'password' && <MdLock className={`opacity-50`} size={22} />}
      <input className={`flex-1 bg-transparent focus:outline-none `} spellCheck={false} type={typex} placeholder={placeholder} />
      {typex === 'password' && <AiFillEyeInvisible onClick={() => setTypex('textx')} className={`cursor-pointer opacity-90 select-none`} size={22} />}
      {typex === 'textx' && <AiFillEye onClick={() => setTypex('password')} className={`cursor-pointer opacity-90 select-none`} size={22} />}
    </div>
  );
};

export default InputBox;
