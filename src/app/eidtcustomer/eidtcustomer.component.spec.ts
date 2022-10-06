import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EidtcustomerComponent } from './eidtcustomer.component';

describe('EidtcustomerComponent', () => {
  let component: EidtcustomerComponent;
  let fixture: ComponentFixture<EidtcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EidtcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EidtcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
