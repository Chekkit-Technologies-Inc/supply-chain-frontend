import React, { useState, useEffect } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

import SelectBox from '../select-box';

const UserList = ({ userList, roles, permissions, changeCompanyRole, assignTempPermissions, removeTempPermissions }) => {
  return (
    <>
      <div className={`overflow-auto min-w-full py-6`}>
        <div className={`min-w-max px-6`}>
          <div className={`min-w-max flex flex-shrink-0 items-center justify-start space-x-6 py-6 font-medium border-b border-gray-200`}>
            <div className={`w-20 flex-shrink-0`}>S/N</div>
            <div className={`w-72 flex-shrink-0 `}>FullName</div>
            <div className={`w-64 flex-shrink-0`}>Work Email Address</div>
            <div className={`w-64 flex-shrink-0`}>Company Role</div>
            <div className={`w-64 flex-shrink-0`}>Role</div>
            <div className={`w-64 flex-shrink-0`}>Temporary Permissions</div>
          </div>
        </div>
        <FadeIn className={`min-w-max flex-shrink-0 space-y-6 pt-6`}>
          {userList ? (
            userList.map((item, idx) => {
              return (
                <Item
                  key={idx}
                  sn={idx + 1}
                  user={item}
                  roles={roles}
                  permissions={permissions}
                  changeCompanyRole={changeCompanyRole}
                  assignTempPermissions={assignTempPermissions}
                  removeTempPermissions={removeTempPermissions}
                />
              );
            })
          ) : (
            <div className={`text-center`}>No Users Yet</div>
          )}
        </FadeIn>
      </div>
    </>
  );
};

const Item = ({ user, sn, roles, permissions, changeCompanyRole, assignTempPermissions, removeTempPermissions }) => {
  const [item, setItem] = useState();
  const [userRoles, setUserRoles] = useState([]);
  const [userPermissions, setUserPermissions] = useState([]);

  useEffect(() => {
    if (roles && roles.length > 0) {
      setUserRoles(
        roles.reduce((p, n) => {
          return [...p, n.name];
        }, []),
      );
    }
  }, [roles]);

  useEffect(() => {
    if (permissions && permissions.length > 0) {
      setUserPermissions(
        permissions.reduce((p, n) => {
          return [...p, n];
        }, []),
      );
    }
  }, [permissions]);

  useEffect(() => {
    if (user && roles) {
      let details = user;
      roles.forEach(role => {
        if (role.id === user.roleId) {
          details = { ...details, role: role.name };
        }
      });
      setItem(details);
    } // eslint-disable-next-line
  }, [user, roles]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'role' && roles) {
      roles.forEach(role => {
        if (role.name === value) {
          changeCompanyRole(user.id, role.id);
        }
      });
    }
    if (name === 'permissions' && permissions) {
      permissions.forEach(permission => {
        if (permission === value) {
          assignTempPermissions(user.id, [permission]);
        }
      });
    }
  };

  return (
    <div className={`min-w-max flex-shrink-0 px-6 rounded-2xl bg-gray-100`}>
      <div className={`w-full flex flex-shrink-0 items-center justify-start space-x-6 py-6 font-medium`}>
        <div className={`w-20 flex-shrink-0`}>{sn}</div>
        <div className={`text-brand_blue text-lg w-72 flex-shrink-0`}>
          <span className={`cursor-pointer`}>{item?.name}</span>
        </div>
        <div className={`w-64 flex-shrink-0`}>{item?.email}</div>
        <div className={`w-64 flex-shrink-0`}>{item?.companyRole}</div>
        <div className={`w-64`}>
          <div className={`w-min`}>
            <SelectBox
              placeholder={`Role`}
              options={[...userRoles]}
              value={item?.role}
              onValueChange={handleInputChange}
              name={`role`}
              variant={3}
              table={true}
              required={true}
            />
          </div>
        </div>
        <div className={`w-64`}>
          <div className={`w-min`}>
            <SelectBox
              placeholder={`Temporary Permissions`}
              options={[...userPermissions]}
              value={item?.temporary_permissions[item?.temporary_permissions?.length - 1]}
              onValueChange={handleInputChange}
              name={`permissions`}
              variant={3}
              required={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
