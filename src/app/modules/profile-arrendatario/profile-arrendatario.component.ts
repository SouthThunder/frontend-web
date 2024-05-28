import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RequestsArrendatarioComponent } from '../../components/requests-arrendatario/requests-arrendatario.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Cookies from 'js-cookie';

import { ArrendatarioService } from '../../services/arrendatarioService/arrendatario.service';

@Component({
  selector: 'app-profile-arrendatario',
  standalone: true,
  imports: [HeaderComponent, RequestsArrendatarioComponent, CommonModule],
  templateUrl: './profile-arrendatario.component.html',
  styleUrl: './profile-arrendatario.component.css'
})
export class ProfileArrendatarioComponent {
  mostrarSolicitudes = true;

  constructor(private router: Router, private arrendatarioService: ArrendatarioService) {
    this.getInfo();
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

  async getInfo() {
    try {
      if (!Cookies.get('token')) {
        this.router.navigate(['/']);
        return;
      }

      const token = Cookies.get('token') || ''; // Assign an empty string if Cookies.get('token') returns undefined
      const response = await this.arrendatarioService.authArrendatario(token)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

}
