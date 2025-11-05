import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsService } from '../../services/news-service';
import { INews } from '../../interfaces/INews';
import { ToastComponent } from "../toast-component/toast-component";

@Component({
  selector: 'app-formulaire',
  imports: [ReactiveFormsModule, ToastComponent],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css',
})
export class Formulaire {

  constructor(private newsService: NewsService) { }

  displaySuccessToast: boolean = false
  displayErrorToast: boolean = false

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

      const result = this.newsForm.value

      const news: INews = {
        titre: result.titre!,
        texte: result.texte || "",
        image: result.image!,
        categorie: result.categorie!,
        datePublication: new Date(),
        dateModification: new Date(),
      }

      this.newsService.addOneNews(news).subscribe({
        next: (resp) => {
          console.log("Produit ajouté  : ", resp)
          this.displaySuccessToast = true
          setTimeout(() => this.displaySuccessToast = false, 2000)
        },
        error: (err) => {
          console.error(err)
          this.displayErrorToast = true
          setTimeout(() => this.displayErrorToast = false, 5000)
        },
        // complete: () => { }
      })
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
