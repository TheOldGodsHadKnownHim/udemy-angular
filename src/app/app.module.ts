import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from 'app/user.component';


// In this project the AppComponent is our root component, the one component that will hold our
// complete app. Every other component we add will be added to the app-component.html template

@NgModule({
// All components in the application must be added to the declarations array
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  // This is the one component that can be found in the index.html file
  bootstrap: [AppComponent]
})
export class AppModule { }
