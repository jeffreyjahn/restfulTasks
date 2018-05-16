import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){
    this.getTasks();
  }
  newTask(newTask){
    return this._http.post('/api/tasks/new', newTask);
  }
  getTasks(){
    return this._http.get('/api/tasks');
  }
  getTask(id){
    return this._http.get('/api/'+id+'/');
  }
  removeTask(id){
    return this._http.delete('/api/remove/'+id+'/');
  }
  updateTask(oneTask){
    return this._http.put('/api/update/'+oneTask._id+'/', oneTask);
  }
}
