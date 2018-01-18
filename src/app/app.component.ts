import { Component } from '@angular/core';

// attaching this decorator informs angular that this class should be treated as a component
@Component({
  // the selector will be used as a tag in a html file <app-root></app-root>. Once angular
  // encounters this tag in a html file it knows that it needs to render this component
  // But what do we actually render? Well, we render the content of the templateUrl.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'app works!';

}
