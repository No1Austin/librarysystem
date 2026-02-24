console.log("✅ main.js started");

import LibrarySystem from "./LibrarySystem.js";
import UserFactory from "./UserFactory.js";
import Book from "./Book.js";

const library = LibrarySystem.getInstance();
console.log("✅ got LibrarySystem instance");

const student = UserFactory.createUser("student", "S1", "Alice");
const teacher = UserFactory.createUser("teacher", "T1", "Mr. Brown");
console.log("✅ users created:", student.name, teacher.name);

library.addUser(student);
library.addUser(teacher);
console.log("✅ users added");

const book1 = new Book("B1", "JavaScript Basics", "John Doe");
const book2 = new Book("B2", "Object Oriented Design", "Jane Smith");
console.log("✅ books created:", book1.title, book2.title);

library.addBook(book1);
library.addBook(book2);
console.log("✅ books added");

library.borrowBook("S1", "B1");
console.log("✅ borrowBook() called");

library.viewBorrowedBooks("S1");
console.log("✅ viewBorrowedBooks() called");

library.returnBook("S1", "B1");
console.log("✅ returnBook() called");

library.viewBorrowedBooks("S1");
console.log("✅ main.js finished");