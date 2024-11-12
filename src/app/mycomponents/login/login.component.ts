import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    username:any;
    password:any;
    reqpsw:any;
    user:any;

    constructor(private route:Router){}

    checklogin()
    {
      this.reqpsw=this.username.slice(0,3)+'123';
      if(this.password==this.reqpsw)
      {
        alert("User Loggin Successfully");
        this.user={username:this.username}
        localStorage.setItem("Logginin",JSON.stringify(this.user))
        this.route.navigateByUrl('/user/car');
      }
      else if(this.username=='admin' && this.password=='admin123')
      {
        alert("Admin Loggin successfully");
        this.route.navigateByUrl('/admin/car');
      }
      else
      {
        alert("Invalid Check cerdentinals")
      }
    }
}
