import {Component, OnInit} from '@angular/core';
import {EmbaucheService} from "../../Service/embauche.service";
import {Person} from "../../Model/Person";

@Component({
  selector: 'app-hired-list',
  templateUrl: './hired-list.component.html',
  styleUrls: ['./hired-list.component.css']
})
export class HiredListComponent implements OnInit {
  private emboucheService: EmbaucheService | null = null;
  hiredPersons: Person [] = [];

  constructor(emboucheService: EmbaucheService) {
    this.emboucheService = emboucheService;
  }

  ngOnInit(): void {
    this.hiredPersons = this.emboucheService?.getHiredPersons() as Person []
  }

}
