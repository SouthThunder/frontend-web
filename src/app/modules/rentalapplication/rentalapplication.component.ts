import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-rentalapplication',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './rentalapplication.component.html',
  styleUrl: './rentalapplication.component.css'
})
export class RentalapplicationComponent {

}
