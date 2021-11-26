import {
  SIGNUP,
  SIGNIN,
  UPDATE_USER,
  VERIFY_ACCOUNT,
  RESET_PASSWORD,
  UPDATE_PASSWORD,
  SEND_INVITE,
  ACCEPT_INVITE,
  GET_COMPANY_USERS,
  GET_USERS_ROLES,
  ASSIGN_USER_ROLE,
  GET_COMPANY_PERMISSIONS,
  ASSIGN_TEMP_PERMISSIONS,
  REMOVE_TEMP_PERMISSIONS,
} from '../type';
import { User } from '../../models';

const initialState = new User();

const userReducer = (user = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGNUP:
      return { ...user, ...payload };
    case SIGNIN:
      return { ...user, ...payload };
    case VERIFY_ACCOUNT:
      return { ...user, ...payload };
    case UPDATE_USER:
      return { ...user, ...payload };
    case RESET_PASSWORD:
      return user;
    case UPDATE_PASSWORD:
      return user;
    default:
      return user;
  }
};

export default userReducer;
