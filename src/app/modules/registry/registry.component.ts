import { Component } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ArrendatarioService } from '../../services/arrendatarioService/arrendatario.service';
import { ArrendadorService } from '../../services/arrendadorService/arrendador.service';
import { Arrendatario } from '../../models/arrendatariomodel';
import { Arrendador } from '../../models/arrendadormodel';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-registry',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './registry.component.html',
  styleUrl: './registry.component.css'
})
export class RegistryComponent {
  
 
  constructor(private arrendatarioService: ArrendatarioService, private arrendadorService: ArrendadorService) { }
  get nombre(){
    return this.formUser.get('nombre') as FormControl;
  }
  get correo(){
    return this.formUser.get('correo') as FormControl;
  }
  get contrasena(){
    return this.formUser.get('contrasena') as FormControl;
  }
  get tipo() {
    return this.formUser.get('tipo') as FormControl;
  }
  get telefono(){
    return this.formUser.get('telefono') as FormControl;
  }
  get apellido(){
    return this.formUser.get('apellido') as FormControl;
  }
  formUser= new FormGroup({
    'nombre': new FormControl('',Validators.required),
    'apellido': new FormControl('',Validators.required),
    'correo': new FormControl('',[Validators.required,Validators.email]),
    'telefono': new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$')]),
    'contrasena': new FormControl('',[Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,15}$')]),
    'tipo': new FormControl('',Validators.required),
  });
 
  create(){
    let dataToSend: any;
    if(this.tipo.value == 'Arrendatario'){
      console.log("LLEGUE ARRENDATARIO")
       dataToSend = this.createArrendatarioData(this.formUser);
      this.createArrendatario(dataToSend);
  }
  if(this.tipo.value == 'Arrendador'){
    console.log("LLEGUE ARRENDADOR")
      dataToSend = this.createArrendadorData(this.formUser);
      this.createArrendador(dataToSend);
  }
}
createArrendatarioData(formData: any): Arrendatario {
  const { nombre, apellido, correo, telefono, contrasena } = formData.value;
  return { nombre, apellido, correo, telefono, contrasena };
}

createArrendadorData(formData: any): Arrendador {
  const { nombre, apellido, correo, telefono, contrasena } = formData.value;
  return { nombre, apellido, correo, telefono, contrasena };
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
