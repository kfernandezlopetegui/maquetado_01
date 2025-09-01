import { Component  } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
   constructor() { }

  onLogin(): void {
    console.log('Login clicked');
    // Aquí después pondrás tu lógica de login
  }

  onForgotPassword(): void {
    console.log('Forgot password clicked');
    // Aquí después pondrás tu lógica
  }
}
