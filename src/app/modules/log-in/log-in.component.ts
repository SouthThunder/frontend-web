import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, NgModel, NgForm } from '@angular/forms';
import { ArrendatarioService } from '../../services/arrendatarioService/arrendatario.service';
import { ArrendadorService } from '../../services/arrendadorService/arrendador.service';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  verificar : string | undefined;
  
  usuario: string | undefined;
  contrasena: string | undefined;

  constructor(private arrendatarioService: ArrendatarioService, private arrendadorService: ArrendadorService) { }


  read(form: NgForm) {
    if (!form.valid) {
      return;  // Double-checking form validity (optional)
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


  getArrendatario(){
    // Cast Usuario to String
    this.arrendatarioService.getArrendatario(String(this.usuario), String(this.contrasena)).then(response => {
      console.log(response);
    },error=>{
      console.log(error);
    })
  }

  getArrendador(){
    // Cast Usuario to String
    this.arrendadorService.getArrendador(String(this.usuario), String(this.contrasena)).then(response => {
      console.log(response);
    },error=>{
      console.log(error);
    })
  }

  
}
