import { Component } from '@angular/core';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-angular-fondamentaux',
  imports: [],
  templateUrl: './angular-fondamentaux.html',
  styleUrl: './angular-fondamentaux.css',
})
export class AngularFondamentaux {
  title: string = "Bienvenue sur angular"

  displayTitle(): string {
    return "Bienvenue sur angular"
  }

  firstName: string = 'John'
  lastName: string = 'Doe'

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  myArray: number[] = [1, 2, 3, 4, 5]
  user: IUser = {
    firstName: "Riri",
    lastName: "Fifi",
    age: 5
  }
}
