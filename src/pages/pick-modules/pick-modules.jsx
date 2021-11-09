import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import Button from '../../components/fragments/button';
import Logo from '../../components/fragments/logo';

const PickModules = () => {
  const history = useHistory();
  const [modules, setModules] = useState([
    { name: 'Consumer Intelligence', selected: false },
    { name: 'Connect++', selected: false },
    { name: 'Engage', selected: false },
    { name: 'Asset Management', selected: false },
    { name: 'Retail & POS', selected: false },
    { name: 'Reports', selected: false },
  ]);

  const handleSelected = idx => {
    setModules(
      modules.map((mod, i) => {
        if (idx === i) {
          mod.selected = !mod.selected;
        }
        return mod;
      }),
    );
  };

  return (
    <div className='min-h-screen'>
      <div className={`flex items-center justify-between px-4 md:px-12 py-6`}>
        <Logo size={180} />
        <div className={`flex items-center space-x-6`}>
          <div
            onClick={() => history.push('/auth/signin')}
            className={`border border-brand_blue text-brand_blue px-4 py-2 rounded-lg cursor-pointer hover:bg-brand_blue hover:text-white hover:shadow-lg`}
          >
            Sign In
          </div>
        </div>
      </div>
      <div className={`h-full flex flex-col justify-center items-center space-y-28 py-24 px-4 md:px-12`}>
        <h1 className={`font-semibold text-4xl text-center text-brand_blue`}>Pick Modules</h1>
        <FadeIn className={`max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 px-6`}>
          {modules.map((mod, idx) => {
            return (
              <div key={idx} onClick={() => handleSelected(idx)} className={`relative h-64 w-64`}>
                <div
                  className={`${
                    !mod.selected && `hidden`
                  } absolute top-0 -left-4 w-52 h-52 bg-purple-300 rounded-full z-0 mix-blend-multiply filter blur-xl animate-blob opacity-75`}
                ></div>
                <div
                  className={`${
                    !mod.selected && `hidden`
                  } absolute top-0 -right-4 w-52 h-52 bg-yellow-300 rounded-full z-10 mix-blend-multiply filter blur-xl animate-blob opacity-75`}
                ></div>
                <div
                  className={`${
                    !mod.selected && `hidden`
                  } absolute right-6 -bottom-4 w-52 h-52 bg-pink-300 rounded-full z-0 mix-blend-multiply filter blur-xl animate-blob opacity-75`}
                ></div>
                <div
                  className={`absolute w-64 h-64 rounded-2xl bg-white shadow flex items-center justify-center border cursor-pointer font-semibold hover:shadow-lg z-20`}
                >
                  {mod.name}
                </div>
              </div>
            );
          })}
        </FadeIn>
        <Button className={`mx-auto mt-6`} text={`Proceed`} onClick={() => history.push(`/auth/signup`)} />
      </div>
    </div>
  );
};

export default PickModules;
