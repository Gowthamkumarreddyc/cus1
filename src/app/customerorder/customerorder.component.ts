import { Component, OnInit } from '@angular/core';
import { CustomerlistService } from '../customerlist.service';
@Component({
  selector: 'app-customerorder',
  templateUrl: './customerorder.component.html',
  styleUrls: ['./customerorder.component.css']
})
export class CustomerorderComponent implements OnInit {
  public customerlist:any;
  constructor(private cstServices: CustomerlistService) { }

  ngOnInit(): void {
   this.cstServices.get().subscribe((res)=>{
      this.customerlist=res;
    })
 
}

}
