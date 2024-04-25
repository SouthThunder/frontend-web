import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { PropertieComponent } from "../../propertie/propertie.component";
import { Propiedad } from '../../models/propiedadmode';

import { PropertiesService } from '../../services/propiedad.service/properties.service';
import { NgFor } from '@angular/common';


@Component({
    selector: 'app-properties-catalog',
    standalone: true,
    templateUrl: './properties-catalog.component.html',
    styleUrl: './properties-catalog.component.css',
    imports: [FooterComponent, HeaderComponent, PropertieComponent, NgFor]
})
export class PropertiesCatalogComponent {

    propiedades: Propiedad[] = []; 

    constructor() {
        this.ngOnInit()
    }

    async ngOnInit() {
        const propertiesService = new PropertiesService();
        this.propiedades = await propertiesService.getProperties();
        console.log(this.propiedades)
    }

}
