import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckyListComponent } from './ducky-list.component';

describe('DuckyListComponent', () => {
  let component: DuckyListComponent;
  let fixture: ComponentFixture<DuckyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuckyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuckyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
