import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sobre-mi',
  imports: [RouterLink],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css'
})
export class SobreMi {
// Datos personales que puedes personalizar
  personalInfo = {
    name: 'Karen Fernandez ',
    role: 'Tecnico en Programacion y Electronica',
    location: 'Buenos Aires, Argentina',
    email: 'karenfernandezlopetegui@gmail.com',
    description: 'Estudiante apasionado por el desarrollo web y las nuevas tecnologías. Especializado en Angular y maquetado moderno.',
    avatar: 'https://via.placeholder.com/200x200/FF4B2B/FFFFFF?text=TU'
  };

  // Skills con nivel (puedes personalizar)
  skills = [
    { name: 'Angular', level: 75, icon: 'fab fa-angular' },
    { name: 'TypeScript', level: 70, icon: 'fab fa-js-square' },
    { name: 'HTML/CSS', level: 90, icon: 'fab fa-html5' },
    { name: 'Bootstrap', level: 80, icon: 'fab fa-bootstrap' },
    { name: 'Git', level: 65, icon: 'fab fa-git-alt' },
    { name: 'Figma', level: 60, icon: 'fab fa-figma' }
  ];

  // Enlaces sociales (personaliza con tus datos)
  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/tuusuario', icon: 'fab fa-github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/tuusuario', icon: 'fab fa-linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/tuusuario', icon: 'fab fa-twitter' },
    { name: 'Email', url: 'mailto:tu.email@ejemplo.com', icon: 'fas fa-envelope' }
  ];



  // Función para abrir enlaces en nueva pestaña
  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
