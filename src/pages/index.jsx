import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

import Logo from '../components/fragments/logo';
import Button from '../components/fragments/button';

const IndexPage = () => {
  // const history = useHistory();
  const [selected, setSelected] = useState();
  return (
    <div className='min-h-screen'>
      <div className={`flex items-center justify-between px-12 py-6`}>
        <Logo size={180} />
        <div className={`flex items-center space-x-6`}>
          <div className={`border border-brand_blue text-brand_blue px-4 py-2 rounded-lg cursor-pointer hover:bg-brand_blue hover:text-white hover:shadow-lg`}>
            Sign In
          </div>
          <div className={`border border-brand_blue text-brand_blue px-4 py-2 rounded-lg cursor-pointer hover:bg-brand_blue hover:text-white hover:shadow-lg`}>
            Sign Up
          </div>
        </div>
      </div>
      <div className={`h-full flex flex-col justify-center items-center space-y-28 py-24`}>
        <h1 className={`font-semibold text-4xl text-center text-brand_blue`}>Welcome to Chekkit Supply Chain</h1>
        <div className={`max-w-7xl w-full flex flex-col lg:flex-row justify-between items-center space-y-6 px-6`}>
          <div onClick={() => setSelected(1)} className={`relative h-64 w-64`}>
            <div
              className={`${
                selected !== 1 && `hidden`
              } absolute top-0 -left-4 w-52 h-52 bg-purple-300 rounded-full z-0 mix-blend-multiply filter blur-xl animate-blob opacity-75`}
            ></div>
            <div
              className={`${
                selected !== 1 && `hidden`
              } absolute top-0 -right-4 w-52 h-52 bg-yellow-300 rounded-full z-10 mix-blend-multiply filter blur-xl animate-blob opacity-75`}
            ></div>
            <div
              className={`${
                selected !== 1 && `hidden`
              } absolute right-6 -bottom-4 w-52 h-52 bg-pink-300 rounded-full z-0 mix-blend-multiply filter blur-xl animate-blob opacity-75`}
            ></div>
            <div
              className={`absolute w-64 h-64 rounded-full bg-white shadow flex items-center justify-center border border-gray-100 cursor-pointer font-semibold hover:shadow-lg z-20`}
            >
              Manufacturers
            </div>
          </div>
          <div onClick={() => setSelected(2)} className={`relative h-64 w-64`}>
            <div
              className={`${
                selected !== 2 && `hidden`
              } absolute top-0 -left-4 w-52 h-52 bg-purple-300 rounded-full z-0 mix-blend-multiply filter blur-xl animate-blob opacity-75`}
            ></div>
            <div
              className={`${
                selected !== 2 && `hidden`
              } absolute top-0 -right-4 w-52 h-52 bg-yellow-300 rounded-full z-10 mix-blend-multiply filter blur-xl animate-blob opacity-75`}
            ></div>
            <div
              className={`${
                selected !== 2 && `hidden`
              } absolute right-6 -bottom-4 w-52 h-52 bg-pink-300 rounded-full z-0 mix-blend-multiply filter blur-xl animate-blob opacity-75`}
            ></div>
            <div
              className={`absolute w-64 h-64 rounded-full bg-white shadow flex items-center justify-center border border-gray-100 cursor-pointer font-semibold hover:shadow-lg z-20`}
            >
              Distributors
            </div>
          </div>
          <div onClick={() => setSelected(3)} className={`relative h-64 w-64`}>
            <div
              className={`${
                selected !== 3 && `hidden`
              } absolute top-0 -left-4 w-52 h-52 bg-purple-300 rounded-full z-0 mix-blend-multiply filter blur-xl animate-blob opacity-75`}
            ></div>
            <div
              className={`${
                selected !== 3 && `hidden`
              } absolute top-0 -right-4 w-52 h-52 bg-yellow-300 rounded-full z-10 mix-blend-multiply filter blur-xl animate-blob opacity-75`}
            ></div>
            <div
              className={`${
                selected !== 3 && `hidden`
              } absolute right-6 -bottom-4 w-52 h-52 bg-pink-300 rounded-full z-0 mix-blend-multiply filter blur-xl animate-blob opacity-75`}
            ></div>
            <div
              className={`absolute w-64 h-64 rounded-full bg-white shadow flex items-center justify-center border border-gray-100 cursor-pointer font-semibold hover:shadow-lg z-20`}
            >
              Retailers
            </div>
          </div>
        </div>
        {selected && <Button className={`mx-auto mt-6`} text={`Proceed`} />}
      </div>
    </div>
  );
};

export default IndexPage;
