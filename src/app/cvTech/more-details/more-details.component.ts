import {Component, OnInit} from '@angular/core';
import {CvService} from "../../Service/cv.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Person} from "../../Model/Person";

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent implements OnInit {

  person: Person | null = null;
  private sub: any;

  constructor(private cvService: CvService, private activatedRoute: ActivatedRoute, private router: Router
  ) {
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((params) =>
      this.person = this.cvService.getPersonById(params['id']))
  }

  delete(person: Person) {
    this.cvService.deletePerson(person.id)
    const link = ['cv']
    this.router.navigate(link)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
