import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm :any = FormGroup;
  constructor(private fb:FormBuilder, private route: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:[''],
      password:['']
    })
  }
login() {
  this.http.get<any>("http://localhost:3000/profile").subscribe(re=>{
      
      if(re.email === this.loginForm.value.email && re.password == this.loginForm.value.password){
        alert("login success");
        this.route.navigateByUrl("/customer")
      // this.loginForm.reset();
      // var obj = {key1: 'key1', key2: 'loggedIn'};
      // sessionStorage.setItem(obj.key1,obj.key2);
      // this.route.navigate(['customer']);
    } else {
      alert("user not found")
    }
    });
}
}
