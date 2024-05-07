import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Position } from 'src/app/models/position';
import { PositionsService } from 'src/app/services/position.service';

@Component({
  selector: 'app-position-page',
  templateUrl: './position-page.component.html',
  styleUrls: ['./position-page.component.scss']
})
export class PositionPageComponent implements OnInit {

  constructor(public positionSvc: PositionsService,router:Router){
    console.log(this.positionToView);
   
      localStorage.getItem("name")==null?router.navigate(["/login"]):""
   
     
    
  }
  
  click(){
    alert( this.positionSvc)
  }
  ngOnInit(): void {
  }
  positionToView:Position[] =this.positionSvc.PositionList
  filterDetails:any = null
  filterChange($event:any){
    console.log("filterchange ");
    
    console.log($event);
    
    this.filterDetails = $event
  this.applyFilter()
  }
  applyFilter(){
    this.positionToView = this.positionSvc.filterPosition(this.filterDetails.area,this.filterDetails.field)
    console.log(this.filterDetails.field);
    
  }
}
