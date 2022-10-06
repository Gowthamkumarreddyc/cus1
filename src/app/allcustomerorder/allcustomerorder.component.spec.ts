import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcustomerorderComponent } from './allcustomerorder.component';

describe('AllcustomerorderComponent', () => {
  let component: AllcustomerorderComponent;
  let fixture: ComponentFixture<AllcustomerorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcustomerorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcustomerorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
