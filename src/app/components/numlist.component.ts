import { Component, Input } from '@angular/core';
import { PicNum } from '../models';

@Component({
  selector: 'app-numlist',
  templateUrl: './numlist.component.html',
  styleUrls: ['./numlist.component.css']
})
export class NumlistComponent {

  // The list of numbers and corresponding text to be displayed
  @Input()
  numImages: PicNum[] = []
  // [
  //   { num: 1, text: "ONE"},
  //   { num: 2, text: "TWO"},
  //   { num: 3, text: "THREE"},
  //   { num: 4, text: "FOUR"},
  //   { num: 5, text: "FIVE"},
  // ]

  //numImages = [ 1, 2, 3, 4, 5 ]

  // A method that takes an optional name parameter and does nothing
  hello(name = 'fred') {

  }

}
