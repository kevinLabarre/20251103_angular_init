import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-composant-enfant-pour-output',
  imports: [],
  templateUrl: './composant-enfant-pour-output.html',
  styleUrl: './composant-enfant-pour-output.css',
})
export class ComposantEnfantPourOutput implements OnInit {

  @Output() fctPassData = new EventEmitter<string>()

  data: string = "donnée créé dans le composant enfant"

  ngOnInit(): void {
    this.fctPassData.emit(this.data)
  }

  handlePassData() {
    this.fctPassData.emit("Donnée reçue une deuxième fois")
  }



}
