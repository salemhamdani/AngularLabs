import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "../../Model/Person";
import {CvService} from "../../Service/cv.service";

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {

  @Input() person: Person | null = null;

  constructor(private cvService: CvService) {
  }

  ngOnInit(): void {
  }

  selectPerson() {
    if (this.person)
      this.cvService.passValue(this.person)
  }
}
