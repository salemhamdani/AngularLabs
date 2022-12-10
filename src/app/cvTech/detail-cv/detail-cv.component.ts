import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../../Model/Person";
import {EmbaucheService} from "../../Service/embauche.service";
import {Router} from "@angular/router";
import {CvService} from "../../Service/cv.service";

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  person: Person | null = null;
  private emboucheService: EmbaucheService | null = null;

  constructor(emboucheService: EmbaucheService, private cvService: CvService, private router: Router) {
    this.emboucheService = emboucheService;
  }

  ngOnInit(): void {
    this.cvService.selectedCv.subscribe(
      data =>{
        this.person= data ;
      }
    )
  }

  hire(person: Person): void {
    this.emboucheService?.add(person)
  }

  detail() {
    const link = ['cv', this.person?.id]
    this.router.navigate(link)
  }
}
