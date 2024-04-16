import { Injectable } from '@angular/core';
import { Arrendatario } from '../../models/arrendatariomodel';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})

export class ArrendatarioService {
  private urlApi= 'http://localhost:8080/arrendatario';
  
  async getArrendatarios():Promise<Arrendatario[]>{ 
    try {
      const response = await axios.get<Arrendatario[]>(this.urlApi);
      return response.data;
    } catch (error) {
      console.error(error);
      return []
    }
  }

  async getArrendatario(correo: string, contrasena: string): Promise<Arrendatario | null>{
    try {
      const response = await axios.post<Arrendatario>(`${this.urlApi}}`, {
        correo: correo,
        contrasena: contrasena
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async postArrendatario(arrendatario: Arrendatario){
    try {
      const response = await axios.post<Arrendatario>(this.urlApi, arrendatario);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
