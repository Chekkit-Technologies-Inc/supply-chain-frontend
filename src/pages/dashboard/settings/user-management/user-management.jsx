import React, { useState } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

import Dialog from '../../../../components/fragments/dialog';
import Button from '../../../../components/fragments/button';
import Heading from '../../../../components/fragments/heading';
import UserList from '../../../../components/fragments/user-list';

const users = [
  { name: 'Michael Jude', email: 'mikejude@gmail.com', role: 'Operations', status: 'accepted' },
  { name: 'Michael Jude', email: 'mikejude@gmail.com', role: 'Operations', status: 'accepted' },
  { name: 'Michael Jude', email: 'mikejude@gmail.com', role: 'Operations', status: 'accepted' },
  { name: 'Michael Jude', email: 'mikejude@gmail.com', role: 'Operations', status: 'accepted' },
];

const UserManagement = () => {
  const [open, setOpen] = useState(false);
  const [userList, setUserList] = useState(users);

  const InviteUser = data => {
    const users = [...userList, { ...data, status: 'invited' }];
    setUserList(users);
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
        <UserList userList={userList} />
      </FadeIn>
      <Dialog open={open} setOpen={setOpen} title={`User Invite`} type={`user-invite`} action={InviteUser} />
    </div>
  );
};

export default UserManagement;
