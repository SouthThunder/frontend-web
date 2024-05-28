import { Component, Input } from '@angular/core';
import { SolicitudArriendo } from '../../models/solicitudmodel';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-requests-arrendador',
  standalone: true,
  imports: [NgFor],
  templateUrl: './requests-arrendador.component.html',
  styleUrl: './requests-arrendador.component.css'
})
export class RequestsArrendadorComponent {

  @Input() solicitudes: SolicitudArriendo[] = [];

  constructor() {
    console.log('this.solicitudes')
    console.log(this.solicitudes);
  }

}
