import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){
    this.getTasks();
    this.getTask("5af9f9747fabe7d423d34620");
  }
  getTasks(){
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data=>console.log("Got our data!", data))
  }
  getTask(id){
    let tempObservable = this._http.get('/'+id+'/');
    tempObservable.subscribe(data=>console.log("Got our data!", data))
  }
}
