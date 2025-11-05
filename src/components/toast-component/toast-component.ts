import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast-component',
  imports: [],
  templateUrl: './toast-component.html',
  styleUrl: './toast-component.css',
})
export class ToastComponent implements OnInit {
  @Input() text: string = "Action effectuée avec succès";
  @Input() type: "success" | "error" = "success"

  ngOnInit(): void {
    if (this.type === "success") {
      this.style = "alert alert-info"
    } else {
      this.style = "alert alert-error"
    }
  }

  style!: string;

}
