import { SIGNUP, SIGNIN, UPDATE_USER, VERIFY_ACCOUNT, RESET_PASSWORD, UPDATE_PASSWORD } from '../type';
import { UserService } from '../../services';
import { notify, loading } from './response';

export const signUp = data => async dispatch => {
  dispatch(loading({ loading: true }));
  try {
    const res = await UserService.signUp(data);

    dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

    dispatch({
      type: SIGNUP,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    dispatch(notify({ title: err.name, message: err.response.data.error, type: 'danger', loading: false }));
    return Promise.reject(err);
  }
};

export const signIn = data => async dispatch => {
  dispatch(loading({ loading: true }));

  try {
    const res = await UserService.signIn(data);

    dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

    dispatch({
      type: SIGNIN,
      payload: { ...res.data.data, isAuthorized: true },
    });
    return Promise.resolve(res.data);
  } catch (err) {
    dispatch(notify({ title: err.name, message: err.response.data.error, type: 'danger', loading: false }));
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
    dispatch(notify({ title: err.name, message: err.response.data.error, type: 'danger', loading: false }));
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
    dispatch(notify({ title: err.name, message: err.response.data.error, type: 'danger', loading: false }));
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
    dispatch(notify({ title: err.name, message: err.response.data.error, type: 'danger', loading: false }));
    return Promise.reject(err);
  }
};

const UserActions = {
  signUp,
  signIn,
  updateUser,
  verifyAccount,
  resetPassword,
  updatePassword,
};

export default UserActions;
