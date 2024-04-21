import { Component } from '@angular/core';
import { Header2Component } from '../../components/header2/header2.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [Header2Component],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
