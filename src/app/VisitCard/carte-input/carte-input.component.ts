import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Person} from "../../Model/Person";

@Component({
  selector: 'app-carte-input',
  templateUrl: './carte-input.component.html',
  styleUrls: ['./carte-input.component.css']
})
export class CarteInputComponent implements OnInit {
  person: Person = new Person();
  @Output() changePerson = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  handlePersonUpdate(event: any) {

    this.person = new Person({...this.person, [event.target.name]: event.target.value})
    this.changePerson.emit(
      this.person
    )
  }
}
