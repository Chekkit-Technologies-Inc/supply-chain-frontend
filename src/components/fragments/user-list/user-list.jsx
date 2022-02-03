import React, { useState, useEffect } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useDispatch, useSelector } from 'react-redux';

import SelectBox from '../select-box';
import Button from '../button';

import { UserActions } from '../../../states/actions';

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
            userList
              .sort((a, b) => b.isAdmin - a.isAdmin)
              .map((item, idx) => {
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
  const dispatch = useDispatch();
  const [item, setItem] = useState();
  const [userRoles, setUserRoles] = useState([]);
  const [userPermissions, setUserPermissions] = useState([]);
  const [managePermissions, setManagePermissions] = useState(false);
  const response = useSelector(state => state.response);

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
      dispatch(UserActions.getCompanyUserPermissions(user?.id));
      let details = { ...user };
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
    <div>
      <div className={`min-w-max flex-shrink-0 px-6 rounded-2xl bg-white`}>
        <div className={`w-full flex flex-shrink-0 items-center justify-start space-x-6 py-6 font-medium`}>
          <div className={`w-20 flex-shrink-0`}>{sn}</div>
          <div className={`text-brand_blue text-lg w-72 flex-shrink-0`}>
            <span className={`cursor-pointer`}>{item?.name}</span>
          </div>
          <div className={`w-64 flex-shrink-0`}>{item?.email}</div>
          <div className={`w-64 flex-shrink-0`}>{item?.companyRole}</div>
          {!item?.isAdmin && (
            <>
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
              <div className={`w-auto`}>
                <Button variant={1} text={'Manage Permissions'} onClick={() => setManagePermissions(!managePermissions)} />
              </div>
            </>
          )}
        </div>
      </div>
      {managePermissions && (
        <div className='bg-white p-6 border border-gray-200 rounded-lg flex justify-between'>
          <div className={`flex-1`}>
            <div className='font-medium text-brand_blue mb-4'>Assign permissions</div>
            <SelectBox
              className={`w-min`}
              placeholder={`Temporary Permissions`}
              options={[...userPermissions]}
              onValueChange={handleInputChange}
              name={`permissions`}
              variant={3}
              required={true}
            />
          </div>
          <div className='flex-1'>
            <div className='font-medium text-brand_blue mb-4'>Current permissions</div>
            {user?.userPermissions && user?.userPermissions.length > 0 ? (
              <ul className='grid grid-cols-3 gap-8'>
                {user?.userPermissions?.map((d, i) => {
                  return (
                    <li className='text-gray-700 flex justify-between space-x-4 w-full hover:bg-gray-50 p-4 rounded-lg' key={i}>
                      <div>{d}</div>
                      <div
                        onClick={() => removeTempPermissions(user.id, [d])}
                        className='w-5 h-5 text-sm bg-gray-200 rounded-full flex items-center justify-center text-gray-500 cursor-pointer hover:shadow'
                      >
                        x
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : response.loading ? (
              <div className='text-sm text-gray-500'>fetching permissions...</div>
            ) : (
              <div className='text-sm text-gray-500'>No permissions yet</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
