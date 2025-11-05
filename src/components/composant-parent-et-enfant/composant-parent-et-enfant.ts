import { Component } from '@angular/core';
import { ComposantEnfant } from "../composant-enfant/composant-enfant";
import { IUser } from '../../interfaces/IUser';
import { ComposantEnfantPourOutput } from "../composant-enfant-pour-output/composant-enfant-pour-output";

@Component({
  selector: 'app-composant-parent-et-enfant',
  imports: [ComposantEnfant, ComposantEnfantPourOutput],
  templateUrl: './composant-parent-et-enfant.html',
  styleUrl: './composant-parent-et-enfant.css',
})
export class ComposantParentEtEnfant {
  // EXEMPLE 1 : @INPUT (composant composant parent -> composant enfant)

  text: string = "Texte créé dans le composant parent"

  user: IUser = {
    firstName: "Riri",
    lastName: "Fifi",
    age: 5
  }

  // ________________________________________________________________________

  // EXEMPLE 2 : @OUTPUT (composant enfant -> composant parent)

  data: string = ""

  passDataFct(donneeRecue: string) {
    console.log("donnée reçu de l'enfant: ", donneeRecue)
    this.data = donneeRecue
  }

}
