export default class User {
  constructor(id, name, borrowLimit) {
    this.id = id;
    this.name = name;
    this.borrowLimit = borrowLimit;
    this.borrowedBooks = [];
  }

  canBorrowMore() {
    return this.borrowedBooks.length < this.borrowLimit;
  }

  borrowBook(book) {
    if (!this.canBorrowMore()) return false;
    this.borrowedBooks.push(book);
    return true;
  }

  returnBook(book) {
    this.borrowedBooks = this.borrowedBooks.filter(b => b.id !== book.id);
  }
}