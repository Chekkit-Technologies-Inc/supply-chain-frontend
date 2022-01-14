import {
  SIGNUP,
  SIGNIN,
  FETCH_USER,
  UPDATE_USER,
  VERIFY_ACCOUNT,
  RESET_PASSWORD,
  UPDATE_PASSWORD,
  SIGNOUT,
  SEND_INVITE,
  ACCEPT_INVITE,
  GET_COMPANY_USERS,
  GET_USERS_ROLES,
  ASSIGN_USER_ROLE,
  GET_COMPANY_PERMISSIONS,
  ASSIGN_TEMP_PERMISSIONS,
  REMOVE_TEMP_PERMISSIONS,
} from '../type';
import { UserService } from '../../services';
import { notify, loading } from './response';

export const signUp = data => async dispatch => {
  dispatch(loading({ loading: true }));
  try {
    const res = await UserService.signUp(data);

    // dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

    dispatch(notify({ loading: false }));

    dispatch({
      type: SIGNUP,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    dispatch(notify({ title: err.name, message: err.response?.data?.error || err.message, type: 'danger', loading: false }));
    return Promise.reject(err);
  }
};

export const signIn = data => async dispatch => {
  dispatch(loading({ loading: true }));

  try {
    const res = await UserService.signIn(data);

    // dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

    dispatch(notify({ loading: false }));

    dispatch({
      type: SIGNIN,
      payload: { ...res.data.data, isAuthorized: true },
    });
    return Promise.resolve(res.data);
  } catch (err) {
    dispatch(notify({ title: err.name, message: err.response?.data?.error || err.message, type: 'danger', loading: false }));
    return Promise.reject(err);
  }
};

export const fetchUser = () => async dispatch => {
  dispatch(loading({ loading: true }));

  try {
    const res = await UserService.fetchUser();

    // dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

    dispatch(notify({ loading: false }));

    dispatch({
      type: FETCH_USER,
      payload: { ...res.data.data, isAuthorized: true },
    });
    return Promise.resolve(res.data);
  } catch (err) {
    // dispatch(notify({ title: err.name, message: err.response?.data?.error || err.message, type: 'danger', loading: false }));
    dispatch(notify({ loading: false }));
    return Promise.reject(err);
  }
};

export const updateUser = data => async dispatch => {
  dispatch({
    type: UPDATE_USER,
    payload: data,
  });
};

export const verifyAccount = () => async dispatch => {
  dispatch(loading({ loading: true }));
  try {
    const res = await UserService.verifyAccount();

    dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

    dispatch({
      type: VERIFY_ACCOUNT,
      payload: { acc_verified: true },
    });
    return Promise.resolve(res.data);
  } catch (err) {
    dispatch(notify({ title: err.name, message: err.response?.data?.error || err.message, type: 'danger', loading: false }));
    return Promise.reject(err);
  }
};

export const resetPassword = data => async dispatch => {
  dispatch(loading({ loading: true }));
  try {
    const res = await UserService.resetPassword(data);

    dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

    dispatch({
      type: RESET_PASSWORD,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    dispatch(notify({ title: err.name, message: err.response?.data?.error || err.message, type: 'danger', loading: false }));
    return Promise.reject(err);
  }
};

export const updatePassword = data => async dispatch => {
  dispatch(loading({ loading: true }));
  try {
    const res = await UserService.updatePassword(data);

    dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

    dispatch({
      type: UPDATE_PASSWORD,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    dispatch(notify({ title: err.name, message: err.response?.data?.error || err.message, type: 'danger', loading: false }));
    return Promise.reject(err);
  }
};

export const signOut = () => async dispatch => {
  dispatch({
    type: SIGNOUT,
  });
};

export const sendInvite = data => async dispatch => {
  dispatch(loading({ loading: true }));
  try {
    const res = await UserService.sendInvite(data);

    dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

    dispatch({
      type: SEND_INVITE,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    dispatch(notify({ title: err.name, message: err.response?.data?.error || err.message, type: 'danger', loading: false }));
    return Promise.reject(err);
  }
};

export const acceptInvite = data => async dispatch => {
  dispatch(loading({ loading: true }));
  try {
    const res = await UserService.acceptInvite(data);

    dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

    dispatch({
      type: ACCEPT_INVITE,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    dispatch(notify({ title: err.name, message: err.response?.data?.error || err.message, type: 'danger', loading: false }));
    return Promise.reject(err);
  }
};

export const getCompanyUsers = () => async dispatch => {
  dispatch(loading({ loading: true }));
  try {
    const res = await UserService.getCompanyUsers();

    // dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));
    dispatch(notify({ loading: false }));

    dispatch({
      type: GET_COMPANY_USERS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    // dispatch(notify({ title: err.name, message: err.response?.data?.error || err.message, type: 'danger', loading: false }));
    dispatch(notify({ loading: false }));
    return Promise.reject(err);
  }
};

export const getUsersRoles = () => async dispatch => {
  dispatch(loading({ loading: true }));
  try {
    const res = await UserService.getUsersRoles();

    // dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));
    dispatch(notify({ loading: false }));

    dispatch({
      type: GET_USERS_ROLES,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    // dispatch(notify({ title: err.name, message: err.response?.data?.error || err.message, type: 'danger', loading: false }));
    dispatch(notify({ loading: false }));
    return Promise.reject(err);
  }
};

export const assignUserRole = (id, roleId) => async dispatch => {
  dispatch(loading({ loading: true }));
  try {
    const res = await UserService.assignUserRole(id, roleId);

    dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

    dispatch({
      type: ASSIGN_USER_ROLE,
    });

    dispatch(getCompanyUsers());
    return Promise.resolve(res.data);
  } catch (err) {
    dispatch(notify({ title: err.name, message: err.response?.data?.error || err.message, type: 'danger', loading: false }));
    return Promise.reject(err);
  }
};

export const getCompanyPermissions = () => async dispatch => {
  dispatch(loading({ loading: true }));
  try {
    const res = await UserService.getCompanyPermissions();

    // dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));
    dispatch(notify({ loading: false }));

    dispatch({
      type: GET_COMPANY_PERMISSIONS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    // dispatch(notify({ title: err.name, message: err.response?.data?.error || err.message, type: 'danger', loading: false }));
    dispatch(notify({ loading: false }));
    return Promise.reject(err);
  }
};

export const assignTempPermission = (id, data) => async dispatch => {
  dispatch(loading({ loading: true }));
  let reqData = { permissions: data };
  try {
    const res = await UserService.assignTempPermission(id, reqData);

    dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

    dispatch({
      type: ASSIGN_TEMP_PERMISSIONS,
    });

    dispatch(getCompanyUsers());
    return Promise.resolve(res.data);
  } catch (err) {
    dispatch(notify({ title: err.name, message: err.response?.data?.error || err.message, type: 'danger', loading: false }));
    return Promise.reject(err);
  }
};

export const removeTempPermission = (id, data) => async dispatch => {
  dispatch(loading({ loading: true }));
  let reqData = { permissions: data };
  try {
    const res = await UserService.removeTempPermission(id, reqData);

    dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

    dispatch({
      type: REMOVE_TEMP_PERMISSIONS,
    });

    dispatch(getCompanyUsers());
    return Promise.resolve(res.data);
  } catch (err) {
    dispatch(notify({ title: err.name, message: err.response?.data?.error || err.message, type: 'danger', loading: false }));
    return Promise.reject(err);
  }
};

const UserActions = {
  signUp,
  signIn,
  fetchUser,
  updateUser,
  verifyAccount,
  resetPassword,
  updatePassword,
  signOut,
  sendInvite,
  acceptInvite,
  getCompanyUsers,
  getUsersRoles,
  assignUserRole,
  getCompanyPermissions,
  assignTempPermission,
  removeTempPermission,
};

export default UserActions;
