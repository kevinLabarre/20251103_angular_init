import { Component } from '@angular/core';
import { ComposantEnfant } from "../composant-enfant/composant-enfant";
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-composant-parent-et-enfant',
  imports: [ComposantEnfant],
  templateUrl: './composant-parent-et-enfant.html',
  styleUrl: './composant-parent-et-enfant.css',
})
export class ComposantParentEtEnfant {
  text: string = "Texte créé dans le composant parent"

  user: IUser = {
    firstName: "Riri",
    lastName: "Fifi",
    age: 5
  }

}
