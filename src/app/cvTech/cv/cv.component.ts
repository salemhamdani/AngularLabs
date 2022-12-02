import {Component, OnInit} from '@angular/core';
import {Person} from "../../Model/Person";
import {CvService} from "../../Service/cv.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  persons: Person[];
  selectedPerson: Person | null = null;
  private cvService: CvService | null = null;

  constructor(cvService: CvService) {
    this.persons = []
    this.cvService = cvService;
  }

  ngOnInit(): void {
    this.persons = this.cvService?.getPersons() as Person[];

  }

  selectPerson(selectedPerson: any) {
    this.selectedPerson = selectedPerson;
  }

}
