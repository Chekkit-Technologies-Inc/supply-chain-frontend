import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as Video } from '../../assets/video.svg';
import { ReactComponent as User } from '../../assets/thumbs-user.svg';
import { ReactComponent as Checked } from '../../assets/item-checked.svg';
import { ReactComponent as UnChecked } from '../../assets/item-unchecked.svg';
import { ReactComponent as ItemAssets } from '../../assets/item-assets.svg';
import { ReactComponent as ItemInventory } from '../../assets/item-inventory.svg';
import { ReactComponent as ItemConnect } from '../../assets/item-connect.svg';
import { ReactComponent as ItemRetail } from '../../assets/item-retail.svg';
import Button from '../../components/fragments/button';
import Logo from '../../components/fragments/logo';

import { ProductActions } from '../../states/actions';

const PickModules = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [modules, setModules] = useState([]);
  const { apiModules, selectedModules } = useSelector(state => state.products);
  const [allSelected, setAllSelected] = useState(false);

  useEffect(() => {
    console.log('apiModules', apiModules);
    if (apiModules && apiModules.length > 0) {
      let dx = apiModules.map(d => {
        if (d.name.replaceAll('-', ' ').toLowerCase() === 'asset management') {
          d.icon = ItemAssets;
          d.desc = 'Track and manage all asset in one place';
          d.video = '#';
          d.selected = false;
        } else if (d.name.replaceAll('-', ' ').toLowerCase() === 'inventory management') {
          d.icon = ItemInventory;
          d.desc = 'Manage all assets in your warehouse';
          d.video = '#';
          d.selected = false;
        } else if (d.name.replaceAll('-', ' ').toLowerCase() === 'connect plus') {
          d.icon = ItemConnect;
          d.desc = 'Connect with manufacturers, distributors and retailers in a hub';
          d.video = '#';
          d.selected = false;
        } else {
          d.icon = ItemRetail;
          d.desc = 'Transaction and payment gateways at retail point';
          d.video = '#';
          d.selected = false;
        }
        return d;
      });
      setModules(dx);
    }
  }, [apiModules]);

  const handleSelected = id => {
    if (allSelected) {
      dispatch(ProductActions.setModules([]));
      setAllSelected(false);
    }
    setModules(
      modules.map(mod => {
        if (id === mod.id) {
          mod.selected = !mod.selected;
          if (mod.selected) {
            dispatch(ProductActions.setModules([...selectedModules, mod.id]));
          } else {
            dispatch(ProductActions.setModules(selectedModules.filter(d => d !== mod.id)));
          }
        }
        return mod;
      }),
    );
  };

  useEffect(() => {
    setAllSelected(modules.every(mod => mod.selected));
  }, [modules]);

  const selectAll = () => {
    if (allSelected) {
      dispatch(ProductActions.setModules([]));
      setModules(
        modules.map(mod => {
          mod.selected = false;
          return mod;
        }),
      );
    } else {
      dispatch(ProductActions.setModules(modules.map(d => d.id)));
      setModules(
        modules.map(mod => {
          mod.selected = true;
          return mod;
        }),
      );
    }
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className={`flex items-center justify-center lg:justify-start px-4 md:px-12 py-6`}>
        <Logo size={180} />
      </div>
      <div className={`h-full flex flex-col justify-center items-center space-y-12 py-24 px-4 md:px-12`}>
        <div className='space-y-2 flex flex-col items-center justify-center'>
          <div className='w-20 h-20'>
            <User className='w-full h-full' />
          </div>
          <div className='text-brand_blue_light text-lg font-medium'>
            <span>Hello, </span>
            <span className='text-brand_blue'>There</span>
          </div>
          <div className='text-brand_blue_light text-sm'>Kindly select the modules you are interested in</div>
        </div>
        <FadeIn className={`w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12`}>
          {modules.map(mod => {
            return (
              <div
                key={mod.id}
                onClick={() => handleSelected(mod.id)}
                className={`h-64 w-full max-w-lg mx-auto rounded-3xl bg-white flex flex-col relative justify-center border-2 border-brand_blue cursor-pointer p-6 bg`}
              >
                <div className='absolute top-6 right-6'>
                  {mod.selected ? (
                    <div className='w-10 h-10'>
                      <Checked className='w-full h-full' />
                    </div>
                  ) : (
                    <div className='w-10 h-10'>
                      <UnChecked className='w-full h-full' />
                    </div>
                  )}
                </div>
                <div className='space-y-3'>
                  <div className='w-10 h-10'>
                    <mod.icon className='w-full h-full' />
                  </div>
                  <div className='text-brand_blue font-medium capitalize'>{mod.name.replaceAll('-', ' ')}</div>
                  <div className='text-brand_blue_light text-sm'>{mod.desc}</div>
                  <div className='text-brand_blue font-medium text-sm flex items-center space-x-4'>
                    <a className='underline' href={mod.video}>
                      Know more about product
                    </a>
                    <div className='w-4 h-4'>
                      <Video className='w-full h-full' />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </FadeIn>
        <div className={`flex flex-col space-y-4 w-full sm:w-auto sm:space-x-4 sm:flex-row sm:space-y-0`}>
          <Button text={`${!allSelected ? `Select All` : `Unselect All`}`} type={`secondary`} onClick={selectAll} />
          <Button text={`Continue`} onClick={() => history.push('/auth/signup')} />
        </div>
      </div>
    </div>
  );
};

export default PickModules;
