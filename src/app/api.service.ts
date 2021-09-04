import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'https://my-json-server.typicode.com/23jay/mockapis/users';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  //get all employee list
  public getAllEmployee(): Observable<any> {
    return this.http.get(API_URL).pipe(map((res) => res));
  }

  // Add new employee
  public addEmployee(employeeData:any): Observable<any> {
    return this.http.post(API_URL , employeeData).pipe(map((res) => res));
  }
}
