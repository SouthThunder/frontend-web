import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Arrendador } from '../../models/arrendadormodel';


@Injectable({
  providedIn: 'root'
})
export class ArrendadorService {
  private urlApi= 'http://localhost:8080/arrendador';
  constructor(private http: HttpClient) { }
  getArrendadores(){ 
    return this.http.get<Arrendador>(this.urlApi);
  }
  postArrendador(arrendador: Arrendador){
    return this.http.post<Arrendador>(this.urlApi, arrendador);
  }
}
