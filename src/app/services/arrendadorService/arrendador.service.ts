import { Injectable } from '@angular/core';
import { Arrendador } from '../../models/arrendadormodel';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class ArrendadorService {
  //private urlApi = 'http://localhost:8080/grupo26/api/arrendador';
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
      localStorage.setItem('user', "0");
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }


  async authArrendador(token: string): Promise<Arrendador | null> {
    try {
      const response = await axios.get<Arrendador>(`${this.urlApi}/jwt`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
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

  async getArrendadorByPropiedad(id: string): Promise<Arrendador | null> {
    try {
      const response = await axios.get<Arrendador>(`${this.urlApi}/bypropiedad/${id}`)
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
