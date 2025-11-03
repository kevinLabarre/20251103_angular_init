import { Component } from '@angular/core';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-directive-if',
  imports: [],
  templateUrl: './directive-if.html',
  styleUrl: './directive-if.css',
})
export class DirectiveIf {
  displayText: boolean = true

  // user?: IUser = undefined

  user?: IUser = {
    firstName: "Riri",
    lastName: "Fifi",
    age: 5
  }

}
