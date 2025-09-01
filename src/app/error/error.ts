import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: 'app-error',
  imports: [RouterLink],
  templateUrl: './error.html',
  styleUrl: './error.css'
})
export class Error {
 goBack(): void {
    window.history.back();
  }
}
