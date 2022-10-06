import { map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CustomerlistService {

  constructor(private http:HttpClient){}
  add(data:any){
    return this.http.post("http://localhost:3000/customers",data)
  }
  get(){
    return this.http.get("http://localhost:3000/customers")
  }
  delete(id:any){
    return this.http.delete("http://localhost:3000/customers/"+id)

   }
  // getuserByid(id:any){
  //   return this.http.get("http://localhost:3000/profile"+id)
  // }
  // updateUser(data:any){
  //   return this.http.put("http://localhost:3000/profile"+data.id,data)
  // }
}