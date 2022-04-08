import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinquoteDetailComponent } from './minquote-detail.component';

describe('MinquoteDetailComponent', () => {
  let component: MinquoteDetailComponent;
  let fixture: ComponentFixture<MinquoteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinquoteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinquoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
