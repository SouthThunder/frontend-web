import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileComponent } from '../../modules/profile/profile.component';
import { CommonModule } from '@angular/common';
import { PropertyPageComponent } from '../../modules/property-page/property-page.component';

import { ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';

import { PropertiesService } from '../../services/propiedad.service/properties.service';

import { Propiedad } from '../../models/propiedadmode';
@Component({
  selector: 'app-form-property',
  standalone: true,
  imports: [ProfileComponent, PropertyPageComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-property.component.html',
  styleUrl: './form-property.component.css'
})
export class FormPropertyComponent {
  constructor(private router: Router, private propertiesService: PropertiesService) { }
  propiedad: Propiedad | undefined;
  onSubmit(form: NgForm) {
    console.log(form);
  }


  async create(form: NgForm) {
    if (!form.valid) {
      return;
    }

    //Igualar propiedad con el formulario
    this.propiedad = form.value;

    console.log(this.propiedad);

    const nuevaPropiedad: Propiedad = {
      nombre: form.value.nombre,
      descripcion: form.value.descripcion,
      valor: form.value.valor_noche,
      estado: form.value.estado === 'Disponible',
      arrendador: 1, // Asumiendo un valor fijo para el ejemplo
      solicitudes: [],
      piscina: form.value.piscina === 'true',
      banos: form.value.banos,
      habitaciones: form.value.habitaciones,
      asador: form.value.asador === 'true',
      mascotas: form.value.mascotas === 'true',
      ciudad: form.value.municipio,
      departamento: form.value.departamento
    };

    console.log(nuevaPropiedad);

    try {
      const response = await this.propertiesService.createProperty(nuevaPropiedad);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

}
