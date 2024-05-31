import { Injectable } from '@angular/core';
import { Arrendatario } from '../../models/arrendatariomodel';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})

export class ArrendatarioService {
  // private urlApi= 'http://localhost:8080/grupo26/api/arrendatario';
  private urlApi = 'https://gruposjaveriana.dynaco.co/grupo26/api/arrendatario';

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
      const response = await axios.post<string>(`${this.urlApi}/login`, {
        correo: correo,
        contrasena: contrasena
      });
      localStorage.setItem('user', "1");
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async authArrendatario(token: string): Promise<Arrendatario | null> {
    try {
      const response = await axios.get<Arrendatario>(`${this.urlApi}/jwt`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
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
