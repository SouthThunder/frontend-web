import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // Create navigator 
  constructor(private router: Router) { }

  // Function to navigate to the home page
  register() {
    this.router.navigate(['/register'])
  }

  home() {
    this.router.navigate(['/'])
  }

}
