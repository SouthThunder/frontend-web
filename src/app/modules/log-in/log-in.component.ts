import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, NgModel, NgForm } from '@angular/forms';
import { ArrendatarioService } from '../../services/arrendatarioService/arrendatario.service';
import { ArrendadorService } from '../../services/arrendadorService/arrendador.service';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

import Cookies from 'js-cookie';

import { Router } from '@angular/router';
import { AuthResponse } from '../../models/auth.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  verificar: string | undefined;

  usuario: string | undefined;
  contrasena: string | undefined;

  constructor(private arrendatarioService: ArrendatarioService, private arrendadorService: ArrendadorService, private router: Router, private snackBar: MatSnackBar) { }


  read(form: NgForm) {
    if (!form.valid) {
      return;
    }

    if (this.verificar === "arrendatario") {
      this.getArrendatario();
    } else if (this.verificar === "arrendador") {
      this.getArrendador();
    }
  }

  hasError(field: NgModel, errorCode: string): boolean {
    return field.errors?.[errorCode] && field.touched;
  }


  async getArrendatario() {
    // Cast Usuario to String

    try {
      const response = await this.arrendatarioService.getArrendatario(String(this.usuario), String(this.contrasena)) as unknown as AuthResponse;
      Cookies.set('token', response.token ?? '');
      this.router.navigate(['/properties-catalog']);
    } catch (error) {
      // console.log(error);
      this.snackBar.open((error as Error).message, 'Cerrar', {
        duration: 5000,
      });
    }
  }

  async getArrendador() {
    try {
      const response = await this.arrendadorService.getArrendador(String(this.usuario), String(this.contrasena)) as unknown as AuthResponse;
      console.log(response);
      Cookies.set('token', response.token ?? '');
      this.router.navigate(['/properties-catalog']);
    } catch (error) {
      //console.log(error);
      this.snackBar.open((error as Error).message, 'Cerrar', {
        duration: 5000,
      });
    }
  }


}
