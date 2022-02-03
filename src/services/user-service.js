import http from '../http';

export const signUp = async data => {
  return http().post('/auth/signup', data);
};

export const signIn = async data => {
  return http().post('/auth/signin', data);
};

export const fetchUser = async () => {
  return http().get('/users/authenticated');
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

export const sendInvite = async data => {
  return http().post(`/users/invite`, data);
};

export const acceptInvite = async data => {
  return http().post(`/users/accept-invite`, data);
};

export const getCompanyUsers = async () => {
  return http().get(`/users`);
};

export const getUsersRoles = async () => {
  return http().get(`/users/roles`);
};

export const assignUserRole = async (id, roleId) => {
  return http().put(`/users/${id}/roles/${roleId}`);
};

export const getCompanyPermissions = async () => {
  return http().get(`/users/company/permissions`);
};

export const getCompanyUserPermissions = async userId => {
  return http().get(`/users/${userId}/permissions`);
};

export const assignTempPermission = async (id, data) => {
  return http().put(`/users/${id}/assign-permissions`, data);
};

export const removeTempPermission = async (id, data) => {
  return http().put(`/users/${id}/remove-permissions`, data);
};

const UserService = {
  signUp,
  signIn,
  fetchUser,
  verifyAccount,
  resetPassword,
  updatePassword,
  sendInvite,
  acceptInvite,
  getCompanyUsers,
  getUsersRoles,
  assignUserRole,
  getCompanyPermissions,
  getCompanyUserPermissions,
  assignTempPermission,
  removeTempPermission,
};

export default UserService;
