export default class Response {
  constructor(title = '', message = '', type = '', loading = false) {
    this.title = title;
    this.message = message;
    this.type = type;
    this.loading = loading;
  }
}
