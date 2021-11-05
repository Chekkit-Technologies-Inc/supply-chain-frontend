export default class User {
  constructor(name = '', email = '', password = '', companyName = '', phoneNumber = '', address = '', country = '') {
    this.name = name;
    this.email = email;
    this.password = password;
    this.companyName = companyName;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.country = country;
  }
}
