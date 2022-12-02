import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') bg = 'red';
  @HostBinding('style.color') c = 'green';
  @HostBinding('style.borderColor') bc = 'blue';

  colors: string[] = ['red', 'blue', 'coral', 'pink', 'green', 'purple', 'yellow', 'gray', 'black', 'white'];

  constructor() {
  }

  @HostListener('keypress') changeColor() {
    const index1 = Math.floor(Math.random() * (this.colors.length - 1));
    const index2 = Math.floor(Math.random() * (this.colors.length - 1));
    const index3 = Math.floor(Math.random() * (this.colors.length - 1));
    this.c = this.colors[index1];
    this.bc = this.colors[index2];
    this.bg = this.colors[index3];

  }
}
