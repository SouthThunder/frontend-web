import { Injectable } from '@angular/core';
import { Arrendador } from '../../models/arrendadormodel';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class ArrendadorService {
  // private urlApi= 'http://localhost:8080/arrendador';
  private urlApi = 'https://gruposjaveriana.dynaco.co/grupo26/api/arrendador';


  async getArrendadores(): Promise<Arrendador[]> {
    try {
      const response = await axios.get<Arrendador[]>(this.urlApi)
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getArrendador(correo: string, contrasena: string): Promise<string | null> {
    try {
      const response = await axios.post<string>(`${this.urlApi}/login`, {
        correo: correo,
        contrasena: contrasena
      })
      return response.data;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        // Extraer el mensaje de error del backend
        throw new Error(error.response.data.message || 'An unknown error occurred!');
      }
      throw new Error('An unknown error occurred!');
    }
  }

  async updateArrendador(arrendador: Arrendador, id: string) {
    try {
      const response = await axios.put<Arrendador>(this.urlApi, arrendador)
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async postArrendador(arrendador: Arrendador) {
    try {
      const response = await axios.post<Arrendador>(this.urlApi, arrendador)
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteArrendador(id: string) {
    try {
      const response = await axios.delete<Arrendador>(`${this.urlApi}/${id}`)
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
