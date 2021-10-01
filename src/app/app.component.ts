import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularDemo';
  counter = 0;
  

  cards=[
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
  ]

  
}
