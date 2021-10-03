import { Component } from '@angular/core';
import { Task } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularDemo';
  counter = 0;
  tasks : Array<Task> = [
    {
      complete : true,
      task : "default task"
    }
  ];

  addTodo(t:string){
    let obj ={} as Task;
    obj.complete=true;
    obj.task = t;
    this.tasks.push(obj);
  }

  completeTask(op:any){
    for(let i=0;i<this.tasks.length;i++){
      if(this.tasks[i].task==op){
        this.tasks[i].complete=false;
      }
    }
  }

  clearTasks(){
    for(let i=0;i<this.tasks.length;i++){
      if(this.tasks[i].complete==false){
        this.tasks.splice(i,1);
        console.log(this.tasks);
      }
    }
  }

 

  /*cards=[
    {
      title : "Free",
      price : 0,
      typeofuser : "Single user",
      storage : "5GB Storage",
      project : "Unlimited Public Projects",
      community : "Community Access",
      priproject : false,
      phonesupport : false,
      subdomain : false,
      monstatrep : false
    },
    {
      title : "Plus",
      price : 9,
      typeofuser : "5 Users",
      storage : "50GB Storage",
      project : "Unlimited Public Projects",
      community : "Community Access",
      priproject : true,
      phonesupport : true,
      subdomain : true,
      monstatrep : false
    },
    {
      title : "Pro",
      price : 49,
      typeofuser : "Unlimited Users",
      storage : "150GB Storage",
      project : "Unlimited Public Projects",
      community : "Community Access",
      priproject : true,
      phonesupport : true,
      subdomain : true,
      monstatrep : true
    }
  ]*/

  
}
