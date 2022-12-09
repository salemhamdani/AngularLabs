import {Component, OnInit} from '@angular/core';
import {CvService} from "../../Service/cv.service";
import {Person} from "../../Model/Person";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {

  constructor(private cvService: CvService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addPerson(form: any) {
    const id: number = Math.floor(Math.random() * 100)
    const person: Person = new Person({...form.value,id})
    console.log(person)
    this.cvService.add(person)
    const link = ['cv']
    this.router.navigate(link)
  }

}
