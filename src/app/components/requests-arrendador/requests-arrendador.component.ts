import { Component, Input } from '@angular/core';
import { SolicitudArriendo } from '../../models/solicitudmodel';
import { SolicitudService } from '../../services/solicitudService/solicitud.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-requests-arrendador',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './requests-arrendador.component.html',
  styleUrl: './requests-arrendador.component.css'
})
export class RequestsArrendadorComponent {

  @Input() solicitudes: SolicitudArriendo[] = [];

  localSolicitud: SolicitudArriendo | null = null;

  constructor(private solicitudService: SolicitudService) {
    console.log('this.solicitudes')
    console.log(this.solicitudes);
  }


  async acceptRequest(solicitud: SolicitudArriendo) {
    this.localSolicitud = solicitud;
    this.localSolicitud!.estado = true;
    try {
      const response = await this.solicitudService.updateSolicitud(this.localSolicitud!);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  declineRequest(solicitud: SolicitudArriendo) {
    this.localSolicitud = solicitud;
    this.localSolicitud!.estado = false;
    try {
      const response = this.solicitudService.updateSolicitud(this.localSolicitud!);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

}
