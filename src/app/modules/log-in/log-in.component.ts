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
import { AxiosError } from 'axios';

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
  errorMessage: string | undefined;


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
      this.errorMessage = "Las credenciales son incorrectas.";
      console.log(error);
    }
  }

  async getArrendador() {
    try {
      const response = await this.arrendadorService.getArrendador(String(this.usuario), String(this.contrasena)) as unknown as AuthResponse;
      console.log(response);
      Cookies.set('token', response.token ?? '');
      this.router.navigate(['/properties-catalog']);
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError?.response?.status === 401) {
        this.errorMessage = (axiosError?.response?.data as AxiosErrorResponse)?.message;
      } else {
        this.errorMessage = "Servidor no disponible. Intente de nuevo mas tarde.";
      }

      console.log(error);
    }
  }


}

interface AxiosErrorResponse {
  message: string;
  // include other properties you expect to receive
}