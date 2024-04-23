import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-properties-arrendador',
  standalone: true,
  imports: [],
  templateUrl: './properties-arrendador.component.html',
  styleUrl: './properties-arrendador.component.css',
})
export class PropertiesArrendadorComponent {
  // La propiedad "indiceActual" para llevar un seguimiento del ítem actual visible
  indiceActual: number = 0;

  // La propiedad "anchoItem" debe corresponder al ancho de tus ítems en el carrusel
  anchoItem: number = 330; // Ajustar según el ancho real de tus ítems

  numeroTotalItems(): number {
    // Devuelve el número total de ítems, en este caso, el número de elementos dentro de ".slider-main"
    const sliderMain = document.querySelector('.slider-main');
    if (sliderMain) {
      return sliderMain.children.length;
    }
    return 0;
  }

  // Método para avanzar al siguiente ítem
  next(): void {
    // Incrementa el índice actual
    this.indiceActual++;
    // Verifica si el índice actual es igual al número total de ítems
    if (this.indiceActual === this.numeroTotalItems()) {
      // Reinicia el índice a cero para volver al primer ítem
      this.indiceActual = 0;
    }
    // Actualiza la posición del carrusel
    this.actualizarPosicion();
  }

  // Método para retroceder al ítem anterior
  prev(): void {
    // Decrementa el índice actual y actualiza la posición del carrusel
    this.indiceActual--;
    this.actualizarPosicion();
  }

  // Método para actualizar la posición del carrusel en la vista
  actualizarPosicion(): void {
    // Calcula la nueva posición
    const nuevaPosicion = this.indiceActual * this.anchoItem;
    // Utiliza una referencia al elemento del carrusel para actualizar su transformación
    const sliderMain = document.querySelector('.slider-main');
    if (sliderMain) {
      sliderMain.setAttribute('style', `transform: translateX(-${nuevaPosicion}px)`);
    }
  }
} 