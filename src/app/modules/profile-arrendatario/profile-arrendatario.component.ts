import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RequestsArrendatarioComponent } from '../../components/requests-arrendatario/requests-arrendatario.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Cookies from 'js-cookie';

@Component({
  selector: 'app-profile-arrendatario',
  standalone: true,
  imports: [HeaderComponent, RequestsArrendatarioComponent, CommonModule],
  templateUrl: './profile-arrendatario.component.html',
  styleUrl: './profile-arrendatario.component.css'
})
export class ProfileArrendatarioComponent {
  mostrarSolicitudes = true;

  constructor(private router: Router) {

  }

  goToSolicitudes() {
    console.log('goToSolicitudes');
    this.mostrarSolicitudes = true;
  }

  closeSession() {
    Cookies.remove('token');
    this.router.navigate(['/']);
  }

  goToHistorial() {
    console.log('goToSolicitudes');
    this.mostrarSolicitudes = false;
  }
}
