import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-avec-ng-model',
  imports: [FormsModule],
  templateUrl: './input-avec-ng-model.html',
  styleUrl: './input-avec-ng-model.css',
})
export class InputAvecNgModel {
  name = "Toto";
  checkBoxValue = false
  inputValue = ""
  handleReset() {
    this.name = "";
  }

  handleChange() {
    console.log(this.inputValue)
  }
}
