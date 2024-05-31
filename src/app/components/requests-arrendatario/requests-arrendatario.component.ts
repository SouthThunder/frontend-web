import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudArriendo } from '../../models/solicitudmodel';
import { SolicitudService } from '../../services/solicitudService/solicitud.service';
import Cookies from 'js-cookie';

@Component({
  selector: 'app-requests-arrendatario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './requests-arrendatario.component.html',
  styleUrls: ['./requests-arrendatario.component.css']
})
export class RequestsArrendatarioComponent {
  solicitudes: SolicitudArriendo[] = [];

  constructor(private solicitudService: SolicitudService) { }

  ngOnInit(): void {
    this.loadRequests();
  }

  async loadRequests() {
    try {
      const token = Cookies.get('token');
      console.log(token+"estoy entrando perra vida");
      if (token) {
        const response = await this.solicitudService.getSolicitudesByArrendador(token);
        this.solicitudes = response;
        console.log(this.solicitudes);
      } else {
        console.error('Token is undefined');
      }
    } catch (error) {
      console.error(error);
    }
  }
}
