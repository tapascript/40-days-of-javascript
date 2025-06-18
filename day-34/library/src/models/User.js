export class User {
  constructor(name, email) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.email = email;
  }

  getRole() {
    return 'User';
  }
}
