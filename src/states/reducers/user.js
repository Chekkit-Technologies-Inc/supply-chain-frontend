import {
  SIGNUP,
  SIGNIN,
  FETCH_USER,
  UPDATE_USER,
  VERIFY_ACCOUNT,
  RESET_PASSWORD,
  UPDATE_PASSWORD,
  SIGNOUT,
  GET_COMPANY_USERS,
  GET_USERS_ROLES,
  GET_COMPANY_PERMISSIONS,
  GET_COMPANY_USER_PERMISSIONS,
} from '../type';
import { User } from '../../models';

const initialState = new User();

const userReducer = (user = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGNUP:
      return { ...user, ...payload };
    case SIGNIN:
      return payload;
    case FETCH_USER:
      return { ...user, ...payload };
    case VERIFY_ACCOUNT:
      return { ...user, ...payload };
    case UPDATE_USER:
      return { ...user, ...payload };
    case RESET_PASSWORD:
      return user;
    case UPDATE_PASSWORD:
      return user;
    case SIGNOUT:
      return initialState;
    case GET_COMPANY_USERS:
      return { ...user, companyUsers: payload.data };
    case GET_USERS_ROLES:
      return { ...user, roles: payload.data };
    case GET_COMPANY_PERMISSIONS:
      return { ...user, permissions: payload.data };
    case GET_COMPANY_USER_PERMISSIONS:
      let companyUsers = user.companyUsers.map(u => {
        if (payload.userId === u.id) {
          u.userPermissions = payload.permissions;
        }
        return u;
      });
      return { ...user, companyUsers };
    default:
      return user;
  }
};

export default userReducer;
