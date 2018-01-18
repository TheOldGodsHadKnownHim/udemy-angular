import {Component } from '@angular/core';

@Component({
  selector: 'app-user',
  // inline templates are valid to use so long as they are small. If we want to do a multiline
  // template, then we need to make use of backticks. Remember, if you are using inline, then
  // you need to use template rather than templateUrl
  template: `
  <!-- (input) = 'onUserInput()' allows us to listen to the input event from the user
  and do something with that input in our onUserInput() method

  $event is a reserved name for this type of event object. By passing it in you get access
  to the native DOM event which is created automatically

  You can bind to properties of a html element by enclosing the property name in squared []
  brackets. In the example below we are binding to the value property of the input element
  object. This is such a common event that Angular actually ships with a directive that
  creates a much shorter syntax for the task we are trying to complete: 2 way data binding


  original way we were doing the binding

    <input type='text' (input) = 'onUserInput($event)' [value]='name'/>

  -->
  <input type='text' [(ngModel)]="name"/>
  <p>Hello {{name}}!</p>
  <p>I'm the user Component</p>
  `
})
export class UserComponent {
  name = 'Keith';

  // Method to change the name property to whatever the user enters. To do so we need
  // access to the event object

  // Commenting out because it's no longer required now that we are using ngModel
  // onUserInput(event) {
  //   // Becasue it is an input event that is fired we have this value field and it will
  //   // represent the value the user inputs
  //   this.name = event.target.value;
  // }
}

