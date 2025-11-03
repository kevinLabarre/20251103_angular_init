import { Component } from '@angular/core';
import { IUser } from '../../interfaces/IUser';
import { BankAccountEnum } from '../../enums/BankAccountEnum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directive-for',
  imports: [CommonModule],
  templateUrl: './directive-for.html',
  styleUrl: './directive-for.css',
})
export class DirectiveFor {
  fruits: string[] = ["apple", "banana", "cherry", "durian", "elderberry", "apple"];

  users: IUser[] = [
    {
      id: 1,
      firstName: "Jean",
      lastName: "Dupont",
      age: 35,
      bankAccount: BankAccountEnum.COURANT
    },
    {
      id: 2,
      firstName: "Marie",
      lastName: "Martin",
      age: 28,
      bankAccount: BankAccountEnum.COURANT
    },
    {
      id: 3,
      firstName: "Pierre",
      lastName: "Durand",
      age: 42,
      bankAccount: BankAccountEnum.EPARGNE
    },
    {
      id: 4,
      firstName: "Sophie",
      lastName: "Lefebvre",
      age: 31,
      bankAccount: BankAccountEnum.EPARGNE
    },
    {
      id: 5,
      firstName: "Thomas",
      lastName: "Bernard",
      age: 45,
      bankAccount: BankAccountEnum.SECONDAIRE
    }
  ];

}
