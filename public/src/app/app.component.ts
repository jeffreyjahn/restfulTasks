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
  ngOnInit(){
    this.tasks = [];
    this.oneTask = {};
    this.title = 'Restful Tasks'
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data=>{
      console.log('Got tasks', data);
      this.tasks = data;
    });
  }
  getSpecificTask(id: any){
    let observable = this._httpService.getTask(id);
    observable.subscribe(data=>{
      console.log('whatup', data)
      this.oneTask = data;
    });
  }
}
