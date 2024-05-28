import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { PropertieComponent } from "../../propertie/propertie.component";
import { Propiedad } from '../../models/propiedadmode';
import { SweetAlertService } from '../../services/sweetAlertService/sweet-alert.service';
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

    filters = {
        beds: false,
        baths: false,
        pool: false,
        grill: false,
        pets: false,
        popularity: false
    }

    filters = {
        beds: false,
        baths: false,
        pool: false,
        grill: false,
        pets: false,
        popularity: false
    }

    constructor(private sweetAlertService: SweetAlertService) {
        this.ngOnInit()
    }
    mostrarAlerta() {
        this.sweetAlertService.mostrarCorrectamente('Propiedades encontradas');
      }

    async ngOnInit() {
        const propertiesService = new PropertiesService();
        this.propiedades = await propertiesService.getProperties();
        console.log(this.propiedades)
    }

    resetFilters(): void {
        this.filters = {
            beds: false,
            baths: false,
            pool: false,
            grill: false,
            pets: false,
            popularity: false
        }
    }

    sortPropertiesByBeds(): void {
        this.resetFilters()
        this.propiedades.sort((a, b) => b.habitaciones - a.habitaciones);
        this.filters.beds = true;
    }

    sortPropertiesByBaths(): void {
        this.resetFilters()
        this.propiedades.sort((a, b) => b.banos - a.banos);
        this.filters.baths = true;
    }

    sortPropertiesByPool(): void {
        this.resetFilters()
        this.propiedades.sort((a, b) => a.piscina ? -1 : 1);
        this.filters.pool = true;
    }

    sortPropertiesByGrill(): void {
        this.resetFilters()
        this.propiedades.sort((a, b) => a.asador ? -1 : 1);
        this.filters.grill = true;
    }

    sortPropertiesByPets(): void {
        this.resetFilters()
        this.propiedades.sort((a, b) => a.mascotas ? -1 : 1);
        this.filters.pets = true;
    }

    sortPropertiesByPopularity(): void {
        this.resetFilters()
        this.propiedades.sort((a, b) => b.solicitudes.length - a.solicitudes.length);
        this.filters.popularity = true;
    }

}
