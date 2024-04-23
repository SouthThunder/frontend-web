import { Component } from '@angular/core';
import { Header2Component } from '../../components/header2/header2.component';
import { PropertiesArrendadorComponent } from '../../components/properties-arrendador/properties-arrendador.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [Header2Component, PropertiesArrendadorComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
