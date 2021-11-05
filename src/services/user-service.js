import http from '../http';

export const signUp = async data => {
  return http().post('/auth/signup', data);
};

export const signIn = async data => {
  return http().post('/auth/signin', data);
};

export const verifyAccount = async () => {
  return http().patch('/auth/verify-account');
};

export const resetPassword = async data => {
  return http().post(`/auth/reset-password`, data);
};

export const updatePassword = async data => {
  return http().patch(`/auth/update-password`, data);
};

const UserService = {
  signUp,
  signIn,
  verifyAccount,
  resetPassword,
  updatePassword,
};

export default UserService;
