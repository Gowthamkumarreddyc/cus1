import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CustomerlistService } from './customerlist.service';

describe('CustomerlistService', () => {
  let service: CustomerlistService;
  let httpController:HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[CustomerlistService]
    });
    service = TestBed.inject(CustomerlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('add should be added' ,() =>{
    expect(service).toBeTruthy();
  });
  
  it('should be created', () => {

    expect(service).toBeDefined();

  });

  // it('should be created', () => {

  //   expect(service).toBeDefined();

  // });

 

  it('can test HttpClient.get', () => {

    const  Data = [{

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
service.get()

      .subscribe(data =>

        expect(data).toEqual(Data),

       

      );



    const req = httpController.expectOne({

      method: 'GET',

    })



    expect(req.request.method).toEqual('GET');



    req.flush(Data);



    httpController.verify();

  });

});
