import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileComponent } from '../../modules/profile/profile.component';
import { CommonModule } from '@angular/common';
import { PropertyPageComponent } from '../../modules/property-page/property-page.component';

@Component({
  selector: 'app-form-property',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './form-property.component.html',
  styleUrl: './form-property.component.css'
})
export class FormPropertyComponent {
  constructor(private router: Router) { }

  onSubmit() {
    this.router.navigate(['/property-page']);
  }

  
}
