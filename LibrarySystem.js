export default class LibrarySystem {
  static instance;

  constructor() {
    if (LibrarySystem.instance) {
      return LibrarySystem.instance;
    }

    this.users = new Map();
    this.books = new Map();

    LibrarySystem.instance = this;
  }

  static getInstance() {
    if (!LibrarySystem.instance) {
      LibrarySystem.instance = new LibrarySystem();
    }
    return LibrarySystem.instance;
  }

  addUser(user) {
    this.users.set(user.id, user);
    console.log(`User added: ${user.name}`);
  }

  addBook(book) {
    this.books.set(book.id, book);
    console.log(`Book added: ${book.title}`);
  }

  borrowBook(userId, bookId) {
    const user = this.users.get(userId);
    const book = this.books.get(bookId);

    if (!user) {
      console.log("❌ User not found");
      return;
    }

    if (!book) {
      console.log("❌ Book not found");
      return;
    }

    if (!book.isAvailable) {
      console.log("❌ Book already borrowed");
      return;
    }

    if (!user.canBorrowMore()) {
      console.log("❌ Borrow limit reached");
      return;
    }

    user.borrowBook(book);
    book.borrow();
    console.log(`✅ ${user.name} borrowed "${book.title}"`);
  }

  returnBook(userId, bookId) {
    const user = this.users.get(userId);
    const book = this.books.get(bookId);

    if (!user || !book) {
      console.log("❌ User or Book not found");
      return;
    }

    user.returnBook(book);
    book.returnBook();
    console.log(`✅ ${user.name} returned "${book.title}"`);
  }

  viewBorrowedBooks(userId) {
    const user = this.users.get(userId);

    if (!user) {
      console.log("❌ User not found");
      return;
    }

    console.log(`📚 Borrowed books by ${user.name}:`);
    if (user.borrowedBooks.length === 0) {
      console.log("  (none)");
    } else {
      user.borrowedBooks.forEach(book =>
        console.log(`- ${book.title}`)
      );
    }
  }
}