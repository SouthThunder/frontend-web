import { Component } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators, FormsModule } from '@angular/forms';
import { ReactiveFormsModule, NgForm } from '@angular/forms';
import { ArrendatarioService } from '../../services/arrendatarioService/arrendatario.service';
import { ArrendadorService } from '../../services/arrendadorService/arrendador.service';
import { Arrendatario } from '../../models/arrendatariomodel';
import { Arrendador } from '../../models/arrendadormodel';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-registry',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, FormsModule],
  templateUrl: './registry.component.html',
  styleUrl: './registry.component.css'
})
export class RegistryComponent {

  verificar : String | undefined;
  
  arrendador : Arrendador = {
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    contrasena: ''
  }

  arrendatario : Arrendatario = {
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    contrasena: ''
  }
 
  constructor(private arrendatarioService: ArrendatarioService, private arrendadorService: ArrendadorService) { }


create(form: any){

    if(this.verificar == "arrendatario"){
      this.createArrendatario(form.value);
    }
    else if(this.verificar == "arrendador"){
      this.createArrendador(form.value);
    }

}


  createArrendatario(data: Arrendatario){
  this.arrendatarioService.postArrendatario(data).then(response => {
    console.log(response);
  },error=>{
    console.log(error);
  })
}
  createArrendador(data: Arrendador){
    this.arrendadorService.postArrendador(data).then(response => {
      console.log(response);
    },error=>{
      console.log(error);
    })
  }

 
  
}
