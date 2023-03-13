import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {

  // Declare an input property called 'startNum' and set its default value to 0.
  @Input()
  startNum = 0

  // Declare an output property called 'valueChanged' of type 'Subject<number>'.
  @Output()
  valueChanged = new Subject<number>()

  // This method is called when the user clicks on a button to increment or decrement the counter.
  updatePic(inc: number) {
    // Increment or decrement 'startNum' by the given amount.
    this.startNum += inc
    // Emit a new value for 'valueChanged' with the amount that 'startNum' was incremented or decremented.
    this.valueChanged.next(inc)
  }
}
