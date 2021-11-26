import React, { useState, useEffect } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

const UserList = ({ userList }) => {
  return (
    <>
      <div className={`overflow-auto min-w-full py-6`}>
        <div className={`min-w-max px-6`}>
          <div className={`min-w-max flex flex-shrink-0 items-center justify-start space-x-6 py-6 font-medium border-b border-gray-200`}>
            <div className={`w-96 flex-shrink-0 `}>FullName</div>
            <div className={`w-96 flex-shrink-0`}>Work Email Address</div>
            <div className={`w-80 flex-shrink-0`}>Company Role</div>
            <div className={`flex-1 text-right flex-shrink-0`}>Invite Status</div>
          </div>
        </div>
        <FadeIn className={`min-w-max flex-shrink-0 space-y-6 pt-6`}>
          {userList ? (
            userList.map((item, idx) => {
              return <Item key={idx} user={item} />;
            })
          ) : (
            <div className={`text-center`}>No Users Yet</div>
          )}
        </FadeIn>
      </div>
    </>
  );
};

const Item = ({ user }) => {
  const [item, setItem] = useState();

  useEffect(() => {
    if (user) {
      setItem(user);
    }
  }, [user]);

  return (
    <div className={`min-w-max flex-shrink-0 px-6 rounded-2xl bg-gray-100`}>
      <div className={`w-full flex flex-shrink-0 items-center justify-start space-x-6 py-6 font-medium`}>
        <div className={`text-brand_blue text-lg w-96 flex-shrink-0`}>
          <span className={`cursor-pointer`}>{item?.name}</span>
        </div>
        <div className={`w-96 flex-shrink-0`}>{item?.email}</div>
        <div className={`w-80 flex-shrink-0`}>{item?.role}</div>
        <div className={`flex-1 text-right flex-shrink-0`}>{item?.status}</div>
      </div>
    </div>
  );
};

export default UserList;
