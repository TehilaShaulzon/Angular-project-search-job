import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user=localStorage.getItem("name")
  password=localStorage.getItem("password")
  
  title = 'searchJob';

  constructor(public userService:UserService,private router:Router){
    if (this.user!=null&&this.password!=null)
      userService.getUserFromServer(this.user,this.password).subscribe(() => {
        console.log(this.userService.User);
      })
    console.log(this.user);

  }

 
}
