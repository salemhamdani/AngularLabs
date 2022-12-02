import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-word-editeur',
  templateUrl: './word-editeur.component.html',
  styleUrls: ['./word-editeur.component.css']
})
export class WordEditeurComponent implements OnInit {

  @Input() color: string = '#150b22';
  size: string = '10px';
  fonts: string [] = ['serif', 'arial', 'sans-serif'];
  fontFamily: string = 'Times'

  constructor() {
  }

  ngOnInit(): void {
  }
}
