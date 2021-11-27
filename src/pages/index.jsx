import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useDispatch, useSelector } from 'react-redux';

import { UserActions } from '../states/actions';

import Logo from '../components/fragments/logo';
import Button from '../components/fragments/button';

const IndexPage = () => {
  const user = useSelector(state => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState();

  useEffect(() => {
    if (user.isAuthorized) {
      localStorage.setItem('chekkit-act', user.token);
      history.push('/overview');
    } else {
      localStorage.removeItem('chekkit-act');
    }
    // eslint-disable-next-line
  }, [user]);

  const handleIdentifier = () => {
    if (!selected) return;
    let user;
    if (selected === 1) {
      user = { companyIdentfier: 'manufacturer' };
    } else if (selected === 2) {
      user = { companyIdentfier: 'distributor' };
    } else if (selected === 3) {
      user = { companyIdentfier: 'retailer' };
    }
    dispatch(UserActions.updateUser(user));
    history.push(`/pick-modules`);
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
        <h1 className={`font-semibold text-4xl text-center text-brand_blue`}>Welcome to Chekkit Supply Chain</h1>
        <FadeIn className={`max-w-7xl w-full flex flex-col lg:flex-row justify-between items-center space-y-12 px-6`}>
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
        </FadeIn>
        {selected && <Button className={`mx-auto mt-6`} text={`Proceed`} onClick={handleIdentifier} />}
      </div>
    </div>
  );
};

export default IndexPage;
