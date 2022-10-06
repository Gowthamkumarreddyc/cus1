import { of } from 'rxjs';
import { CustomerlistService } from './../customerlist.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service:CustomerlistService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports:[HttpClientTestingModule],
      providers:[CustomerlistService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should be deleted",()=>{
    component.delete(1);
  });

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
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.customerlist).toEqual(response);

  }));
});
