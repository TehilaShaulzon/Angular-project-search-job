import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fields } from 'src/app/models/fields';
import { Position } from 'src/app/models/position';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent  {
  constructor(private router: Router, private active: ActivatedRoute ,private userService:UserService) { }
  @Input('position') position:Position| null = null
showDetails() {
  this.router.navigate(['show-details',this.position?.jobName], {relativeTo:this.active})

}


  sendCV()
  {
    this.userService.cv=this.userService.cv?this.userService.cv+1:1
    localStorage.setItem("cv",(this.userService.cv?this.userService.cv+1:1).toString())
  }
  
}
