export default class Warehouse {
  constructor(name = '', address = '', state = '', country = '', latitude = '', longitude = '', capacity = '') {
    this.name = name;
    this.address = address;
    this.state = state;
    this.country = country;
    this.latitude = latitude;
    this.longitude = longitude;
    this.capacity = capacity;
  }
}
