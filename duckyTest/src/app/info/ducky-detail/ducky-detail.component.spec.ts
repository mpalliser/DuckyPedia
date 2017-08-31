import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckyDetailComponent } from './ducky-detail.component';

describe('DuckyDetailComponent', () => {
  let component: DuckyDetailComponent;
  let fixture: ComponentFixture<DuckyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuckyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuckyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
