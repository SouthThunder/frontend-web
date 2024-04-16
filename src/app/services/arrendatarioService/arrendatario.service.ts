import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Arrendatario } from '../../models/arrendatariomodel';
import axios, { AxiosResponse } from 'axios';


@Injectable({
  providedIn: 'root'
})
export class ArrendatarioService {
  private urlApi= 'http://localhost:8080/arrendatario';
  
  getArrendatarios():Promise<Arrendatario[]>{ 
    return axios.get<Arrendatario[]>(this.urlApi).then(response=>response.data);
  }
  postArrendatario(arrendatario: Arrendatario){
    return axios.post<Arrendatario>(this.urlApi, arrendatario).then(response=>response.data);
  }
}
