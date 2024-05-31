import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import { ArrendatarioService } from '../../services/arrendatarioService/arrendatario.service';
import { ArrendadorService } from '../../services/arrendadorService/arrendador.service';
import { Arrendatario } from '../../models/arrendatariomodel';
import { Arrendador } from '../../models/arrendadormodel';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-registry',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent {

  verificar: string | undefined;

  arrendador: Arrendador = {
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    contrasena: ''
  }

  arrendatario: Arrendatario = {
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    contrasena: ''
  }

  constructor(private arrendatarioService: ArrendatarioService, private arrendadorService: ArrendadorService, private router: Router) { }

  create(form: NgForm) {
    if (!form.valid) {
      return;
    }

    if (this.verificar === "arrendatario") {
      this.createArrendatario(form.value);
    } else if (this.verificar === "arrendador") {
      this.createArrendador(form.value);
    }
  }

  createArrendatario(data: Arrendatario) {
    this.arrendatarioService.postArrendatario(data).then(response => {
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
    });
  }

  createArrendador(data: Arrendador) {
    this.arrendadorService.postArrendador(data).then(response => {
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
    });
  }
}
