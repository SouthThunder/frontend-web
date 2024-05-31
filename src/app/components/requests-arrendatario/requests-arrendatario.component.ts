import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudArriendo } from '../../models/solicitudmodel';
import { SolicitudService } from '../../services/solicitudService/solicitud.service';
import Cookies from 'js-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests-arrendatario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './requests-arrendatario.component.html',
  styleUrls: ['./requests-arrendatario.component.css']
})
export class RequestsArrendatarioComponent {
  solicitudes: SolicitudArriendo[] = [];

  constructor(private solicitudService: SolicitudService, private router: Router) { }

  ngOnInit(): void {
    this.loadRequests();
  }

  async loadRequests() {
    try {
      const token = Cookies.get('token');
      if (token) {
        const response = await this.solicitudService.getSolicitudesByArrendatario(token);
        this.solicitudes = response;
        console.log(this.solicitudes);
      } else {
        console.error('Token is undefined');
      }
    } catch (error) {
      console.error(error);
    }
  }

  navigateToReview(solicitud: SolicitudArriendo) {
    this.router.navigate([`rentalapplication/${solicitud.propiedad.id}/${solicitud.id}`]);
  }
}
