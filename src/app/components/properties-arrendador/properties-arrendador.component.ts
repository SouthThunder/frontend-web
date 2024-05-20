import { Component, OnInit } from '@angular/core';
import { Properties } from '../../models/properties';
import { PropertiesService } from '../../services/propertiesService/properties.service';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { FormPropertyComponent } from '../form-property/form-property.component';

@Component({
  selector: 'app-properties-arrendador',
  templateUrl: './properties-arrendador.component.html',
  styleUrls: ['./properties-arrendador.component.css'],
  providers: [PropertiesService],
  imports: [CarouselModule, ButtonModule, TagModule, CommonModule, FormPropertyComponent],
  standalone: true
})

export class PropertiesArrendadorComponent implements OnInit {

  API_URL = 'http://localhost:8080/api/';

  properties: Properties[] = [];

  responsiveOptions: any[] | undefined;

  constructor(private propertiesservice: PropertiesService) { }

  ngOnInit() {
    this.properties = this.propertiesservice.getPropertiesSmall()

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return 'nada';
    }
  }


}
