import { Component } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators, FormsModule } from '@angular/forms';
import { ReactiveFormsModule, NgForm } from '@angular/forms';
import { ArrendatarioService } from '../../services/arrendatarioService/arrendatario.service';
import { ArrendadorService } from '../../services/arrendadorService/arrendador.service';
import { Arrendatario } from '../../models/arrendatariomodel';
import { Arrendador } from '../../models/arrendadormodel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  verificar : String | undefined;
  
  usuario: String | undefined;
  contrasena: String | undefined;

  constructor(private arrendatarioService: ArrendatarioService, private arrendadorService: ArrendadorService) { }


  read(){

    console.log(this.verificar);
    console.log(this.usuario);
    console.log(this.contrasena);

      if(this.verificar == "arrendatario"){
      
      }
      else if(this.verificar == "arrendador"){
        
      }
  }

  
}
