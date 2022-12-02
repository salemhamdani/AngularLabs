import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../../Model/Person";

@Component({
  selector: 'app-carte-view',
  templateUrl: './carte-view.component.html',
  styleUrls: ['./carte-view.component.css']
})
export class CarteViewComponent implements OnInit {
  @Input() person: Person = new Person()

  constructor() {
  }

  ngOnInit(): void {
  }

}
