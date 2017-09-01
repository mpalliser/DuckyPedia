import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorDucksComponent } from './honor-ducks.component';

describe('HonorDucksComponent', () => {
  let component: HonorDucksComponent;
  let fixture: ComponentFixture<HonorDucksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HonorDucksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HonorDucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
