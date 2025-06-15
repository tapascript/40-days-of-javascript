export class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getRole() {
    return 'User';
  }
}
