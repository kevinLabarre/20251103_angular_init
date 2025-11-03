import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-composant-enfant',
  imports: [],
  templateUrl: './composant-enfant.html',
  styleUrl: './composant-enfant.css',
})
export class ComposantEnfant {
  // @Input() parentText?: string; // Entrée non obligatoire
  @Input({ required: true }) parentText!: string;

  @Input({ required: true }) parentUser!: IUser

}
