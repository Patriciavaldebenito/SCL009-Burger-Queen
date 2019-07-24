import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnMainBreakfastOrLunchComponent } from './btn-main-breakfast-or-lunch.component';

describe('BtnMainBreakfastOrLunchComponent', () => {
  let component: BtnMainBreakfastOrLunchComponent;
  let fixture: ComponentFixture<BtnMainBreakfastOrLunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnMainBreakfastOrLunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnMainBreakfastOrLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
