import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app.dashboard-component.html',
  styleUrls: ['./app.dashboard-component.css']
})
export class DashboardComponent {
  loadState = 'loading';
  userLoadState = '';

 changeLoadState (){
   console.log("changeLoadState called")
   this.loadState = 'finished';
 }
}

