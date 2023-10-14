import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //Sidebar toggle show hide function
  title = 'angularboot5';
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
  }