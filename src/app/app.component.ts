import { Component } from '@angular/core';
import { PicNum } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Define component properties
  title = 'day31';
  disabled = true
  textColour = 'black'
  num = 10

  // Define an array of PicNum objects
  pics: PicNum[] = [
    { num: 8, text: "HUAT AH!" },
    { num: 8, text: "HUAT AH!" },
    { num: 8, text: "HUAT AH!" },
    { num: 8, text: "HUAT AH!" },
    { num: 8, text: "HUAT AH!" },
  ]

  // Define methods for the component

  // This method toggles the disabled property of the input element
  toggleInput() {
    console.info('button clicked')
    this.disabled = !this.disabled
  }

  // This method is called when the count component emits an output event
  // It receives the new value as an argument and updates the num property
  newValue(value: number) {
    console.info('>>> new value: ', value)
    this.num += value
  }

  // These methods change the text color of the heading element when the mouse enters or exits
  cursorEntered() {
    this.textColour = "red";
  }
  cursorExit() {
    this.textColour = 'black'
  }

  // This method is called when the input element emits an input event
  newInputValue(abc: any) {
    console.info('... typed', abc)
  }
}
