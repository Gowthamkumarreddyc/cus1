import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})

export class AddcustomerComponent implements OnInit {
  // details(details: any) {
  //   throw new Error('Method not implemented.');
  // }
  // getDet() {
  //   throw new Error('Method not implemented.');
  // }
addForm:any=FormGroup;
  constructor(private fb: FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      address:[''],
      city:[''],
      state:[''],
      zipcode:['']
    })
  }

  addCustomer() {
    this.http.post<any>("http://localhost:3000/profile", this.addForm.value).subscribe(res=>{
      // alert("Customer added succesffuly")
      this.addForm.reset();
    })
  }
}
