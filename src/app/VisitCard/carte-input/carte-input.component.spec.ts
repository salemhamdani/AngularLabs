import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteInputComponent } from './carte-input.component';

describe('CarteInputComponent', () => {
  let component: CarteInputComponent;
  let fixture: ComponentFixture<CarteInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
