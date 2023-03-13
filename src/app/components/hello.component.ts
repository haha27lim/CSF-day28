import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  // Declare an input property called 'message' and set its default value to "this is my message".
  @Input()
  message = "this is my message"


}
