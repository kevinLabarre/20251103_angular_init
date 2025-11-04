import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css',
})
export class Formulaire {

  newsForm = new FormGroup({
    titre: new FormControl('', [Validators.maxLength(15), Validators.required]),
    texte: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    categorie: new FormControl('', Validators.required),
  })

  handleSubmit() {
    // Pour vérifier que aucun champ n'est en erreur (en fonction des validators utilisés)
    // this.newsForm.valid;
    // this.newsForm.invalid;

    if (this.newsForm.valid) {
      console.log("Formulaire envoyé")
      console.log(this.newsForm.value)
    } else {
      console.error("Formulaire non envoyé, au moins un champs est 'en erreur'")
    }
  }

  get requiredErrorTitle() {
    const titleErrors = this.newsForm.get('titre')!.errors
    if (titleErrors) {
      if (titleErrors['required']) {
        return true
      } else return false
    } else return false
  }

  get maxLenghtErrorTitle() {
    const titleErrors = this.newsForm.get('titre')!.errors
    if (titleErrors) {
      if (titleErrors['maxlength']) {
        return true
      } else return false
    } else return false
  }

  get textError() {
    const errors = this.newsForm.get('texte')!.errors
    if (errors) {
      return true
    } else return false
  }

  get imageError() {
    const errors = this.newsForm.get('image')!.errors
    if (errors) {
      return true
    } else return false
  }

  get categorieError() {
    const errors = this.newsForm.get('categorie')!.errors
    if (errors) {
      return true
    } else return false
  }

  get titleTouched() {
    return this.newsForm.get('titre')!.touched
  }

}
