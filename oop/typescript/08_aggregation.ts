/* A special form of association.
 * One object has-a reference to another but can exist independently.
 * */
class Department {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class University {
  name: string;
  departments: Department[]; // Aggregation

  constructor(name: string, departments: Department[]) {
    this.name = name;
    this.departments = departments;
  }
}

const csDept = new Department("Computer Science");
const uni = new University("MIT", [csDept]);
