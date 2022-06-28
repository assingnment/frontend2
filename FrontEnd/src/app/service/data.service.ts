import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/notics');
  }

  insertData(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/addNotic' ,data);
  }

  deleteDate(id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteNotic/'+id);
  }

  getNoticById(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/notic/'+id);
  }
}