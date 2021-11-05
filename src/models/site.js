export default class Site {
  constructor(manager_name = '', phone_number = '', email = '', address = '', state = '', country = '', latitude = '', longitude = '') {
    this.manager_name = manager_name;
    this.phone_number = phone_number;
    this.email = email;
    this.address = address;
    this.state = state;
    this.country = country;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
