export default class User {
  constructor(name = '', companyRole = '', company = {}, companyUsers = [], roles = [], permissions = [], token = '') {
    this.name = name;
    this.companyRole = companyRole;
    this.company = company;
    this.companyUsers = companyUsers;
    this.roles = roles;
    this.permissions = permissions;
    this.token = token;
  }
}
