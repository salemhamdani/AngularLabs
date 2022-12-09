import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  myObservable: Observable<any> | undefined;

  constructor() {
  }

  images = [
    '404.jpg',
    'cv.jpg',
    'rotating_card_profile.png',
    'rotating_card_profile2.png'
  ]
  currentImage: string = 'rotating_card_profile.png'

  ngOnInit(): void {
    this.myObservable = new Observable<any>(
      (observer) => {
        let i = 0
        setInterval(
          () => {
            observer.next(this.images[i]);
            i = (i + 1) % this.images.length
          }, 1500
        )
      }
    );
    this.myObservable.subscribe((result: string) => {
      this.currentImage = result;
    });
  }

}
