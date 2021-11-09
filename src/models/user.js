export default class User {
  constructor(name = '', email = '', password = '', companyName = '', address = '', country = '', companyRole = '', companyIdentfier = '') {
    this.name = name;
    this.email = email;
    this.password = password;
    this.companyName = companyName;
    this.address = address;
    this.country = country;
    this.companyRole = companyRole;
    this.companyIdentfier = companyIdentfier;
  }
}
