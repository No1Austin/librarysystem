import User from "./User.js";

export default class Student extends User {
  constructor(id, name) {
    super(id, name, 3); // students can borrow 3
  }
}