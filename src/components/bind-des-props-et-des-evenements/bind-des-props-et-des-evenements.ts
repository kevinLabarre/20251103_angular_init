import { Component } from '@angular/core';

@Component({
  selector: 'app-bind-des-props-et-des-evenements',
  imports: [],
  templateUrl: './bind-des-props-et-des-evenements.html',
  styleUrl: './bind-des-props-et-des-evenements.css',
})
export class BindDesPropsEtDesEvenements {

  imgSrc: string = "favicon.ico"

  handleClick() {
    alert("J'ai cliqué sur le bouton")
  }

  // Logique pour désactiver un bouton

  buttonDisabled: boolean = false

  handleDisable() {
    this.buttonDisabled = !this.buttonDisabled
  }

}
