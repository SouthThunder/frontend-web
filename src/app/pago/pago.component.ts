import { Component } from '@angular/core';

import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { ActivatedRoute } from '@angular/router';

import { PagoServiceService } from '../services/pago/pago.service.service';

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
  cardType: string = 'Unknown';
  cardImageUrl: string = './assets/default.png';

  valor: number = 0;

  constructor(private pagoService: PagoServiceService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.valor = Number(params.get('valor'));
    });
  }

  onSubmit() {
    console.log('Card Data:', this.cardNumber, this.cardName, this.cardMonth, this.cardYear, this.cardType);
  }

  onCardNumberChange(value: string) {
    this.cardNumber = value.replace(/\s+/g, ''); // Remove any whitespace
    this.formattedCardNumber = this.formatCardNumber(this.cardNumber);
    this.detectCardType(this.cardNumber);
  }

  formatCardNumber(cardNumber: string): string {
    return cardNumber.replace(/(\d{4})(?=\d)/g, '$1 '); // Adds a space after every 4 digits
  }

  detectCardType(cardNumber: string): void {
    if (cardNumber.startsWith('4')) {
      this.cardType = 'Visa';
      this.cardImageUrl = './assets/visa.png';
    } else if (/^5[1-5]/.test(cardNumber)) {
      this.cardType = 'MasterCard';
      this.cardImageUrl = './assets/mastercard.png';
    } else if (/^3[47]/.test(cardNumber)) {
      this.cardType = 'American Express';
      this.cardImageUrl = './assets/amex.png';
    } else {
      this.cardType = 'Unknown';
      this.cardImageUrl = './assets/default.png';
    }
  }

  createPago() {
    const pago = {
      numCuenta: this.cardNumber,
      valor: this.valor,
      banco: this.cardType
    };

    this.pagoService.createPago(pago).then((response) => {
      console.log('Pago created:', response);
    });
  }
}
