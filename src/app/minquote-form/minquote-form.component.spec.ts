import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinquoteFormComponent } from './minquote-form.component';

describe('MinquoteFormComponent', () => {
  let component: MinquoteFormComponent;
  let fixture: ComponentFixture<MinquoteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinquoteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinquoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
