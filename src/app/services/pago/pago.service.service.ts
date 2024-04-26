import { Injectable } from '@angular/core';
import axios from 'axios';
import { Pago } from '../../models/pagomodel';

@Injectable({
  providedIn: 'root'
})

export class PagoServiceService {

  private urlApi= 'https://gruposjaveriana.dynaco.co/grupo26/api/propiedad';

  async createPago(pago: Pago): Promise<Pago>{
    try {
      const response = await axios.post<Pago>(this.urlApi, pago); 
      return response.data;
    } catch (error) {
      console.log(error);
      return {} as Pago;
    }
  }

}
