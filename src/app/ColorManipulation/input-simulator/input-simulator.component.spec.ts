import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSimulatorComponent } from './input-simulator.component';

describe('InputSimulatorComponent', () => {
  let component: InputSimulatorComponent;
  let fixture: ComponentFixture<InputSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSimulatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
