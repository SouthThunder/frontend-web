import { Component, Input } from '@angular/core';

import { HeaderComponent } from '../components/header/header.component';

import { Router } from '@angular/router';


import { Propiedad } from '../models/propiedadmode';

@Component({
  selector: 'app-propertie',
  standalone: true,
  imports: [PropertieComponent, HeaderComponent],
  templateUrl: './propertie.component.html',
  styleUrl: './propertie.component.css'
})
export class PropertieComponent {
  @Input()propertie!: Propiedad;

  constructor(private router: Router) { 

  }

  onClick(){
    console.log(this.propertie.id)
    this.router.navigate(['/rentalapplication', this.propertie.id])
  }

}
