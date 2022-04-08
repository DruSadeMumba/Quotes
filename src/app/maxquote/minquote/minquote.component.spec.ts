import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinquoteComponent } from './minquote.component';

describe('MinquoteComponent', () => {
  let component: MinquoteComponent;
  let fixture: ComponentFixture<MinquoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinquoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
