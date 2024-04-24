import { Component } from '@angular/core';

import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './pago.component.html',
  styleUrl: './pago.component.css'
})
export class PagoComponent {
  cardNumber: string = '';
  cardName: string = '';
  cardMonth: string = '';
  cardYear: string = '';
  formattedCardNumber: string = '';

  onSubmit() {
    console.log('Card Data:', this.cardNumber, this.cardName, this.cardMonth, this.cardYear);
  }

  onCardNumberChange(value: string) {
    this.cardNumber = value.replace(/\s+/g, ''); // Remove any whitespace
    this.formattedCardNumber = this.formatCardNumber(this.cardNumber);
  }

  formatCardNumber(cardNumber: string): string {
    return cardNumber.replace(/(\d{4})(?=\d)/g, '$1 '); // Adds a space after every 4 digits
  }
}
