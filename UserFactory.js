import Student from "./Student.js";
import Teacher from "./Teacher.js";

export default class UserFactory {
  static createUser(type, id, name) {
    if (type === "student") return new Student(id, name);
    if (type === "teacher") return new Teacher(id, name);
    throw new Error("Invalid user type");
  }
}