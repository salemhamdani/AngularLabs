export class Person {
  lName: string = "";
  fName: string = '';
  age: number = 0;
  path: string = '';
  cin: number = 0;
  job: string = "";
  id: number = 0;

  constructor(data: Partial<Person> = {}) {
    this.id = data.id ?? 0;
    this.lName = data.lName ?? '';
    this.fName = data.fName ?? '';
    this.job = data.job ?? '';
    this.cin = data.cin ?? 0;
    this.age = data.age ?? 0;
    this.path = data.path ?? '';
  }
}
