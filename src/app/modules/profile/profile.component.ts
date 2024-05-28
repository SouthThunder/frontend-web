import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PropertiesArrendadorComponent } from '../../components/properties-arrendador/properties-arrendador.component';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestsArrendadorComponent } from '../../components/requests-arrendador/requests-arrendador.component';
import { CommonModule } from '@angular/common';
import { FormPropertyComponent } from '../../components/form-property/form-property.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent, PropertiesArrendadorComponent, RequestsArrendadorComponent, CommonModule, FormPropertyComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }


  async getInfo() {
    
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
