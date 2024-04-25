import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  loggedIn: boolean = false;

  // Create navigator 
  constructor(private router: Router) { 
    if (localStorage.getItem('uid') != null) {
      this.loggedIn = true;
    }
  }

  // Function to navigate to the home page
  register() {
    this.router.navigate(['/register'])
  }

  login() {
    this.router.navigate(['/login'])
  }

  home() {
    this.router.navigate(['/'])
  }

}
