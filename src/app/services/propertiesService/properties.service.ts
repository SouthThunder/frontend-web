import { Injectable } from '@angular/core';
import { Properties } from '../../models/properties';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  private properties: Properties[] = [];

  constructor() {
    this.initProperties();
  }

  private initProperties() {
    this.properties.push(new Properties(1, "Casa de Campo", "Una hermosa casa en el campo.", 250000, "/assets/foto3.png"));
    this.properties.push(new Properties(2, "Apartamento Moderno", "Apartamento en el centro de la ciudad, con todas las comodidades modernas.", 300000, "/assets/foto3.png"));
    this.properties.push(new Properties(3, "Cabaña en la Montaña", "Perfecta para un fin de semana de descanso.", 150000, "/assets/foto3.png"));
    this.properties.push(new Properties(3, "Cabaña en la Montaña", "Perfecta para un fin de semana de descanso.", 150000, "/assets/foto3.png"));
    this.properties.push(new Properties(3, "Cabaña en la Montaña", "Perfecta para un fin de semana de descanso.", 150000, "/assets/foto3.png"));
    this.properties.push(new Properties(3, "Cabaña en la Montaña", "Perfecta para un fin de semana de descanso.", 150000, "/assets/foto3.png"));
    this.properties.push(new Properties(3, "Cabaña en la Montaña", "Perfecta para un fin de semana de descanso.", 150000, "/assets/foto3.png"));
    this.properties.push(new Properties(3, "Cabaña en la Montaña", "Perfecta para un fin de semana de descanso.", 150000, "/assets/foto3.png"));
    this.properties.push(new Properties(3, "Cabaña en la Montaña", "Perfecta para un fin de semana de descanso.", 150000, "/assets/foto3.png"));
    this.properties.push(new Properties(3, "Cabaña en la Montaña", "Perfecta para un fin de semana de descanso.", 150000, "/assets/foto3.png"));
    this.properties.push(new Properties(3, "Cabaña en la Montaña", "Perfecta para un fin de semana de descanso.", 150000, "/assets/foto3.png"));
    this.properties.push(new Properties(3, "Cabaña en la Montaña", "Perfecta para un fin de semana de descanso.", 150000, "/assets/foto3.png"));
    this.properties.push(new Properties(3, "Cabaña en la Montaña", "Perfecta para un fin de semana de descanso.", 150000, "/assets/foto3.png"));
    this.properties.push(new Properties(3, "Cabaña en la Montaña", "Perfecta para un fin de semana de descanso.", 150000, "/assets/foto3.png"));
    this.properties.push(new Properties(3, "Cabaña en la Montaña", "Perfecta para un fin de semana de descanso.", 150000, "/assets/foto3.png"));
    this.properties.push(new Properties(3, "Cabaña en la Montaña", "Perfecta para un fin de semana de descanso.", 150000, "/assets/foto3.png"));
    this.properties.push(new Properties(3, "Cabaña en la Montaña", "Perfecta para un fin de semana de descanso.", 150000, "/assets/foto3.png"));
  }

  getPropertiesSmall() {
    return this.properties;
  }
}
