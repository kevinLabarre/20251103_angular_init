import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../components/navbar/navbar";


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, Navbar],
  // template: "<h1>Bienvenue sur angular</h1>",
  styleUrl: './app.css'
})
export class App {

}
