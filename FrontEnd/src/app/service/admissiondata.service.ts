import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdmissiondataService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/admissions');
  }

  insertData(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/addAdmission' ,data);
  }

  deleteDate(id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteAdmission/'+id);
  }

  getNoticById(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/admission/'+id);
  }

}