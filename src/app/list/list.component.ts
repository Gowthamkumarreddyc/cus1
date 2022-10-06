import { Component, OnInit } from '@angular/core';
import { CustomerlistService } from '../customerlist.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  filterString : string= '';
  public customerlist:any;
  constructor(private cstServices: CustomerlistService) { }

  ngOnInit(): void {
   this.cstServices.get().subscribe((res)=>{
      this.customerlist=res;
    })
 
    
}
delete(x:any){
  this.cstServices.delete(x.id).subscribe((res)=>{
alert("deletd successfully...!")
  })
      
}
}
