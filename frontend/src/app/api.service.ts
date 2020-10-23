import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
message : any;
  constructor( private http : HttpClient) { }
 
  FormData(data){
    return this.http.post<any>('http://localhost:1220/forms',data)
  }
  SecondForm(data){
    return this.http.post<any>('http://localhost:1220/secondform',data)
  }

  
  getFormData(data){
    return this.http.get<any>('http://localhost:1220/forms',data)
  }


}
