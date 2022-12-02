import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSimulatorComponent } from './color-simulator.component';

describe('ColorSimulatorComponent', () => {
  let component: ColorSimulatorComponent;
  let fixture: ComponentFixture<ColorSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorSimulatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
