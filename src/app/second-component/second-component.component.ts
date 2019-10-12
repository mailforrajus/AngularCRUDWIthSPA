import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpRestServiceService } from '../service/emp-rest-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  formData: FormGroup;
  empSavedStatus: boolean;
  constructor(private _formBilder: FormBuilder, private _service: EmpRestServiceService) { }

  ngOnInit() {
    this.formData = this._formBilder.group({
      employeeId: [null, [Validators.required]],
      employeeName: [null, [Validators.required, Validators.min(5)]],
      employeeSalary: [null, [Validators.required, Validators.max(8)]]
    });
  }
  public register() {
    this._service.saveEmpInfo(this.formData.value).subscribe(savedStatus => {
      this.empSavedStatus = savedStatus
      , (err: HttpErrorResponse) => {
        console.log(err);
      }
    })
  }
}
