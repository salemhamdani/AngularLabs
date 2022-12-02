import {Injectable} from '@angular/core';
import {Person} from "../Model/Person";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private hiredPersons: Person [] = []

  constructor(private toastr: ToastrService) {
  }

  add(person: Person) {
    if (this.hiredPersons.indexOf(person) < 0) {
      this.hiredPersons.push(person);
      this.toastr.success(`${person.fName} ${person.lName} is added to hired lists`);
    }
    else  this.toastr.error(`${person.fName} ${person.lName} is already added`);
  }

  getHiredPersons(){
    return this.hiredPersons;
  }


}
