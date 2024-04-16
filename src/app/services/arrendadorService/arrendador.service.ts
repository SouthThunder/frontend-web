import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Arrendador } from '../../models/arrendadormodel';
import axios, { AxiosResponse } from 'axios';


@Injectable({
  providedIn: 'root'
})
export class ArrendadorService {
  private urlApi= 'http://localhost:8080/arrendador';
  getArrendadores(): Promise<Arrendador[]>{ 
    return axios.get<Arrendador[]>(this.urlApi).then(response=>response.data);
  }
  postArrendador(arrendador: Arrendador){
    return axios.post<Arrendador>(this.urlApi, arrendador).then(response=>response.data);
  }
}
