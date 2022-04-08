import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxquoteComponent } from './maxquote.component';

describe('MaxquoteComponent', () => {
  let component: MaxquoteComponent;
  let fixture: ComponentFixture<MaxquoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxquoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
