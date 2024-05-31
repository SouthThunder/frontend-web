import { Injectable } from '@angular/core';
import axios from 'axios';
import { Pago } from '../../models/pagomodel';

import Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root'
})

export class PagoServiceService {

  private urlApi= 'https://gruposjaveriana.dynaco.co/grupo26/api/pago';

  async createPago(pago: Pago): Promise<Pago>{
    try {
      const response = await axios.post<Pago>(this.urlApi, pago, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }); 
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

}
