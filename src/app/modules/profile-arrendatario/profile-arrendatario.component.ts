import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RequestsArrendatarioComponent } from '../../components/requests-arrendatario/requests-arrendatario.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-arrendatario',
  standalone: true,
  imports: [HeaderComponent, RequestsArrendatarioComponent, CommonModule],
  templateUrl: './profile-arrendatario.component.html',
  styleUrl: './profile-arrendatario.component.css'
})
export class ProfileArrendatarioComponent {
  mostrarSolicitudes = true;
  goToSolicitudes() {
    console.log('goToSolicitudes');
    this.mostrarSolicitudes = true;
  }

  goToHistorial() {
    console.log('goToSolicitudes');
    this.mostrarSolicitudes = false;
  }
}
