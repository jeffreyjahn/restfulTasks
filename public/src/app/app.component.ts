import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string;
  constructor(private _httpService: HttpService){}
  tasks: any;
  oneTask: any;
  newTask: any;
  ngOnInit(){
    this.tasks = [];
    this.oneTask = {};
    this.title = 'Restful Tasks';
    this.newTask ={ title: "", description: "" };
    this.getTasksFromService();
  }
  newTaskSubmit(){
    let observable = this._httpService.newTask(this.newTask);
    observable.subscribe(data=>{
      console.log('Uploaded task!', data);
      this.newTask ={ title: "", description: "" };
      this.getTasksFromService();
    });
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data=>{
      // console.log('Got tasks', data);
      this.tasks = data;
    });
  }
  getSpecificTask(id: any){
    let observable = this._httpService.getTask(id);
    observable.subscribe(data=>{
      console.log('Editing this data: ', data);
      this.oneTask = data;
    });
  }
  removeTaskFromService(id: any){
    let observable = this._httpService.removeTask(id);
    observable.subscribe(data=>{
      console.log('Editing this data: ', data);
      this.getTasksFromService();
    });
  }
  updateTaskService(){
    let observable = this._httpService.updateTask(this.oneTask);
    observable.subscribe(data=>{
      console.log('Updated data: ', data)
      this.oneTask = {};
      this.getTasksFromService();
    });
  }
}
