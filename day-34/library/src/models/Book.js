export class Book {
  constructor(title, author, genre) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isAvailable = true;
  }
}