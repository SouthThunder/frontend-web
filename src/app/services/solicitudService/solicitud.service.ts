import { Injectable } from '@angular/core';
import { SolicitudArriendo } from '../../models/solicitudmodel';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private urlApi= 'https://gruposjaveriana.dynaco.co/grupo26/api/solicitudArriendo';
  async getSolicitudes(): Promise<SolicitudArriendo[]>{ 
    try {
      const response = await axios.get<SolicitudArriendo[]>(this.urlApi);
      return response.data;
    } catch (error) {
      console.error(error);
      return []
    }
  }
  async createSolicitud(solicitud: SolicitudArriendo){
    try {
      const response = await axios.post<SolicitudArriendo>(this.urlApi, solicitud);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
