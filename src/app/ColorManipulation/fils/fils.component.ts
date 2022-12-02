import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() myFavoriteColor: string = "orange";
  @Output() sendColor = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
   // console.log(this.myFavoriteColor)
  }
  sendColorToPapa(){
    this.sendColor.emit(
    this.myFavoriteColor
    );
  }

}
