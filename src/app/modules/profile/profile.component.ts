import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PropertiesArrendadorComponent } from '../../components/properties-arrendador/properties-arrendador.component';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestsArrendadorComponent } from '../../components/requests-arrendador/requests-arrendador.component';
import { CommonModule } from '@angular/common';
import { FormPropertyComponent } from '../../components/form-property/form-property.component';
import { ArrendadorService } from '../../services/arrendadorService/arrendador.service';
import { PropertiesService } from '../../services/propiedad.service/properties.service';
import { SolicitudService } from '../../services/solicitudService/solicitud.service';
import Cookies from 'js-cookie';
import { Arrendador } from '../../models/arrendadormodel';
import { Propiedad } from '../../models/propiedadmode';
import { SolicitudArriendo } from '../../models/solicitudmodel';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent, PropertiesArrendadorComponent, RequestsArrendadorComponent, CommonModule, FormPropertyComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  arrendador: Arrendador | null = null;
  propiedades: Propiedad[] = [];
  solicitudes: SolicitudArriendo[] = [];
  
  constructor(private router: Router, private route: ActivatedRoute, private arrendadorService: ArrendadorService, private propertiesService: PropertiesService, private solicitudService: SolicitudService) {
    Promise.all([this.getInfo(), this.getSolicitudes()]).then(() => this.getProperties());
  }

  closeSession() {
    Cookies.remove('token');
    this.router.navigate(['/']);
  }

  async getSolicitudes() {
    try {
      const token = Cookies.get('token');
      if (token) {
        const solicitudes = await this.solicitudService.getSolicitudesByArrendador(token);
        if (solicitudes) {
          this.solicitudes = solicitudes;
          console.log(solicitudes);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getProperties() {
    try {
      const properties = await this.propertiesService.getPropertiesByArrendador(this.arrendador?.id ?? 0);
      if (properties) {
        this.propiedades = properties;
        console.log(properties);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getInfo() {
    try {
      console.log(Cookies.get('token'));
      const token = Cookies.get('token');
      if (token) {
        const arrendador = await this.arrendadorService.authArrendador(token);
        if (arrendador) {
          console.log(arrendador)
          this.arrendador = arrendador;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  mostrarPropertiesArrendador = true;

  goToSolicitudes() {
    this.mostrarPropertiesArrendador = false;
  }

  goToPropiedades() {
    this.mostrarPropertiesArrendador = true;
  }

  mostrarFormulario = false;

  popFormulario() {
    this.mostrarFormulario = true;
  }

  ocultarFormulario() {
    console.log('ocultarFormulario');
    this.mostrarFormulario = false;
  }
}
