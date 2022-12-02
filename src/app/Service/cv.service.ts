import {Injectable} from '@angular/core';
import {Person} from "../Model/Person";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  persons: Person[] = [];

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

  getPersons(): Person[]{
    return this.persons
  }
}
