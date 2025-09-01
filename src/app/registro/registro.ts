import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: 'app-registro',
  imports: [RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
onRegister(): void {
    console.log('Register clicked');
    
  }
}
