import { Injectable } from '@angular/core';
import { Arrendatario } from '../../models/arrendatariomodel';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})

export class ArrendatarioService {
  // private urlApi= 'http://localhost:8080/arrendador';
  private urlApi = 'https://gruposjaveriana.dynaco.co/grupo26/api/arrendatario/login';

  async getArrendatarios(): Promise<Arrendatario[]> {
    try {
      const response = await axios.get<Arrendatario[]>(this.urlApi);
      return response.data;
    } catch (error) {
      console.error(error);
      return []
    }
  }

  async getArrendatario(correo: string, contrasena: string): Promise<string | null> {
    try {
      console.log(this.urlApi)
      const response = await axios.post<string>(`${this.urlApi}`, {
        correo: correo,
        contrasena: contrasena
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // Extraer el mensaje de error del backend
        throw new Error(error.response.data.message || 'An unknown error occurred!');
      }
      throw new Error('An unknown error occurred!');
    }
  }

  async postArrendatario(arrendatario: Arrendatario) {
    try {
      const response = await axios.post<Arrendatario>(this.urlApi, arrendatario);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
