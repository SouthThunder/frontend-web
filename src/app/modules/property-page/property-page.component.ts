import { Component } from '@angular/core';
import { RequestsArrendadorComponent } from '../../components/requests-arrendador/requests-arrendador.component';
import { FormPropertyComponent } from '../../components/form-property/form-property.component';

@Component({
  selector: 'app-property-page',
  standalone: true,
  imports: [RequestsArrendadorComponent, FormPropertyComponent],
  templateUrl: './property-page.component.html',
  styleUrl: './property-page.component.css'
})
export class PropertyPageComponent {
  mostrarSolicitudes = false;

  goToSolicitudes() {
    this.mostrarSolicitudes = true;
  }

  volverdeSolicitudes() {
    this.mostrarSolicitudes = false;
  }

  mostrarForm = false;

  popFormulario() {
    this.mostrarForm = true;
  }

  ocultarFormulario() {
    this.mostrarForm = false;
  }
}
