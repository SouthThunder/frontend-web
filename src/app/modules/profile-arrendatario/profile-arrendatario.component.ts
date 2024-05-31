import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RequestsArrendatarioComponent } from '../../components/requests-arrendatario/requests-arrendatario.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Cookies from 'js-cookie';

import { ArrendatarioService } from '../../services/arrendatarioService/arrendatario.service';
import { Arrendatario } from '../../models/arrendatariomodel';

@Component({
  selector: 'app-profile-arrendatario',
  standalone: true,
  imports: [HeaderComponent, RequestsArrendatarioComponent, CommonModule],
  templateUrl: './profile-arrendatario.component.html',
  styleUrl: './profile-arrendatario.component.css'
})
export class ProfileArrendatarioComponent {
  mostrarSolicitudes = true;
  arrendatario: Arrendatario | null = null;

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
      const token = Cookies.get('token');
      if (token) {
        const arrendatario = await this.arrendatarioService.authArrendatario(token);
        if (arrendatario) {
          console.log(arrendatario)
          this.arrendatario = arrendatario;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}
