import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Arrendatario } from '../../models/arrendatariomodel';
import axios, { AxiosResponse } from 'axios';


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
