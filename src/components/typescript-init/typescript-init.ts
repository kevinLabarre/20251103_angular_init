import { Component } from '@angular/core';
import { IUser } from '../../interfaces/IUser';
import { User } from '../../class/User';
import { BankAccountEnum } from '../../enums/BankAccountEnum';
@Component({
  selector: 'app-typescript-init',
  imports: [],
  templateUrl: './typescript-init.html',
  styleUrl: './typescript-init.css',
})
export class TypescriptInit {

  // Ici le typage possible avec typescript :

  // 1. Les types symples
  title: string = "Bienvenue sur angular"
  text?: string

  myNumber: number = 1
  myBoolean: boolean = true

  // 2. Les tableaux
  myTable: number[] = [1, 2, 3, 4, 5]
  myTable2: any[] = [1, 2, 3, "Riri", "Fifi", "Loulou"]
  myTable3: (string | number)[] = [1, 2, 3, "Riri", "Fifi", "Loulou"]

  // 3. Les 'multi-types'
  myVar: string | number | boolean = 5

  // 4. Objets
  user: { firstName: string, lastName: string, age: number } = {
    firstName: "Riri",
    lastName: "Fifi",
    age: 5
  }

  // Typage avec interface
  user2: IUser = {
    firstName: "Riri",
    lastName: "Fifi",
    age: 5,
  }

  // typage avec objet
  user3: User = new User("Riri", "Fifi", 5)


  // 5. Enum
  bankAccount: "COURANT" | "EPARGNE" | "SECONDAIRE" = "EPARGNE"
  bankAccount2: BankAccountEnum = BankAccountEnum.COURANT
}
