import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmpRestServiceService {

  constructor(private _http:HttpClient) { }

  public getAllEmpInfo():any{
    console.log("inside service class get()")
    return this._http.get("http://localhost:8080/empRestAPI/getAllEmpInfo");
  }

  public saveEmpInfo(obj:any):any{
    console.log("inside service class saveEmpInfo()")
    return this._http.post("http://localhost:8080/empRestAPI/saveEmpInfo",obj);
  }
}
