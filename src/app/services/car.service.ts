
import { Injectable } from '@angular/core';
import { CarResponseModel } from '../models/carResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "http://localhost:5052/api/Cars/getallcars"
  constructor(private http:HttpClient) { }

  getCars(): Observable<CarResponseModel>{
    return this.http.get<CarResponseModel>(this.apiUrl);
  }
}
