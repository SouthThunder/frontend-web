import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PropertiesArrendadorComponent } from '../../components/properties-arrendador/properties-arrendador.component';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestsArrendadorComponent } from '../../components/requests-arrendador/requests-arrendador.component';
import { CommonModule } from '@angular/common';
import { FormPropertyComponent } from '../../components/form-property/form-property.component';
import { ArrendadorService } from '../../services/arrendadorService/arrendador.service';
import Cookies from 'js-cookie';
import { Arrendador } from '../../models/arrendadormodel';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent, PropertiesArrendadorComponent, RequestsArrendadorComponent, CommonModule, FormPropertyComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  arrendador: Arrendador | null = null;

  constructor(private router: Router, private route: ActivatedRoute, private arrendadorService : ArrendadorService) { 
    this.getInfo();
  }

  async getInfo() {
    try {
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
