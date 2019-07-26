import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateClientComponent } from './template-client.component';

describe('TemplateClientComponent', () => {
  let component: TemplateClientComponent;
  let fixture: ComponentFixture<TemplateClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
