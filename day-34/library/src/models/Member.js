import { User } from './User.js';

const borrowedMap = new WeakMap();

export class Member extends User {
  constructor(name, email) {
    super(name, email);
    const borrowedFromStorage = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
    borrowedMap.set(this, borrowedFromStorage);
  }

  borrowBook(book) {
    const borrowed = borrowedMap.get(this);
    borrowed.push(book);
    book.isAvailable = false;
    localStorage.setItem('borrowedBooks', JSON.stringify(borrowed));
  }

  returnBook(bookId) {
    const borrowed = borrowedMap.get(this);
    const bookIndex = borrowed.findIndex(b => b.id === bookId);
    if (bookIndex !== -1) {
      borrowed[bookIndex].isAvailable = true;
      borrowed.splice(bookIndex, 1);
      localStorage.setItem('borrowedBooks', JSON.stringify(borrowed));
    }
  }

  getBorrowedBooks() {
    return borrowedMap.get(this);
  }

  getRole() {
    return 'Member';
  }
}