import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-bienvenida',
  imports: [RouterLink],
  templateUrl: './bienvenida.html',
  styleUrl: './bienvenida.css'
})
export class Bienvenida {

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }

}
