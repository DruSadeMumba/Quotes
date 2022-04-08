import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinquoteDetailsComponent } from './minquote-details.component';

describe('MinquoteDetailsComponent', () => {
  let component: MinquoteDetailsComponent;
  let fixture: ComponentFixture<MinquoteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinquoteDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinquoteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
