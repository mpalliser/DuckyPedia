import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorDetailComponent } from './honor-detail.component';

describe('HonorDetailComponent', () => {
  let component: HonorDetailComponent;
  let fixture: ComponentFixture<HonorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HonorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HonorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
