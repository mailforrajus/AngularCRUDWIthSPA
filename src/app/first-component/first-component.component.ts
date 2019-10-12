import { Component, OnInit } from '@angular/core';
import { EmpRestServiceService } from "../service/emp-rest-service.service";
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  empResult: any;
  constructor(private _service: EmpRestServiceService) { }

  ngOnInit() {
    this._service.getAllEmpInfo().subscribe(res=>{
      this.empResult=res
    }, (err:HttpErrorResponse)=>{
      console.log(err)
    });
  }
  
}
