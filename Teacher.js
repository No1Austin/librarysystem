import User from "./User.js";

export default class Teacher extends User {
  constructor(id, name) {
    super(id, name, 5); // teachers can borrow 5
  }
}