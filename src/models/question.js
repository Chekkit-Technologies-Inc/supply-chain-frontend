class Option {
  constructor(value = '', selected = false) {
    this.value = value;
    this.selected = selected;
  }
}

let inititalOptions = [];

for (let i = 1; i <= 2; i++) {
  inititalOptions.push(new Option());
}

export default class Survey {
  constructor(question = '', options = inititalOptions) {
    this.question = question;
    this.options = options;
  }
}
