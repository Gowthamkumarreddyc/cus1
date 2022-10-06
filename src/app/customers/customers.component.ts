import { Component, OnInit } from '@angular/core';
import { CustomerlistService } from '../customerlist.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  filterString: string = '';
  public customerlist:any;
  
  constructor(private cstServices: CustomerlistService){

  }

  ngOnInit(): void {
    this.cstServices.get().subscribe((res)=>{
      this.customerlist=res;
    })
 
}
}