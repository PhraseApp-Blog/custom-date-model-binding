import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDateComponent } from './custom-date.component';

describe('CustomDateComponent', () => {
  let component: CustomDateComponent;
  let fixture: ComponentFixture<CustomDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
