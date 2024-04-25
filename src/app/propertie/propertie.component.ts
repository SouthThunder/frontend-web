import { Component } from '@angular/core';

import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-propertie',
  standalone: true,
  imports: [PropertieComponent, HeaderComponent],
  templateUrl: './propertie.component.html',
  styleUrl: './propertie.component.css'
})
export class PropertieComponent {

}
