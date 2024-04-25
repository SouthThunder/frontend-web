import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { PropertieComponent } from "../../propertie/propertie.component";


@Component({
    selector: 'app-properties-catalog',
    standalone: true,
    templateUrl: './properties-catalog.component.html',
    styleUrl: './properties-catalog.component.css',
    imports: [FooterComponent, HeaderComponent, PropertieComponent]
})
export class PropertiesCatalogComponent {

}
