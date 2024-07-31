import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private _httpClient:HttpClient) { }
  getClassName():Observable<any>{

    return this._httpClient.get(`${environment.baseUrl}/api/Class/names`);
  }

  getTotalClasses():Observable<any>{
    return this._httpClient.get(`${environment.baseUrl}/api/Class/totalclasses`);
  }
  getTotalStudents():Observable<any>{
    return this._httpClient.get(`${environment.baseUrl}/api/Class/totalstudents`);
  }
}
