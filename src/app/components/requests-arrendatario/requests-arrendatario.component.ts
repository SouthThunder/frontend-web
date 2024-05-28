import { Component } from '@angular/core';
import { SolicitudArriendo } from '../../models/solicitudmodel';
import { SolicitudService } from '../../services/solicitudService/solicitud.service';

@Component({
  selector: 'app-requests-arrendatario',
  standalone: true,
  imports: [],
  templateUrl: './requests-arrendatario.component.html',
  styleUrl: './requests-arrendatario.component.css'
})
export class RequestsArrendatarioComponent {
  solicitudes: SolicitudArriendo[] = [];
  constructor(private solicitudService:SolicitudService) { }
  ngOnInit(): void {
    // this.loadRequests();
  }
  // async loadRequests(): Promise<void> {
  //   (await this.solicitudService.getRequests()).subscribe(
  //     (response) => {
  //       this.solicitudes = response || [];
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }


}
