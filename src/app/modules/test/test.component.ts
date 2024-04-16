import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { Arrendador } from '../../models/arrendadormodel';
import { ArrendadorService } from '../../services/arrendadorService/arrendador.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule,CommonModule, FormsModule]
})
export class TestComponent {
  mostrarFormulario: boolean = false;

  arrendador : Arrendador = {
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    contrasena: ''
  }

  userId: string | null = null;

  constructor(private arrendadorService: ArrendadorService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      
    });
  }

  toggleFormulario(): void {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  create(form: any){
    console.log(form.value);
    console.log(this.userId)
    this.updateArrendador(form.value);
}

eliminar(){
  this.deleteArrendador();
}


  updateArrendador(data: Arrendador){
    this.arrendadorService.updateArrendador(data, String(this.userId)).then(response => {
      console.log(response)
    },error=>{
      console.log(error);
    })
  }

  deleteArrendador(){
    this.arrendadorService.deleteArrendador(String(this.userId)).then(response => {
      console.log(response)
    },error=>{
      console.log(error);
    })
  }
}
