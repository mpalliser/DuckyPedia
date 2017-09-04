import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DucksCaidosComponent } from './ducks-caidos.component';

describe('DucksCaidosComponent', () => {
  let component: DucksCaidosComponent;
  let fixture: ComponentFixture<DucksCaidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DucksCaidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DucksCaidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
