import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordEditeurComponent } from './word-editeur.component';

describe('WordEditeurComponent', () => {
  let component: WordEditeurComponent;
  let fixture: ComponentFixture<WordEditeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordEditeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordEditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
