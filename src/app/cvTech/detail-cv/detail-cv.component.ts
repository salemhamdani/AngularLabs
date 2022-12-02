import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../../Model/Person";
import {EmbaucheService} from "../../Service/embauche.service";

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  @Input() person: Person | null = null;
  private emboucheService: EmbaucheService | null = null;

  constructor(emboucheService: EmbaucheService) {
    this.emboucheService = emboucheService;
  }

  ngOnInit(): void {
  }

  hire(person: Person):void {
    this.emboucheService?.add(person)
  }
}
