import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private _httpClient:HttpClient) { }

  insertData(teacher:any):Observable<any>{
    return this._httpClient.post(`${environment.baseUrl}/api/Teacher`,teacher);
  }


  getAllTeachers():Observable<any>{
    return this._httpClient.get(`${environment.baseUrl}/api/Teacher`);
  }
ResetAll():Observable<any>{
 return this._httpClient.delete(`${environment.baseUrl}/api/Teacher/remove-all`);
}
  
}
