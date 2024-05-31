import { Injectable } from '@angular/core';
import { Propiedad } from '../../models/propiedadmode';
import axios from 'axios';
import Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  // private urlApi = 'https://localhost:8080/grupo26/api/propiedad';
  private urlApi = 'https://gruposjaveriana.dynaco.co/grupo26/api/propiedad';

  async createProperty(property: Propiedad) {
    try {
      console.log(Cookies.get('token'));
      const response = await axios.post<Propiedad>(this.urlApi, {
        ...property,
        valor: property.valor,
        estado: "Disponible",
        arrendador: {
          id: property.arrendador
        }
      }, {
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

  async getProperties(): Promise<Propiedad[]> {
    try {
      const response = await axios.get<Propiedad[]>(this.urlApi);
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getPropertiesbyId(id: string): Promise<Propiedad> {
    try {
      const response = await axios.get<Propiedad>(`${this.urlApi}/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return {} as Propiedad;
    }
  }

  async getPropertiesByArrendador(id: number): Promise<Propiedad[]> {
    try {
      const response = await axios.get<Propiedad[]>(`${this.urlApi}/arrendador/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

}
