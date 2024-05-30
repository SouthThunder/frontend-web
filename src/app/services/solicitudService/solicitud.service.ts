import { Injectable } from '@angular/core';
import { SolicitudArriendo } from '../../models/solicitudmodel';
import Cookies from 'js-cookie';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private urlApi = 'https://gruposjaveriana.dynaco.co/grupo26/api/solicitudArriendo';
  async getSolicitudes(): Promise<SolicitudArriendo[]> {
    try {
      const response = await axios.get<SolicitudArriendo[]>(this.urlApi);
      return response.data;
    } catch (error) {
      console.error(error);
      return []
    }
  }
  async createSolicitud(solicitud: SolicitudArriendo) {
    try {
      const response = await axios.post<SolicitudArriendo>(this.urlApi, solicitud, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }


  async getSolicitudesByArrendador(token: string): Promise<SolicitudArriendo[]> {
    try {
      const response = await axios.get<SolicitudArriendo[]>(`${this.urlApi}/get/arrendatario`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return []
    }
  }


  async updateSolicitud(solicitud: SolicitudArriendo): Promise<SolicitudArriendo | null> {
    try {
      const response = await axios.put<SolicitudArriendo>(this.urlApi, solicitud, {
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
