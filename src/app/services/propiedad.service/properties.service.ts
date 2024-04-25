import { Injectable } from '@angular/core';
import { Propiedad } from '../../models/propiedadmode';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  private urlApi= 'https://gruposjaveriana.dynaco.co/grupo26/api/propiedad';

  async getProperties(): Promise<Propiedad[]>{
    try {
      const response = await axios.get<Propiedad[]>(this.urlApi); 
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  async getPropertiesbyId(id: string): Promise<Propiedad[]>{
    try {
      const response = await axios.get<Propiedad[]>(`${this.urlApi}/${id}`); 
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  
}
