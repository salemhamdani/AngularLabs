import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "../../Model/Person";

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {

  @Input() person: Person | null = null;
  @Output() selectedPerson = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  selectPerson(){
  this.selectedPerson.emit(
    this.person
  )
  }
}
