import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title = "";
  @Input() price = 0;
  @Input() typeofuser = "";
  @Input() storage = "";
  @Input() project = "";
  @Input() community = "";
  @Input() priproject:boolean = true;
  @Input() phonesupport:boolean = true;
  @Input() subdomain:boolean = true;
  @Input() monstatrep:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
