export default class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }

  borrow() {
    this.isAvailable = false;
  }

  returnBook() {
    this.isAvailable = true;
  }
}