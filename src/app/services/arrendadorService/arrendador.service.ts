import { Injectable } from '@angular/core';
import { Arrendador } from '../../models/arrendadormodel';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class ArrendadorService {
  private urlApi= 'http://localhost:8080/arrendador';


  async getArrendadores(): Promise<Arrendador[]>{ 
    try {
      const response = await axios.get<Arrendador[]>(this.urlApi)
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getArrendador(correo: string, contrasena: string): Promise<Arrendador | null>{
    try {
      const response = await axios.post<Arrendador>(`${this.urlApi}`, {
        correo: correo,
        contrasena: contrasena
      })
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  
  async postArrendador(arrendador: Arrendador){
    try {
      const response = await axios.post<Arrendador>(this.urlApi, arrendador)
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
