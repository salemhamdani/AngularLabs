import {Injectable} from '@angular/core';
import {Person} from "../Model/Person";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  persons: Person[] = [];
  private CvSubject = new Subject<Person>();
  selectedCv = this.CvSubject.asObservable();
  passValue(data : Person) {
    //passing the data as the next observable
    this.CvSubject.next(data);
  }
  constructor() {
    this.persons = [
      new Person({
        id: 1,
        fName: 'Salem',
        lName: 'Hamdani',
        job: 'developer',
        cin: 2112545487,
        age: 21,
        path: 'assets/images/rotating_card_profile2.png'
      }),
      new Person({
        id: 2,
        fName: 'Ismail',
        lName: 'CHARFI',
        job: 'developer',
        cin: 21125654487,
        age: 20,
        path: 'assets/images/rotating_card_profile3.png'
      }),
      new Person({
        id: 3,
        fName: 'Ahmed',
        lName: 'Achour',
        job: 'Alchemist',
        cin: 325569987,
        age: 22,
        path: ''
      })
    ]
  }

  getPersons(): Person[] {
    return this.persons
  }

  getPersonById(id: number): Person {
    const person = this.persons.filter((person: Person) => person.id == id)[0]
    return (person ? person : new Person());
  }

  deletePerson(id: number) {
    this.persons = this.persons.filter((person: Person) => person.id != id)
  }

  add(person: Person) {
    this.persons.push(person)

  }
}
