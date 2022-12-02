import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
  color = 'blue';

  constructor() {
  }

  ngOnInit(): void {
  }
  handleColor(message:any){
    this.color=message;
  }
}
