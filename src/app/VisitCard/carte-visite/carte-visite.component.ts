import {Component, OnInit} from '@angular/core';
import {Person} from "../../Model/Person";

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent implements OnInit {
  person: Person = new Person();

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange(person: any) {
    console.log(person)
    this.person = new Person({...person})
  }
}
