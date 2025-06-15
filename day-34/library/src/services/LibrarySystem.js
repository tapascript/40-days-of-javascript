export class LibrarySystem {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  getAvailableBooks() {
    return this.books.filter(book => book.isAvailable);
  }

  getBookById(id) {
    return this.books.find(b => b.id === id);
  }
}