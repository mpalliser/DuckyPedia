import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorItemComponent } from './honor-item.component';

describe('HonorItemComponent', () => {
  let component: HonorItemComponent;
  let fixture: ComponentFixture<HonorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HonorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HonorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
