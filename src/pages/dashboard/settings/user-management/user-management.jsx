import React, { useState } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { UserActions } from '../../../../states/actions';

import Dialog from '../../../../components/fragments/dialog';
import Button from '../../../../components/fragments/button';
import Heading from '../../../../components/fragments/heading';
import UserList from '../../../../components/fragments/user-list';

const UserManagement = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const history = useHistory();

  const InviteUser = data => {
    dispatch(UserActions.sendInvite(data));
  };

  const AddAgent = data => {
    let d = {...data}
    d.companyRole = 'Agent'
    d.companyName = user?.company?.name
    d.address = user?.company?.address
    d.country = user?.company?.country
    dispatch(UserActions.addAgent(d));
  };

  const changeCompanyRole = (userId, roleId) => {
    dispatch(UserActions.assignUserRole(userId, roleId));
  };

  const assignTempPermissions = (userId, data) => {
    dispatch(UserActions.assignTempPermission(userId, data));
  };

  const removeTempPermissions = (userId, data) => {
    dispatch(UserActions.removeTempPermission(userId, data));
  };

  return (
    <div>
      <FadeIn className='bg p-4 md:px-12 py-16 min-h-screen w-full'>
        <div className='text-sm text-brand_blue mb-6 -mt-6'>
          <span onClick={() => history.push('/home')} className='text-brand_blue_light cursor-pointer'>
            Main menu{' '}
          </span>
          <span className='text-brand_blue_light'>| </span>
          <span onClick={() => history.push('/settings')} className='text-brand_blue_light cursor-pointer'>
            Settings
          </span>
          <span className='text-brand_blue_light'> | </span>
          <span onClick={() => history.push('/settings/user-management')} className='text-blue-500 cursor-pointer'>
            User Management
          </span>
        </div>
        <div className='text-2xl text-brand_blue mb-12'>User Management</div>

        <FadeIn className='space-y-20'>
          <div>
            <div
              className={`flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between w-full xl:w-auto items-start sm:items-center sm:space-x-6 flex-shrink-0`}
            >
              <Heading className={`font-semibold text-brand_blue`} title={`Company Users`} size={3} />
              <Button className={`h-14`} onClick={() => setOpen(true)} text={`Invite User`} cx={2} />
            </div>
            <UserList
              userList={user.companyUsers.filter(d => d.roleId !== 'ef539566-efed-43b1-acdc-70da5b743d16')}
              roles={user.roles}
              permissions={user?.permissions?.permissions ? user?.permissions?.permissions : user?.permissions}
              changeCompanyRole={changeCompanyRole}
              assignTempPermissions={assignTempPermissions}
              removeTempPermissions={removeTempPermissions}
            />
          </div>

          <div>
            <div
              className={`flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between w-full xl:w-auto items-start sm:items-center sm:space-x-6 flex-shrink-0`}
            >
              <Heading className={`font-semibold text-brand_blue`} title={`Agents`} size={3} />
              <Button className={`h-14`} onClick={() => setOpen2(true)} text={`Add Agent`} cx={2} />
            </div>
            <UserList
              userList={user.companyUsers.filter(d => d.roleId === 'ef539566-efed-43b1-acdc-70da5b743d16')}
              roles={user.roles}
              permissions={user?.permissions?.permissions ? user?.permissions?.permissions : user?.permissions}
              changeCompanyRole={changeCompanyRole}
              assignTempPermissions={assignTempPermissions}
              removeTempPermissions={removeTempPermissions}
            />
          </div>
        </FadeIn>
      </FadeIn>
      <Dialog open={open} setOpen={setOpen} title={`User Invite`} type={`user-invite`} action={InviteUser} />
      <Dialog open={open2} setOpen={setOpen2} title={`Add Agent`} type={`agent-invite`} action={AddAgent} />
    </div>
  );
};

export default UserManagement;
