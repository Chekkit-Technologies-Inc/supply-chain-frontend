import React, { useState, useEffect } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useDispatch, useSelector } from 'react-redux';

import { UserActions } from '../../../../states/actions';

import Dialog from '../../../../components/fragments/dialog';
import Button from '../../../../components/fragments/button';
import Heading from '../../../../components/fragments/heading';
import UserList from '../../../../components/fragments/user-list';

const UserManagement = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (user?.token) {
      dispatch(UserActions.getUsersRoles()).catch(console.log);
      dispatch(UserActions.getCompanyUsers()).catch(console.log);
      dispatch(UserActions.getCompanyPermissions()).catch(console.log);
    } // eslint-disable-next-line
  }, [user?.token]);

  const InviteUser = data => {
    dispatch(UserActions.sendInvite(data)).catch(console.log);
  };

  const changeCompanyRole = (userId, roleId) => {
    dispatch(UserActions.assignUserRole(userId, roleId)).catch(console.log);
  };

  return (
    <div>
      <FadeIn
        className={`flex flex-col
      px-4 md:px-12 py-8 min-h-screen w-full `}
      >
        <div className={`font-bold text-2xl text-brand_blue mb-6`}>User Management</div>

        <div
          className={`flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between w-full xl:w-auto items-start sm:items-center sm:space-x-6 flex-shrink-0`}
        >
          <Heading className={`font-semibold text-brand_blue`} title={`Company Users`} size={3} />
          <Button className={`h-12`} onClick={() => setOpen(true)} text={`Invite User`} cx={2} />
        </div>
        <UserList userList={user.companyUsers} roles={user.roles} permissions={user.permissions} changeCompanyRole={changeCompanyRole} />
      </FadeIn>
      <Dialog open={open} setOpen={setOpen} title={`User Invite`} type={`user-invite`} action={InviteUser} />
    </div>
  );
};

export default UserManagement;
