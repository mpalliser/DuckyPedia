import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorListComponent } from './honor-list.component';

describe('HonorListComponent', () => {
  let component: HonorListComponent;
  let fixture: ComponentFixture<HonorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HonorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HonorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
