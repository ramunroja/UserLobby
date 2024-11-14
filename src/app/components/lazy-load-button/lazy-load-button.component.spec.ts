import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadButtonComponent } from './lazy-load-button.component';

describe('LazyLoadButtonComponent', () => {
  let component: LazyLoadButtonComponent;
  let fixture: ComponentFixture<LazyLoadButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyLoadButtonComponent]
    });
    fixture = TestBed.createComponent(LazyLoadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
