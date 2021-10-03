import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() task:string = "" ;
  @Input() complete:boolean = true ;
  @Output() op : EventEmitter<string> = new EventEmitter<string>();

  completeTask($event:any){
    this.op.emit(this.task);
    console.log(this.task);
  }

  constructor() { }
  ngOnInit(): void {
  }


}
