import { CustomerlistService } from './../customerlist.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { AddcustomerComponent } from './addcustomer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('AddcustomerComponent', () => {
  let component: AddcustomerComponent;
  let fixture: ComponentFixture<AddcustomerComponent>;
 let service : CustomerlistService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcustomerComponent ],
      imports:[ReactiveFormsModule,HttpClientTestingModule],
      providers:[CustomerlistService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should get addcustomer",()=>{
    component.addCustomer();
    expect(component).toBeTruthy();
  })

  it("should call getUsers and return list of users", fakeAsync(() => {

    const response = [{

      id: 2,

      firstname: "adithya",

      lastname: "Nagaraj",

      email: "adithya@gmail.com",

      password: "1234567890",

      address: "Ballari",

      city: "Ballari",

      state: "Andhra pradesh",

      zipcode: "5678909",

      products: [

        {

          name: "Vivo",

          date: "06/05/2022",

          quantity: "6",

          price: "100"

        },

        {

          name: "iphone",

          date: "06/01/2022",

          quantity: "1",

          price: "200"

        } ]

 

  }];

 

    spyOn(service, 'get').and.returnValue(of(response))
    component.addCustomer();
    fixture.detectChanges();
    // expect(component.details).toEqual(response);

  }));
  
});
